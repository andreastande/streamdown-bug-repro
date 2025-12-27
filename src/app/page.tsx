import type { UIMessage } from "@ai-sdk/react"
import { Chat } from "@/components/chat/chat"
import { StreamdownVersion } from "@/components/streamdown-version"

// simulate a db query that fetches messages
async function getMessages() {
  await new Promise((resolve) => setTimeout(resolve, 100))

  const messages: UIMessage[] = [
    {
      id: "1",
      role: "user",
      parts: [{ type: "text", text: "Could you help me illustrate this bug with Streamdown?" }],
    },
    {
      id: "2",
      role: "assistant",
      parts: [{ type: "text", text: "Sure! All you have to do is refresh the page." }],
    },
    {
      id: "3",
      role: "user",
      parts: [{ type: "text", text: "Oh, that's easy. What happens then?" }],
    },
    {
      id: "4",
      role: "assistant",
      parts: [
        {
          type: "text",
          text: `
            You'll notice that assistant messages briefly disappear, as they use Streamdown. 
            \n\n But user messages, which do not use Streamdown, are always visible.
          `,
        },
      ],
    },
    {
      id: "5",
      role: "user",
      parts: [{ type: "text", text: "Hmm, that's weird. Which versions does this bug exist in?" }],
    },
    {
      id: "6",
      role: "assistant",
      parts: [
        {
          type: "text",
          text: `
            It was introduced in v1.6.0, and has not been fixed in subsequent versions.
            \n\nCheck out [this link](https://github.com/vercel/streamdown/compare/streamdown%401.5.1...streamdown%401.6.0#files_bucket) to view the diff.
          `,
        },
      ],
    },
    {
      id: "7",
      role: "user",
      parts: [
        {
          type: "text",
          text: "So you recommend downgrading to v1.5.1 in this repo to see the expected behavior?",
        },
      ],
    },
    {
      id: "8",
      role: "assistant",
      parts: [
        {
          type: "text",
          text: "Yes! Then assistent messages won't disappear anymore, try it out yourself!",
        },
      ],
    },
  ]

  return messages
}

export default async function Page() {
  const initialMessages = await getMessages()

  return (
    <main className="flex min-h-screen justify-center px-8">
      <StreamdownVersion />
      <Chat initialMessages={initialMessages} />
    </main>
  )
}
