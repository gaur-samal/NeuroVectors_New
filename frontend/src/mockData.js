// Mock data for Neural Vectors website

export const servicesData = [
  {
    id: 1,
    title: "AI Strategy & Consulting",
    description: "Designing intelligent AI roadmaps that align with your business goals and operational priorities, while ensuring ethical and scalable deployment.",
    features: [
      "AI Readiness Assessment",
      "Generative AI Use Case Ideation",
      "Risk & Compliance Evaluation",
      "ROI & Impact Forecasting"
    ],
    icon: "brain"
  },
  {
    id: 2,
    title: "Training & Workshops",
    description: "Empowering teams with practical, hands-on knowledge in AI, ML, and Generative AI to build internal capabilities and accelerate adoption.",
    features: [
      "Customized Learning Programs",
      "GenAI Labs & Hands-on Sessions",
      "AI/ML Upskilling Workshops",
      "Knowledge Transfer & Enablement"
    ],
    icon: "graduation-cap"
  },
  {
    id: 3,
    title: "AI Application Development",
    description: "Building intelligent, scalable, and ethical AI-powered applications that drive business transformation and unlock new opportunities.",
    features: [
      "Custom Multi-Agent AI Solutions",
      "RAG Systems & Knowledge Bases",
      "Model Selection & Optimization (GPT-5, Claude, Gemini)",
      "Agentic Frameworks with MCP & Function Calling",
      "AI Assistant Chatbots & Conversational Agents"
    ],
    icon: "code"
  }
];

export const ragMockResponse = {
  query: "What is Retrieval Augmented Generation?",
  response: "Retrieval Augmented Generation (RAG) is a hybrid AI architecture that combines the power of large language models with external knowledge retrieval. It works by first searching relevant documents from a knowledge base, then using those documents as context for the LLM to generate accurate, grounded responses. This approach significantly reduces hallucinations and enables AI systems to provide up-to-date, domain-specific information.",
  sources: [
    "AI Architecture Patterns - 2024",
    "LLM Best Practices Guide",
    "Enterprise AI Implementation"
  ]
};

export const agentMockResponse = {
  task: "Analyze market trends for AI consulting",
  steps: [
    { step: 1, action: "Searching market data...", status: "completed" },
    { step: 2, action: "Analyzing trends with GPT-5...", status: "completed" },
    { step: 3, action: "Generating insights...", status: "completed" }
  ],
  result: "Market analysis shows 47% YoY growth in GenAI consulting demand. Key drivers: Enterprise AI adoption, multi-agent systems, and agentic frameworks. Top LLMs deployed: GPT-5 (38%), Claude 3.7 (29%), Gemini 2.5 (21%)."
};

export const technologies = [
  "GPT-5 & GPT-4.1",
  "Claude 3.7 Opus",
  "Gemini 2.5 Pro",
  "LangChain & LangGraph",
  "Agentic Frameworks",
  "Model Context Protocol (MCP)",
  "Function Calling & Tools",
  "Vector Databases (Pinecone, Weaviate)",
  "RAG Architectures",
  "Multi-Agent Orchestration"
];

export const whyChooseUs = [
  {
    title: "Cutting-Edge Expertise",
    description: "Deep experience with latest LLMs (GPT-5, Claude 3.7, Gemini 2.5) and agentic frameworks including MCP, function calling, and multi-agent orchestration."
  },
  {
    title: "Production-Ready Solutions",
    description: "We build scalable, enterprise-grade AI applications with robust RAG systems, agent frameworks, and optimized model deployment strategies."
  },
  {
    title: "End-to-End Delivery",
    description: "From AI strategy and readiness assessment to custom development and team upskilling - we handle your entire AI transformation journey."
  },
  {
    title: "Ethical & Compliant",
    description: "All solutions designed with responsible AI principles, data privacy, and regulatory compliance at the core."
  }
];
