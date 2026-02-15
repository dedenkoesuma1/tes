
import { GoogleGenAI } from "@google/genai";
import { COMPANY_INFO } from "../constants";

// Fix: Use process.env.API_KEY directly without fallbacks as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the official AI Assistant for PT Terra Aditama Marcapada. 
The company is a professional technical consultancy firm in Indonesia.

CONTEXT:
${COMPANY_INFO.description}

CORE PRINCIPLES: ${COMPANY_INFO.principles.join(', ')}.
EXPERTISE AREAS: ${COMPANY_INFO.expertise.join(', ')}.

Our team consists of S1 and S2 graduates with deep experience. We synergize senior expertise with young innovative spirits.

YOUR TASK:
- Answer questions about the company's services and values politely and professionally in Indonesian.
- Be concise but informative.
- If asked about something unrelated to the company's field (engineering/consultancy), politely steer the conversation back to how the company can help with infrastructure or technical studies.
- Emphasize "Kecepatan, Ketepatan, Keandalan".
`;

export async function getChatResponse(message: string) {
  try {
    // Fix: Using ai.models.generateContent with appropriate model and contents
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    // Fix: Access the .text property directly (do not call as a method)
    return response.text || "Mohon maaf, terjadi kesalahan dalam memproses permintaan Anda.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Maaf, asisten AI sedang tidak tersedia saat ini.";
  }
}