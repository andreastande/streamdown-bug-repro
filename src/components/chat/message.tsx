import type { UIMessage } from "@ai-sdk/react"
import { Streamdown } from "streamdown"

function UserMessage({ message }: { message: UIMessage }) {
  const content = message.parts.find((part) => part.type === "text")?.text

  return (
    <div className="ml-auto w-fit max-w-2xl rounded-lg bg-secondary px-4 py-3">
      <span>{content}</span>
    </div>
  )
}

function AssistantMessage({ message }: { message: UIMessage }) {
  return message.parts.map((part, i) => {
    switch (part.type) {
      case "text":
        // we don't need to pass `status` to `isAnimating` prop, as message is not being streamed
        return <Streamdown key={`${message.id}-${i}`}>{part.text}</Streamdown>
      default:
        return null
    }
  })
}

export function Message({ message }: { message: UIMessage }) {
  return message.role === "user" ? <UserMessage message={message} /> : <AssistantMessage message={message} />
}
