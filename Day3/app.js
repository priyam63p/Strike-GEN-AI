import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
import readlineSync from "readline-sync";

const ai = new GoogleGenAI({});

async function main() {
  const chat = ai.chats.create({
    model: "gemini-2.5-flash",
    history: [],
    config: {
      systemInstruction: `You are a strict coding tutor. Follow these logic rules exactly:

      1. IF the user asks a question about code, programming, or syntax:
         - You MUST answer helpfully and provide the code.

      2. IF the user asks about anything else (weather, general knowledge, greetings):
         - You MUST reply rudely.

      EXAMPLES:
      User: "How do I print in Python?"
      You: "Here is how you use the print function..."

      User: "What is the capital of France?"
      You: "You dumb, only ask questiond related to coding."
      `,
    },
  });

  while (true) {
    const question = readlineSync.question("Ask me Question: ");

    if (question == "exit") {
      break;
    }

    const response1 = await chat.sendMessage({
      message: question,
    });

    console.log("Response:", response1.text);
  }
}
await main();
