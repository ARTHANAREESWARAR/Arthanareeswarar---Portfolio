const { useState, useEffect, useRef } = React;

// --- DATA ---
const PORTFOLIO_DATA = {
  name: "ARTHANAREESWARAR R",
  title: "Quant Researcher & AI/Data Science Engineer",
  email: "arthanareeswararravi@gmail.com",
  phone: "6381484305",
  links: [
    { name: "GitHub", url: "#", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/arthanareeswarar/", icon: "linkedin" },
    { name: "GeeksforGeeks", url: "#", icon: "code" },
    { name: "LeetCode", url: "#", icon: "code-2" }
  ],
  education: [
    {
      institution: "Bannari Amman Institute of Technology",
      degree: "Bachelor of Technology in Artificial Intelligence And Data Science (7.5 CGPA)",
      duration: "Nov, 2022 – May, 2026",
      location: "Erode, Tamil Nadu"
    }
  ],
  experience: [
    {
      company: "Georai",
      role: "AI Trainee",
      duration: "Present",
      skills: ["Python", "LangChain", "LangGraph", "AI Agents"],
      points: [
        "Currently building advanced AI agents and leveraging key frameworks including LangChain and LangGraph.",
        "Developing automated workflows and agentic solutions using Python to streamline complex AI tasks."
      ]
    },
    {
      company: "rfund.ai",
      role: "Quant Researcher Intern",
      duration: "Jun 2025 – Aug 2025",
      skills: ["Python", "Data Modeling", "Statistical Analysis", "Machine Learning"],
      points: [
        "Developed intraday and multi-timeframe trading strategies in Python, leveraging technical indicators such as Alpha Trend, breakout/reversal models, and volatility-based systems.",
        "Engineered a custom object-oriented backtesting framework simulating live market conditions, incorporating position sizing, slippage, risk management, and capital allocation.",
        "Implemented daily trading logic with time-based entry/exit filters and dynamic trailing stop-loss mechanisms for improved risk-adjusted returns.",
        "Collaborated with senior quants to validate strategies, perform performance analysis, and optimize models for both cryptocurrency and equity markets."
      ]
    },
    {
      company: "CastleGate Capital private Limited",
      role: "Quant Trader Intern",
      duration: "Aug 2025 – Sep 2025",
      skills: ["Python", "Algorithmic Trading", "Statistical Arbitrage", "Time Series Analysis"],
      points: [
        "Develop and deploy algorithmic trading strategies for equities, focusing on pairs trading and mean-reversion models.",
        "Analyze market data using statistical and econometric techniques to identify profitable trading opportunities.",
        "Backtest and optimize strategies across historical datasets to ensure robustness and risk-adjusted performance.",
        "Monitor live trades and adjust execution parameters based on real-time market conditions and risk management rules."
      ]
    },
    {
      company: "Transformative AI",
      role: "AI Intern",
      duration: "Previous",
      skills: ["Python", "OCR", "Document Intelligence", "Machine Learning"],
      points: [
        "Worked on an AI-powered Vendor Invoice Management (VIM) system to automate end-to-end invoice processing.",
        "Utilized OCR (Optical Character Recognition) and document intelligence techniques to extract structured data from invoice PDFs, including headers, line items, and quantities.",
        "Implemented validation logic to compare extracted data with purchase orders, ensuring accuracy and preventing over-invoicing.",
        "Designed support for multiple invoice uploads with quantity tracking against PO limits and remaining balances.",
        "Structured extracted data into organized formats for auditing and reporting, and built workflow tracking for stages such as upload, extraction, and validation.",
        "Focused on enhancing automation, accuracy, and scalability using AI-driven approaches."
      ]
    }
  ],
  projects: [
    {
      title: "AI-Powered Autism Support Chatbot",
      tech: ["Python", "LLaMA 2", "NLP"],
      points: [
        "Designed and developed a Generative AI chatbot using LLaMA 2, fine-tuned for autism-specific interactions to improve emotional understanding and communication effectiveness by over 50%.",
        "Implemented contextual awareness and adaptive response mechanisms to deliver personalized, empathetic, and consistent user experiences, enhancing overall interaction efficiency by 60%."
      ]
    },
    {
      title: "AI-Based Attendance Monitoring System",
      tech: ["Python", "TensorFlow", "OpenCV", "dlib", "FaceNet", "Streamlit"],
      points: [
        "Developed a real-time facial recognition system using 128-dimensional embeddings to automate student attendance with over 95% accuracy and enhanced reliability under varying conditions.",
        "Built a Streamlit-based interface integrated with Firebase backend for live tracking, reporting, and data analytics, improving overall efficiency and scalability."
      ]
    }
  ],
  achievements: [
    "Max CodeForces Rating 1466 (Specialist) | AIR 383 in Codeforces Round 1017 DIV4",
    "Max CodeChef Rating 1634 (3 star) | AIR 88 in Codechef Starters 181 Division 2",
    "Max LeetCode Rating 1857 (Knight Batch) | AIR 425 in Leetcode Weekly Contest 441",
    "Holding 3 Star at Hackerrank",
    "Holding 3 star at GeeksforGeeks"
  ],
  technicalSkills: {
    "Programming Languages": ["Python", "Java", "HTML", "CSS", "JavaScript", "SQL"],
    "Libraries": ["Pandas", "Numpy", "Seaborn", "Matplotlib", "Scikit-learn"],
    "Data Analytical Skills": ["Data Cleaning", "Exploratory Data Analysis (EDA)", "Data Visualization", "Feature Engineering"]
  }
};

// --- COMPONENTS ---

// Intersection Observer Hook for Scroll Animations
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const NavBar = () => {
  return (
    <header className="nav-header">
      <div className="container nav-content">
        <a href="#" className="nav-brand">A.R</a>
        <nav className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#achievements">Achievements</a>
        </nav>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-content reveal">
        <span className="hero-subtitle">Portfolio 2026</span>
        <h1 className="hero-title">
          Hi, I'm <br/><span>{PORTFOLIO_DATA.name}</span>
        </h1>
        <p className="hero-description">
          A passionate {PORTFOLIO_DATA.title} specializing in Python, Machine Learning, and Algorithmic Trading. 
          Currently pursuing B.Tech in AI & Data Science.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href={`mailto:${PORTFOLIO_DATA.email}`} className="btn btn-outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="container">
      <h2 className="section-title reveal">Experience</h2>
      <div className="timeline">
        {PORTFOLIO_DATA.experience.map((exp, idx) => (
          <div key={idx} className="timeline-item reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">{exp.role}</h3>
                  <div className="timeline-subtitle">{exp.company}</div>
                </div>
                <span className="timeline-date">{exp.duration}</span>
              </div>
              <div className="timeline-body">
                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <br/><br/>
      <h2 className="section-title reveal" style={{marginTop: '30px'}}>Education</h2>
      <div className="timeline">
        {PORTFOLIO_DATA.education.map((edu, idx) => (
          <div key={idx} className="timeline-item reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">{edu.degree}</h3>
                  <div className="timeline-subtitle">{edu.institution}</div>
                </div>
                <span className="timeline-date">{edu.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="container">
      <h2 className="section-title reveal">Featured Projects</h2>
      <div className="projects-grid">
        {PORTFOLIO_DATA.projects.map((proj, idx) => (
          <div key={idx} className="glass-card reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
            <h3 className="project-title">{proj.title}</h3>
            <div className="project-tech">
              {proj.tech.map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
              ))}
            </div>
            <ul style={{ listStyle: 'none' }}>
              {proj.points.map((p, i) => (
                <li key={i} style={{ marginBottom: '10px', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="container">
      <h2 className="section-title reveal">Technical Skills</h2>
      <div className="skills-container">
        {Object.entries(PORTFOLIO_DATA.technicalSkills).map(([category, skills], idx) => (
          <div key={idx} className="glass-card reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
            <div className="skill-category">
              <h4>{category}</h4>
              <div className="skill-list">
                {skills.map((skill, i) => (
                  <span key={i} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="container">
      <h2 className="section-title reveal">Achievements & Coding Profiles</h2>
      <ul className="achievements-list">
        {PORTFOLIO_DATA.achievements.map((ach, idx) => (
          <li key={idx} className="reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
            <span style={{ color: 'var(--text-primary)' }}>{ach}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Built with React & Motion Design.</p>
      <div className="social-links">
        {PORTFOLIO_DATA.links.map((link, idx) => (
          <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
};

const App = () => {
  useScrollReveal();
  
  return (
    <div className="app-container">
      <div id="bg-canvas"></div>
      <NavBar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
