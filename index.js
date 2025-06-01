import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync';

const ai = new GoogleGenAI({ apiKey: "AIzaSyD6YNY_4IHa0YNtPBHV-aj7YrmqyqV94f8" });

 const chat = ai.chats.create({
    model: "gemini-2.0-flash",
    history:[],
})

async function main(){
   
   const userProblem = readlineSync.question("Ask me anything--> ");
    const response = await chat.sendMessage({
    message: userProblem,
   });
   console.log("\n Response from AI:");
   console.log(response.text);
   main();
}


main();