import type { CVEntry } from "@/types/cv.types";

export const WORK_EXPERIENCE: CVEntry[] = [
  {
    startDate: "March 2026",
    endDate: "Current",
    company: "Sparqle",
    title: "Product Engineer",
    description: ["WIP"],
    location: "Amsterdam, Netherlands",
  },
  {
    startDate: "May 2025",
    endDate: "November 2025",
    company: "Input",
    title: "Product Engineer",
    description: [
      "I'm part of a small Sequoia-backed team building the next generation of email and collaboration tools. I work across the entire product surface, from shaping features to shipping them into production.",
      "My day-to-day spans building a native-feeling macOS desktop app with Electron, developing fullstack AI agents, and building a local-first data layer using PGLite and ElectricSQL. In spirit of the company we own features from idea to launch, working across frontend, backend, and infrastructure to improve performance, reliability, and overall UX.",
    ],
    stack: [
      "TypeScript",
      "React",
      "PGLite",
      "ElectricSQL",
      "Node.js",
      "Fastify",
      "AI SDKs",
      "Google Gemini",
      "OpenAI",
      "Electron",
    ],
    location: "Amsterdam, Netherlands",
    link: "https://input.so",
  },
  {
    startDate: "October 2022",
    endDate: "May 2025",
    company: "Zühlke Group",
    title: "Software Engineer",
    description: [
      "At Zühlke, I worked across a variety of client projects in FinTech, eCommerce and HealthTech, contributing to both frontend and backend systems in complex enterprise environments.",
      "I helped deliver production systems across 5+ projects, built backend services handling over 200,000 requests per day, and supported new client acquisitions through technical research and solution design. Along the way, I also played an active role in growing the internal blockchain community through training sessions and knowledge sharing.",
    ],
    stack: [
      "TypeScript",
      "React.js",
      "Node.js",
      "Azure (Functions, APIM, DevOps)",
      "AWS (Cognito, S3, CloudFront)",
      "Python",
      "Django",
      "FastAPI",
    ],
    location: "Frankfurt, Germany",
    link: "https://www.zuehlke.com/en",
  },
  {
    startDate: "October 2021",
    endDate: "October 2022",
    company: "Soulbonds.xyz",
    title: "Founding Engineer",
    description: [
      "I co-founded and built a decentralised reputation platform focused on on-chain identity and trust. In a two-person team, I engineered a scalable web application from the ground up, supporting over 1,000 concurrent users at launch.",
      "The project generated over $100,000 in revenue and secured comparable external funding, and I led technical integrations and partnerships with two major ecosystem players.",
    ],
    stack: ["Next.js", "Node.js", "Solidity", "Hardhat", "Foundry", "Ethereum"],
    location: "The Web 3.0",
    link: "https://paragraph.com/@soulbonds",
  },
  {
    startDate: "June 2020",
    endDate: "January 2021",
    company: "Jetbrains",
    title: "Research Intern",
    description: [
      "As part of JetBrains Research, I explored how novel data sources could improve code reviewer recommendation systems.",
      "The work resulted in a measurable improvement of over 3% in recommendation precision and was carried forward into a distinction-graded Master’s thesis, as well as a published conference preprint.",
    ],
    stack: ["Kotlin", "JVM", "Python", "Pandas", "NumPy"],
    location: "Remote",
    link: "https://arxiv.org/pdf/2104.09473",
  },
];

export const EDUCATION: CVEntry[] = [
  {
    startDate: "2017",
    endDate: "2021",
    company: "UCL",
    title: "Master of Engineering - MEng, Computer Science",
    description: [
      "Relevant courses include: Requirements Engineering, Information Retrieval and Data Mining, Financial Markets and Participants, Statistical Natural Language Processing.",
      "Part of UCL Ice Club Society - Captain of UCL Yetis C Team and club VP.",
    ],
    location: "London, United Kingdom",
  },
  {
    startDate: "2015",
    endDate: "2017",
    company: "Wellington School",
    title: "A-Levels: Maths, Further Maths, Physics, Design and Technology",
    description: [
      "Grade: A*A*AA, Merit for Advance Extension Award in Mathematics.",
      "Activities and societies: Elected School Captain & Represented the House at Student Council, Chess & Rugby Clubs, Geography Talks, Gold Award for Senior Mathematical Challenge.",
      "HMC Independent School in Somerset, England.",
    ],
    location: "Somerset, United Kingdom",
  },
];
