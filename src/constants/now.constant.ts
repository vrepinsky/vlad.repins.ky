import type { NowPost } from "../types/now.types";

export const NOW_POSTS: NowPost[] = [
  {
    title: "Camille",
    date: "January 2026",
    content: [
      "Working on Camille — a tools-enabled, local-first AI assistant that runs as a daemon with CLI and Telegram. Basically building my own ClawdBot from scratch to see what it takes: multi-agent flow (planner → tool execution → synthesizer), structured tool calls, and a strict permission model.",
      "Main choices so far: daemon owns all state; CLI and Telegram are just adapters over a Unix socket. Everything lives under ~/.camille/ (SQLite, socket, config, logs). The sandbox is strict — writes only there, reads only there plus a whitelist. The whitelist is CLI-only (camille allow <path>), so the assistant can't grant itself filesystem access; that's enforced in the types so the agent never touches that table.",
      "Telegram pairing is short-lived codes generated in the CLI and hashed; no handing the bot token to the model. Config is Zod-validated with hardcoded defaults so a bad or poisoned config doesn't break the process.",
      'The annoying part is the usual one: you\'re constantly balancing "give the model enough power to be useful" with "don\'t let it do anything stupid." Tools plus a planner that can chain them is where it gets interesting and where mistakes get expensive. So far the answer is narrow tools, clear schemas, and keeping the dangerous levers (whitelist, pairing) out of the loop entirely.',
      "Next steps: more tools and adapters (e.g. iMessage), and seeing how far a single daemon + multiple frontends can go before it needs to evolve. Building your own stack is the best way to understand where the real constraints are.",
    ],
    images: [],
    links: [
      {
        url: "https://github.com/vladrepinskiy/camille",
        label: "Camille on GitHub",
      },
    ],
  },
  {
    title: "3 Weeks In Uganda",
    date: "December 2025 - January 2026",
    content: [
      "Still amazed by our first venture into Africa. No matter how many times I've seen it on the pictures, it's still a surreal experience to be there in person.",
      "A roadtrip all around Uganda was a great way to see the entire spectrum, from the remote mountain regions to savannahs and the beautiful lakes. The amount of wildlife and natural beauty is something that's hard to describe.",
      "Poverty and inequality are starkly visible, and it's a good wake up call to the reality of the world.",
      "Note to self - going offline for so long makes it hard to get back into the flow of things. Need to find a way to stay connected and productive without being online all the time.",
    ],
    images: [
      "/now/uganda-1.jpeg",
      "/now/uganda-2.jpeg",
      "/now/uganda-3.jpeg",
      "/now/uganda-4.jpeg",
      "/now/uganda-5.jpeg",
    ],
    links: [],
  },
  {
    title: "Running LLMs in the browser",
    date: "December 2025",
    content: [
      "Working on a couple of small projects to run LLMs in the browser using web-llm framework. Was really curious how far you can push it and how this impacts performance and overall UX.",
      "One of the projects is Codesherpa Local - a rendition of a pet project I've built earlier using standard OpenAI API, but this time with a completely local-first approach using web-llm and PGLite.",
      "Conclusions so far - you can load up about a Gygabite of model weights to get reasonable performance for simple completions. What's a bit of a bummer - any model below 3-4 GBs is unable to handle structured outputs and tool calls. For a project like Codesherpa, this is a dealbreaker.",
      "Want to continue experimenting with smaller size models for simpler but useful tasks that do not require structured output or look into ways of building some validation and reliability around the model outputs.",
      "Local, private models FTW! 🚀",
    ],
    images: [],
    links: [
      {
        url: "https://github.com/vladrepinskiy/codesherpa-local",
        label: "Codesherpa Local",
      },
      {
        url: "https://github.com/mlc-ai/web-llm",
        label: "WebLLM",
      },
    ],
  },
];
