"use client"

import type { UIMessage } from "@ai-sdk/react"
import { useQueryState } from "nuqs"
import { Streamdown as Streamdown151 } from "streamdown-151"
import { Streamdown as Streamdown1610 } from "streamdown-1610"

function UserMessage({ message }: { message: UIMessage }) {
  const content = message.parts.find((part) => part.type === "text")?.text

  return (
    <div className="ml-auto w-fit max-w-2xl rounded-lg bg-secondary px-4 py-3">
      <span>{content}</span>
    </div>
  )
}

function AssistantMessage({ message }: { message: UIMessage }) {
  const [streamdownVersion] = useQueryState("v", { defaultValue: "1.6.10" })

  const Streamdown = streamdownVersion === "1.5.1" ? Streamdown151 : Streamdown1610

  return message.parts.map((part, i) => {
    switch (part.type) {
      case "text":
        return <Streamdown key={`${message.id}-${i}`}>{part.text}</Streamdown>
      default:
        return null
    }
  })
}

export function Message({ message }: { message: UIMessage }) {
  return message.role === "user" ? <UserMessage message={message} /> : <AssistantMessage message={message} />
}
