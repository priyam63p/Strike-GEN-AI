import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyCLvIjJBrGkX1EnQIZN__5PPc3SxdFr4U8",
});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [{ text: "What is my name?" }],
      },
      {
        role: "model",
        parts: [{ text: "I don't know your name. As an AI, I don't have access to personal information about you unless you choose to tell me." }],
      },
        {
        role: "user",
        parts: [{ text: "My name is Priyam" }],
      },
        {
        role: "model",
        parts: [{ text: "Okay, Priyam. It's nice to meet you! Is there something I can help you with, Priyam?" }],
      },
        {
        role: "user",
        parts: [{ text: "Can you guess my name?" }],
      },
        {
        role: "user",
        parts: [{ text: "Wow! I think you have a very sharp memory" }],
      },
    ],
  });
  console.log(response.text);
}

await main();
