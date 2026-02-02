
import { GoogleGenAI, Type } from "@google/genai";
import { SYSTEM_PROMPT } from '../constants';
import { ChatHistoryItem, GeminiResponse } from '../types';

export const getGeminiResponse = async (userMessage: string, history: ChatHistoryItem[] = []): Promise<GeminiResponse> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_PROMPT + "\n\nCRITICAL: You MUST respond in JSON format with two fields: 'text' (your message) and 'recommendedProgramId' (the id of the program you are recommending, or null if none).",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            text: { 
              type: Type.STRING,
              description: "The natural language response to the user."
            },
            recommendedProgramId: { 
              type: Type.STRING,
              description: "The ID of the recommended program from the list (masterclass, lep, board, crore, csuite). Leave null if not recommending a specific program yet."
            }
          },
          required: ["text"]
        },
        temperature: 0.7,
      },
    });

    const result = JSON.parse(response.text || "{}");
    return {
      text: result.text || "I'm here to help you navigate your leadership journey. Tell me more about your goals.",
      recommendedProgramId: result.recommendedProgramId || undefined
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      text: "I apologize, but I'm having trouble connecting to my wisdom center right now. Please try again or reach out to us at hello@iamironlady.com 💜"
    };
  }
};
