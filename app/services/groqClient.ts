// app/services/groqClient.ts
import ChatGroq from "groq-sdk";

export async function getGroqResponse(groqClient: ChatGroq, caption: string) {
    const completion = await groqClient.chat.completions.create({
        messages: [
            { role: "assistant", content: "请始终使用中文回答。" },
            { role: "user", content: caption },
        ],
        model: "llama3-70b-8192",
    });
    return completion.choices[0]?.message?.content || "";
}
