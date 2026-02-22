
import { GoogleGenAI } from "@google/genai";

export async function askAgriExpert(query: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: "Anda adalah pakar POPT (Pengamat Organisme Pengganggu Tumbuhan). Berikan saran teknis yang akurat, ramah, dan solutif bagi petani atau petugas lapangan terkait hama, penyakit tanaman, dan pengendalian hayati. Gunakan Bahasa Indonesia yang baik dan profesional.",
        tools: [{ googleSearch: {} }]
      }
    });

    const grounding = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const urls = grounding
      .map((chunk: any) => chunk.web?.uri)
      .filter(Boolean);

    return {
      text: response.text,
      sources: urls as string[]
    };
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
}
