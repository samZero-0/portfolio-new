// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Kazi Samin Nawal",
  firstName: "Samin",
  roles: [
    "Full Stack Developer",
    "MERN Stack Engineer",
    "AI & LLM Builder",
    "ML Researcher",
  ],
  location: "Dhaka, Bangladesh",
  email: "samineminel271@gmail.com",
  phone: "+8801408828636",
  tagline:
    "I build scalable, user-friendly web applications and intelligent AI tools — chatbots, agents and RAG pipelines that solve real-world problems through code.",
  about: [
    "I'm a MERN stack developer with strong web, database and cloud skills, focused on building scalable, user-friendly applications.",
    "I also design and develop AI tools, chatbots and AI agents. Currently I'm a Full Stack Software Developer at the Data & Design Lab, University of Dhaka, where I built a Bangla voice + text AI chatbot. Alongside engineering, I've contributed to research in healthcare ML, computer vision and LLM-driven design — published at IEEE conferences.",
  ],
  resume: "/resume.pdf",
  socials: {
    github: "https://github.com/samZero-0",
    linkedin: "https://www.linkedin.com/in/kazi-samin-nawal/",
  },
};

export const focusAreas = [
  {
    title: "Full Stack Web",
    text: "React, Next.js, Node & FastAPI apps with clean UIs and solid APIs.",
  },
  {
    title: "AI & LLM Apps",
    text: "Chatbots, agents, RAG pipelines and voice interfaces (STT / TTS).",
  },
  {
    title: "ML Research",
    text: "Model development and evaluation on large, real-world datasets.",
  },
];

export type EducationStep = {
  period: string;
  level: string;
  title: string;
  school: string;
  status: string;
  note?: string;
  highlight?: boolean;
};

export const education: EducationStep[] = [
  {
    period: "2018",
    level: "SSC",
    title: "Secondary School Certificate",
    school: "Adamjee Cantonment Public School",
    status: "Graduated",
  },
  {
    period: "2020",
    level: "HSC",
    title: "Higher Secondary Certificate",
    school: "Adamjee Cantonment College",
    status: "Graduated",
  },
  {
    period: "2022 — 2026",
    level: "B.Sc.",
    title: "B.Sc. in Computer Science & Engineering",
    school: "Independent University, Bangladesh",
    note: "Specialized in software development and artificial intelligence.",
    status: "Graduated · CGPA 3.85",
    highlight: true,
  },
];

export const certifications = [
  { name: "Complete Web Development Course", issuer: "Programming Hero", date: "Mar 2025" },
  { name: "CCNA: Introduction to Networks", issuer: "Cisco", date: "Apr 2024" },
];

export type Experience = {
  org: string;
  role: string;
  period: string;
  points: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    org: "Data & Design Lab, University of Dhaka",
    role: "Full Stack Software Developer",
    period: "Aug 2026 — Present",
    points: [
      "Developed a Bangla AI chatbot for accessing electricity-related information through natural voice and text, achieving an SUS score of 84.9.",
      "Built the chatbot backend with Python and Flask, connecting LLMs with speech-to-text (STT) and text-to-speech (TTS) for voice-based conversations.",
    ],
    tags: ["Python", "Flask", "LLMs", "STT / TTS"],
  },
  {
    org: "Data & Design Lab, University of Dhaka",
    role: "Research Assistant",
    period: "Oct 2025 — Jul 2026",
    points: [
      "Developed and evaluated machine learning models for healthcare insurance fraud detection, analyzing 50.5 million real-world records.",
      "Worked with researchers and developers in an Agile team, using Git for version control and participating in code reviews.",
    ],
    tags: ["Machine Learning", "Python", "Jupyter", "Git"],
  },
  {
    org: "Independent University, Bangladesh",
    role: "Teaching Assistant",
    period: "Jan 2025 — Oct 2025",
    points: [
      "Conducted classes and hands-on workshops on HTML, CSS, JavaScript, modern web frameworks and AI technologies.",
      "Assisted students with practical implementation, debugging and project development.",
    ],
    tags: ["Teaching", "Web Development", "AI"],
  },
];

export type ProjectLink = { label: string; href: string };

