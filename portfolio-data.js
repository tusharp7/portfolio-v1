const portfolio = {
  name: "Tushar Birajdar",
  title: "Software Engineer / Data Engineering / Full Stack",
  intro:
    "Electronics and Telecommunication graduate from PICT with experience in ETL pipelines, automation tooling, and real-time applications.",
  summary: [
    "I currently work at Bitwise as a Programmer Trainee, building scalable ETL workflows with SSIS, Informatica, Azure Data Factory, PySpark, and Microsoft Fabric.",
    "Alongside data engineering, I enjoy building full-stack and mobile products with React, Node.js, Flutter, and PostgreSQL, with a focus on reliability and useful product experiences."
  ],
  contact: {
    email: "tusharbirajdar2002@gmail.com",
    linkedin: "https://linkedin.com/in/TusharBirajdar",
    github: "https://github.com/Tusharp7"
  },
  education: {
    school: "Pune Institute of Computer Technology",
    degree: "B.E. in Electronics and Telecommunication Engineering",
    duration: "July 2021 - June 2025"
  },
  stats: [
    {
      value: "50M+",
      label: "records processed in PySpark-driven workflows"
    },
    {
      value: "600+",
      label: "coding problems solved across major platforms"
    },
    {
      value: "10,000+",
      label: "participants reached through contest leadership"
    }
  ],
  experience: [
    {
      company: "Bitwise",
      role: "Programmer Trainee",
      duration: "June 2025 - Present",
      location: "Pune, Maharashtra",
      description:
        "Designed and developed ETL workflows across multiple sources to automate extraction, transformation, and loading.",
      highlights: [
        "Built robust ETL pipelines using SSIS, Informatica, Azure Data Factory, and PySpark.",
        "Processed datasets exceeding 50M+ records with PySpark.",
        "Leveraged Microsoft Fabric for analytics and data visualization.",
        "Created reusable ETL templates and automated scheduling that reduced manual effort by 20 hours per month."
      ]
    },
    {
      company: "BMC Software",
      role: "Software Engineer Intern",
      duration: "Jan 2024 - June 2024",
      location: "Pune, Maharashtra",
      description:
        "Built Python-based tooling to improve UI test automation and locator maintenance across product versions.",
      highlights: [
        "Developed Locator Analyzer to automate DOM scanning and element extraction.",
        "Used BeautifulSoup for HTML parsing and Selenium for browser automation.",
        "Implemented locator change detection across product versions to reduce regression debugging overhead.",
        "Built modular components for WebDriver configuration, data parsing, and comparison logic."
      ]
    }
  ],
  projects: [
    {
      name: "CollabBoard",
      stack: "React, Node.js, Express.js, WebRTC",
      date: "Nov 2024",
      description:
        "A real-time collaborative whiteboard with live chat and interactive drawing tools for shared problem-solving.",
      bullets: [
        "Added socket-based communication for instant updates.",
        "Kept interaction latency low for smoother collaboration.",
        "Focused on multi-user workflows and real-time feedback."
      ],
      links: [
        {
          label: "Live",
          url: "https://collab-board1.vercel.app/"
        },
        {
          label: "Source",
          url: "https://github.com/tusharp7/CollabBoard-"
        }
      ]
    },
    {
      name: "Events Judging App",
      stack: "Flutter, Node.js, PostgreSQL",
      date: "Jan 2024",
      description:
        "A mobile judging platform enabling real-time scoring, automatic aggregation, and live leaderboard updates.",
      bullets: [
        "Enabled real-time scoring with instant result updates.",
        "Reduced result compilation effort through automation.",
        "Designed the experience for live-event speed and clarity."
      ],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/tusharp7/Handicraft_Haven"
        }
      ]
    },
    {
      name: "Handicraft Haven",
      stack: "Web App, Marketplace Experience",
      date: "Project",
      description:
        "A handcrafted products platform focused on presenting artisan work through a clean shopping and discovery experience.",
      bullets: [
        "Built as a dedicated product experience around handcrafted goods.",
        "Focused on browsing, presentation, and storefront-style interactions.",
        "Included as a portfolio project with its public source repository."
      ],
      links: [
        {
          label: "Source",
          url: "https://github.com/tusharp7/Handicraft_Haven"
        }
      ]
    }
  ],
  achievements: [
    {
      title: "2nd Runner-Up",
      detail:
        "Concepts 2025 international-level project exhibition at PICT, recognized among top innovations."
    },
    {
      title: "Codeforces Pupil",
      detail: "Global Rank 352 out of 6200+ in Round 928 (Div. 3)."
    },
    {
      title: "CodeChef 3-Star",
      detail: "Global Rank 17 out of 5500+ in Starters 124."
    },
    {
      title: "PICT INC Leadership",
      detail:
        "Organized the Pradyna contest with 10,000+ participants, including international attendees."
    }
  ],
  skills: [
    {
      category: "Languages",
      items: "C, C++, Python, Java, JavaScript, SQL"
    },
    {
      category: "Data & ETL",
      items: "SSIS, Informatica, PySpark, Microsoft Fabric, Azure Data Factory"
    },
    {
      category: "Frameworks",
      items: "React, Node.js, Express.js, Flutter, Firebase, Selenium"
    },
    {
      category: "Databases & Tools",
      items: "MySQL, MongoDB, PostgreSQL, Docker, Postman, Jupyter, Git"
    }
  ]
};

module.exports = portfolio;
