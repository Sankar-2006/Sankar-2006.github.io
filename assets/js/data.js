// Central data file for the entire portfolio site.
// Update this file only to change your content.

export const portfolioData = {
  site: {
    // Choose loader style: "name" or "normal"
    loaderType: "name",
    accentMode: "professional"
  },

  profile: {
    name: "Uma Sankar",
    shortRole: "ECE Student",
    heroEyebrow: "Embedded Systems Focus",
    heroSubtitle:
      "Electronics and Communication Engineering student interested in embedded systems, sensor integration, and practical product-oriented engineering.",
    about:
      "I am building a strong foundation in ECE fundamentals while developing hands-on experience with microcontrollers, communication systems, and debugging workflows. I am currently looking for internship opportunities where I can contribute to embedded projects and learn from experienced teams.",
    location: "Your City, India", // TODO: Update location
    availability: "Open to internships",
    focusAreas: [
      "Embedded C and microcontroller programming",
      "Sensor interfacing and calibration",
      "Communication systems fundamentals",
      "Hardware debugging and documentation"
    ]
  },

  contacts: {
    email: "yourmail@example.com", // TODO: Update your email
    phone: "+91-00000-00000", // TODO: Update your phone
    linkedin: "https://www.linkedin.com/in/your-profile", // TODO: Update LinkedIn URL
    github: "https://github.com/Sankar-2006",
    resume: "#" // TODO: Add resume link (example: ./assets/resume.pdf)
  },

  socials: [
    { label: "GitHub", url: "https://github.com/Sankar-2006" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/your-profile" }, // TODO: Update
    { label: "Resume", url: "#" } // TODO: Update
  ],

  stats: [
    { label: "Projects", value: 8, suffix: "+" },
    { label: "Core Focus", value: 3, suffix: " Areas" },
    { label: "Workshops", value: 5, suffix: "+" },
    { label: "Year", value: 2026, suffix: "" }
  ],

  skills: [
    {
      title: "Embedded Systems",
      tags: ["Embedded C", "Arduino", "GPIO", "Interrupts", "UART", "I2C"]
    },
    {
      title: "ECE Foundations",
      tags: ["Signals", "Communication", "Digital Electronics", "Analog Basics"]
    },
    {
      title: "Engineering Workflow",
      tags: ["Debugging", "Documentation", "Testing", "Problem Solving"]
    }
  ],

  projects: [
    {
      title: "Smart Sensor Monitoring Node",
      description:
        "Built a sensor-based monitoring setup with threshold alerts and structured calibration checks.",
      tech: ["Arduino", "Sensors", "Embedded"],
      link: "#" // TODO: Add project link
    },
    {
      title: "Communication Concepts Reference",
      description:
        "Created a concise reference for modulation and signal concepts with practical examples.",
      tech: ["Communication", "Signals", "Documentation"],
      link: "#" // TODO: Add project link
    },
    {
      title: "IoT Prototype Architecture",
      description:
        "Designed a data flow for device-to-dashboard transfer with a clean edge-to-cloud architecture.",
      tech: ["IoT", "Architecture", "System Design"],
      link: "#" // TODO: Add project link
    }
  ],

  education: [
    {
      period: "20XX - 20XX", // TODO: Update
      title: "B.Tech in Electronics and Communication Engineering",
      institution: "Your College Name", // TODO: Update
      details: "Relevant coursework: Signals and Systems, Digital Electronics, Communication Engineering."
    },
    {
      period: "20XX - 20XX", // TODO: Update
      title: "Higher Secondary / Intermediate",
      institution: "Your School or College", // TODO: Update
      details: "Strong foundation in mathematics and science with technical interest in electronics."
    }
  ],

  certifications: [
    {
      name: "Embedded Systems Workshop",
      org: "Organization Name", // TODO: Update
      year: "2025" // TODO: Update
    },
    {
      name: "IoT Fundamentals",
      org: "Platform Name", // TODO: Update
      year: "2025" // TODO: Update
    },
    {
      name: "Communication Systems Course",
      org: "Platform Name", // TODO: Update
      year: "2024" // TODO: Update
    }
  ]
};
