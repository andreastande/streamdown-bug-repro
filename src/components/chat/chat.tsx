"use client"

import { type UIMessage, useChat } from "@ai-sdk/react"
import { Message } from "./message"

export function Chat({ initialMessages }: { initialMessages: UIMessage[] }) {
  const { messages } = useChat({ messages: initialMessages })

  return (
    <div className="w-full max-w-3xl space-y-14 pt-14">
      {messages.map((msg) => (
        <Message key={msg.id} message={msg} />
      ))}
    </div>
  )
}
