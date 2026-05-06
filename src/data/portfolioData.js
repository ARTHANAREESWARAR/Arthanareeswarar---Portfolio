export const personal = {
  name: "Arthanareeswarar R",
  title: "AI Engineer",
  tagline: "Building intelligent AI solutions.",
  subTagline: "Machine Learning. Deep Learning. Data Engineering.",
  email: "arthanareeswararravi@gmail.com",
  phone: "6381484305",
  location: "Erode, Tamil Nadu",
  status: "Open to Opportunities",
  degree: "B.Tech in AI & Data Science · Bannari Amman Institute of Technology · 2026",
  links: {
    github: "https://github.com/ARTHANAREESWARAR",
    linkedin: "https://www.linkedin.com/in/arthanareeswarar/",
    leetcode: "https://leetcode.com/u/Rho_Ruler/",
    instagram: "https://codeforces.com/profile/Rho_Ruler",
  },
};

export const projects = [
  {
    id: "autism-chatbot",
    number: "01",
    name: "AI Autism Chatbot",
    subtitle: "AI-Powered Autism Support Chatbot",
    description:
      "Designed and developed a Generative AI chatbot using LLaMA 2, fine-tuned for autism-specific interactions to improve emotional understanding and communication effectiveness by over 50%. Implemented contextual awareness and adaptive response mechanisms.",
    tech: ["Python", "LLaMA 2", "NLP", "Generative AI"],
    metrics: [
      { value: "50%", label: "Improved Communication" },
      { value: "60%", label: "Interaction Efficiency" },
      { value: "1", label: "Custom Fine-Tuning" },
    ],
    accent: "#6ee7b7",
    year: "2025",
    featured: true,
    github: "#",
    live: "#",
  },
  {
    id: "attendance-system",
    number: "02",
    name: "Facial Recognition",
    subtitle: "AI-Based Attendance Monitoring System",
    description:
      "Developed a real-time facial recognition system using 128-dimensional embeddings to automate student attendance with over 95% accuracy. Built a Streamlit-based interface integrated with Firebase backend for live tracking and data analytics.",
    tech: ["Python", "TensorFlow", "OpenCV", "dlib", "FaceNet", "Streamlit", "Firebase"],
    metrics: [
      { value: "95%+", label: "Recognition Accuracy" },
      { value: "128-D", label: "Face Embeddings" },
      { value: "Live", label: "Analytics Tracking" },
    ],
    accent: "#a78bfa",
    year: "2025",
    featured: false,
    github: "#",
    live: "#",
  }
];

export const skills = [
  {
    category: "Languages & Core",
    icon: "⬡",
    items: ["Python", "Java", "Data Analysis (Pandas, NumPy)", "Data Visualization", "API Integration", "Git & GitHub"],
  },
  {
    category: "AI & Machine Learning",
    icon: "◈",
    items: ["Machine Learning", "Deep Learning", "Model Training & Evaluation", "Feature Engineering", "Computer Vision (OpenCV)", "128-D Face Embeddings"],
  },
  {
    category: "Generative AI & LLMs",
    icon: "◆",
    items: ["Generative AI & LLMs", "Prompt Engineering", "RAG", "AI Agent Development", "OpenAI API", "Embeddings & Search"],
  },
  {
    category: "Frameworks & Deployment",
    icon: "◉",
    items: ["LangChain", "LangGraph", "NLP", "Real-time AI Systems", "Streamlit", "Azure Blob Storage", "Model Deployment"],
  }
];

export const experience = [
  {
    role: "AI Trainee",
    company: "Georai",
    period: "Present",
    type: "Trainee",
    bullets: [
      "Building advanced AI agents leveraging key frameworks including LangChain and LangGraph.",
      "Developing automated workflows and agentic solutions using Python to streamline complex AI tasks."
    ],
  },
  {
    role: "Quant Researcher Intern",
    company: "rfund.ai",
    period: "Jun 2025 — Aug 2025",
    type: "Internship",
    bullets: [
      "Developed intraday and multi-timeframe trading strategies in Python, leveraging technical indicators such as Alpha Trend.",
      "Engineered a custom object-oriented backtesting framework simulating live market conditions, incorporating position sizing and risk management.",
      "Collaborated with senior quants to validate strategies, perform performance analysis, and optimize models for cryptocurrency and equity markets."
    ],
  },
  {
    role: "Quant Trader Intern",
    company: "CastleGate Capital Private Limited",
    period: "Aug 2025 — Sep 2025",
    type: "Internship",
    bullets: [
      "Developed and deployed algorithmic trading strategies for equities, focusing on pairs trading and mean-reversion models.",
      "Analyzed market data using statistical and econometric techniques to identify profitable trading opportunities.",
      "Backtested and optimized strategies across historical datasets to ensure robustness and risk-adjusted performance."
    ],
  },
  {
    role: "AI Intern",
    company: "Transformative AI",
    period: "Previous",
    type: "Internship",
    bullets: [
      "Worked on an AI-powered Vendor Invoice Management (VIM) system to automate end-to-end invoice processing.",
      "Utilized OCR and document intelligence techniques to extract structured data from invoice PDFs.",
      "Designed support for multiple invoice uploads with quantity tracking against PO limits and remaining balances."
    ],
  }
];

export const achievements = [
  {
    value: "1857",
    label: "LeetCode Rating",
    sub: "Knight Batch | AIR 425 in Weekly Contest 441",
    accent: "#a78bfa",
    countTo: 1857,
  },
  {
    value: "1634",
    label: "CodeChef Rating",
    sub: "3 Star | AIR 88 in Starters 181 Division 2",
    accent: "#f472b6",
    countTo: 1634,
  },
  {
    value: "1466",
    label: "CodeForces Rating",
    sub: "Specialist | AIR 383 in Round 1017 DIV4",
    accent: "#6ee7b7",
    countTo: 1466,
  },
];

export const certifications = [
  { name: "Holding 3 Star at Hackerrank", year: "2024", icon: "⭐" },
  { name: "Holding 3 Star at GeeksforGeeks", year: "2024", icon: "⭐" }
];