export type Project = {
  title: string;
  summary: string;
  stack: string[];
  points: string[];
  links: ProjectLink[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "DnD Lab Workspace",
    summary:
      "A social platform for research teams to share updates, manage tasks and collaborate on files in one centralized workspace.",
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    points: [
      "Task tracking, file sharing and team collaboration to streamline research coordination.",
      "TypeScript and Python across the frontend, backend services and automation.",
    ],
    links: [
      { label: "Live", href: "https://portal.dndlab.xyz/" },
      { label: "GitHub", href: "https://github.com/Evanaxander/DnD-Lab-Research-Management-Platform" },
    ],
    featured: true,
  },
  {
    title: "Pantrypal",
    summary:
      "Smart pantry manager with an AI shopping assistant, freshness tracking and subscription bundles.",
    stack: ["Next.js", "Node.js", "Express", "MongoDB", "Groq AI"],
    points: [
      "Automated pantry tracking with real-time freshness insights and expiry alerts.",
      "AI chatbot for natural-language shopping, cart management and recipe suggestions.",
      "Flexible subscription bundle builder with secure orders and dynamic inventory.",
    ],
    links: [
      { label: "Live", href: "https://paltrypal.vercel.app/" },
      { label: "Client", href: "https://github.com/samZero-0/client-cse499" },
      { label: "Server", href: "https://github.com/samZero-0/server-cse499" },
    ],
  },
  {
    title: "Platemate",
    summary:
      "A university student food platform connecting home-style sellers with hungry students.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    points: [
      "Secure seller onboarding and product management.",
      "Real-time cart updates and order placement.",
      "Interactive UI with meal categories and diet plans.",
    ],
    links: [
      { label: "Live", href: "https://platemates.netlify.app/" },
      { label: "GitHub", href: "https://github.com/samZero-0/University_Student_Food_Platform_Project" },
    ],
  },
  {
    title: "MediCloud",
    summary:
      "A multi-vendor medicine e-commerce platform with role-based dashboards.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Firebase Auth"],
    points: [
      "Multi-role authentication with Firebase for secure login and registration.",
      "Dynamic product management for sellers.",
      "Dedicated admin, seller and user dashboards.",
    ],
    links: [
      { label: "Live", href: "https://assignemnt-12.web.app/" },
      { label: "Client", href: "https://github.com/samZero-0/MediCloud" },
      { label: "Server", href: "https://github.com/samZero-0/MediCloud-Backend" },
    ],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Flask", "FastAPI", "JWT", "WebSockets"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    title: "LLM & AI",
    items: ["LangChain", "RAG Pipelines", "Vector Databases", "Prompt Engineering"],
  },
  {
    title: "Machine Learning",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    title: "Tools & Languages",
    items: ["Python", "Java", "Git", "Docker"],
  },
];

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  pages: string;
  doi: string;
};

// Your name inside `authors` is highlighted automatically.
export const publications: Publication[] = [
  {
    title:
      "AI-Driven Persona Generation for User-Centered Design Research: Evaluating Quality and Consistency Across Large Language Models",
    authors: "M. J. H. Mekat, K. S. Nawal, et al.",
    venue: "ICMCSI",
    year: "2026",
    pages: "pp. 1918–1925",
    doi: "10.1109/ICMCSI67283.2026.11412817",
  },
  {
    title:
      "Deep Learning-Based Stenosis Segmentation in X-ray Angiography: Vision Transformers vs. CNNs",
    authors: "M. J. H. Mekat, K. S. Nawal, et al.",
    venue: "ICCIT",
    year: "2025",
    pages: "pp. 3553–3558",
    doi: "10.1109/ICCIT68739.2025.11490502",
  },
  {
    title:
      "Diabetes Management with Automated Health Monitoring and Diet Recommendations for Patients",
    authors: "H. Mekat, J. Hossain, K. Nawal, M. Alam, A. Ema, S. Ahmed, M. Hasan",
    venue: "IEEE SERA",
    year: "2025",
    pages: "pp. 309–314",
    doi: "10.1109/SERA65747.2025.11154527",
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "research", label: "Research" },
  { id: "contact", label: "Contact" },
];
