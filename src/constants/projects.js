// projects.js
export const projects = [
  {
    id: 1,
    name: "DispatchOS — AI Voice Dispatcher for Freight Logistics",
    description:
      "Headless voice agent pipeline for inbound freight logistics calls. Orchestrates Groq Whisper (speech-to-text), LLaMA 3 (reasoning), and gTTS (text-to-speech) into a full conversational loop with latency monitoring, structured error handling, and modular pipeline architecture built for production observability.",
    techStack: ["FastAPI", "Groq Whisper", "LLaMA 3", "gTTS", "Python"],
    imageUrl: "/assets/dispatchos-ss.png",
    github: "https://github.com/imHardik1606/DispatchOS",
    live: "https://dispatchos.vercel.app/"
  },
  {
    id: 2,
    name: "FlowGen — LLM Workflow Orchestration Engine",
    description:
      "Multi-step LLM transformation engine with async processing pipelines, retry logic, timeout controls, and request state tracking. Converts unstructured input into structured output through clearly defined API boundaries — built to stay stable under concurrent load.",
    techStack: ["Next.js", "TypeScript", "Gemini API"],
    imageUrl: "/assets/flowgen-ss.png",
    github: "https://github.com/imHardik1606/FlowGen",
    live: "https://flowgen.vercel.app/"
  },
  {
    id: 3,
    name: "MistralQnA — Embedding-Based Document QA",
    description:
      "RAG pipeline over long-form PDFs using FAISS vector similarity search to filter irrelevant context before LLM inference. Tuned chunk sizes and top-k retrieval to balance precision and latency, with structured logging and defensive error handling across retrieval and inference stages.",
    techStack: ["Python", "Mistral SDK", "FAISS", "Streamlit"],
    imageUrl: "/assets/mistralqna-ss.png",
    github: "https://github.com/imHardik1606/MistralQnA",
    live: "https://mistralqna.streamlit.app/"
  }
];