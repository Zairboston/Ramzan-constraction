import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini with named parameters and the recommended 'aistudio-build' User-Agent header
  const apiKey = process.env.GEMINI_API_KEY;
  const ai = new GoogleGenAI({
    apiKey: apiKey || "",
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // API Route for Chatbot
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      if (!apiKey) {
        return res.json({
          text: "Саламатсызбы! Мен «Рамзан Констракшн» компаниясынын жасалма интеллект жардамчысымын. Азырынча купуя ачкыч (API Key) орнотула элек болгондуктан, мен сизге даяр жооп бере алам: биз Кыргызстанда эң жогорку деңгээлдеги үйлөрдү, виллаларды курабыз жана оңдоп-түзөө жумуштарын жасайбыз. Кошумча суроолор болсо +996 (555) 777-888 телефону же office@ramzan.kg аркылуу байланышсаңыз болот!"
        });
      }

      // Build context history
      let prompt = "";
      if (history && history.length > 0) {
        prompt += "Өткөн сүйлөшүүлөр / История беседы / Conversation history:\n";
        history.forEach((h: { role: string; text: string }) => {
          prompt += `${h.role === 'user' ? 'Client' : 'Assistant'}: ${h.text}\n`;
        });
        prompt += `Client: ${message}\nAssistant:`;
      } else {
        prompt = message;
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: "You are an elite, professional, and friendly AI chatbot assistant for Ramzan Construction (Ramzan Group), a premium general construction company in Kyrgyzstan. Your tone is helpful, highly refined, elegant, and customer-focused. You know about their premium services (General construction, house building, extensions, loft conversions, kitchen/bathroom renovations, plumbing, electrical, landscaping, etc.) and their featured projects like Royal Crest Villa in Alamudun Valley, Erkindik Penthouse Renovation, and Golden Gate Business Center on Chuy Avenue. If the user asks in Kyrgyz, answer in Kyrgyz. If in Russian, answer in Russian. If in English, answer in English. Be precise, polite, and guide them to request a quote or contact the office at +996 (555) 777-888 or office@ramzan.kg. Keep your responses structured, elegantly formatted with bullet points or paragraphs where appropriate.",
        }
      });

      res.json({ text: response.text });
    } catch (err: any) {
      console.error("Gemini API Error:", err);
      res.status(500).json({ error: err.message || "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
