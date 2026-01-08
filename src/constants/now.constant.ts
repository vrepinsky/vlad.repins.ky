import type { NowPost } from "../types/now.types";

// Import all now page images - Bun will bundle these
import uganda1 from "../../public/now/uganda-1.jpeg";
import uganda2 from "../../public/now/uganda-2.jpeg";
import uganda3 from "../../public/now/uganda-3.jpeg";
import uganda4 from "../../public/now/uganda-4.jpeg";
import uganda5 from "../../public/now/uganda-5.jpeg";

export const NOW_POSTS: NowPost[] = [
  {
    title: "3 Weeks In Uganda",
    date: "December 2025 - January 2026",
    content: [
      "Still amazed by our first venture into Africa. No matter how many times I've seen it on the pictures, it's still a surreal experience to be there in person.",
      "A roadtrip all around Uganda was a great way to see the entire spectrum, from the remote mountain regions to savannahs and the beautiful lakes. The amount of wildlife and natural beauty is something that's hard to describe.",
      "Poverty and inequality are starkly visible, and it's a good wake up call to the reality of the world.",
      "Note to self - going offline for so long makes it hard to get back into the flow of things. Need to find a way to stay connected and productive without being online all the time.",
    ],
    images: [uganda1, uganda2, uganda3, uganda4, uganda5],
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
