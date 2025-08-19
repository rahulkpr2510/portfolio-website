import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Rahul Kapoor",
  initials: "RK",
  url: "https://rahul-kapoor.in",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/newdelhi",
  description: "Coding with Purpose. Building for Tomorrow.",
  summary: `
I'm Rahul Kapoor — a Full Stack Developer with a stronghold in the **MERN stack**, a growing enthusiasm for **AI/ML**, and a mindset tuned for impact-driven problem-solving.

My journey started in foundational languages like **C**, **C++**, and **Java**, and matured into building scalable applications with modern stacks like **React**, **Next.js**, and **Node.js**. My curiosity has recently extended into cloud-native systems and intelligent automation using **Python**, **Google AI APIs**, and **TypeScript**.

I believe in learning by doing. Whether it’s shipping privacy-first platforms, writing code that scales, or demystifying complex tech via blogs — I thrive in transforming raw ideas into production-ready products.
  `.trim(),
  avatarUrl: "/PICTURE.png",
  skills: [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "React Native",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "NeonDB",
    "MySQL",
    "Python",
    "Java",
    "C",
    "C++",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "rahulkpr1972@gamil.com",
    tel: "+91 9654741105",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rahulkpr2510",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rahulkapoor2510/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/rahulkapoor2510",
        icon: Icons.x,

        navbar: true,
      },
      LeetCode: {
        name: "X",
        url: "https://leetcode.com/u/rahulkapoor2510",
        icon: Icons.leetcode,

        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:rahulkpr1972@gmail.com",
        icon: Icons.atSign,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "GirlScript Summer of Code",
      href: "https://ggsoc.girlscript.tech/",
      badges: [],
      location: "New Delhi, India",
      title: "Contributor",
      logoUrl: "/GGSoc.png",
      start: "August 2025",
      end: "Present",
      description:
        "Selected as a contributor for GGSOC 2025. Actively contributing to open-source projects focused on web and mobile development using MERN stack, React Native, and other technologies. Collaborating with maintainers and fellow contributors while enhancing real-world software skills.",
    },
  ],
  education: [
    {
      school: "KCC Institute of Technology and Management",
      href: "https://kccitm.edu.in",
      degree: "B.Tech, Computer Science (AI & ML)",
      logoUrl: "/fiqdo4xu.4kd.png",
      start: "2023",
      end: "Present",
    },
    {
      school: "Modern Public School, Delhi",
      href: "https://mpsshalimarbagh.com",
      degree: "Senior Secondary (PCM + CS)",
      logoUrl: "/Modern_Public_School_1488_Logo_1.png",
      start: "2009",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Mentora - AI Career Coach",
      href: "https://mentora.rahul-kapoor.in",
      dates: "August 2025",
      active: true,
      description: `
Mentora is an AI-powered career coaching platform that delivers personalized guidance, real-time industry insights, and smart tools like resume builders and interview prep — built on a modern, scalable stack for a seamless user experience.
      `.trim(),
      technologies: [
        "Next.js",
        "JavaScript",
        "NeonDB",
        "Tailwind CSS",
        "Shadcn UI",
        "Clerk",
        "Inngest",
      ],
      links: [
        {
          type: "Website",
          href: "https://mentora.rahul-kapoor.in",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/rahulkpr2510/mentora",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Mentora.png",
    },
    {
      title: "MediSync - Doctor Appointment App",
      href: "https://medisync.rahul-kapoor.in",
      dates: "July 2025",
      active: true,
      description: `
A seamless platform for booking doctor appointments. MediSync simplifies healthcare access with real-time doctor profiles, specialties, and availability — built with a secure, scalable backend to ensure both trust and convenience.
      `.trim(),
      technologies: [
        "Next.js",
        "JavaScript",
        "NeonDB",
        "Tailwind CSS",
        "Shadcn UI",
        "Clerk",
        "Vonage",
      ],
      links: [
        {
          type: "Website",
          href: "https://medisync.rahul-kapoor.in",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/rahulkpr2510/medisync",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/MediSync.png",
    },
    {
      title: "Stealth Speak",
      href: "https://stealthspeak.rahul-kapoor.in/",
      dates: "Feb 2025",
      active: true,
      description: `
A privacy-first platform for anonymous voice messaging. Designed to empower users to speak freely without sacrificing identity or safety — Stealth Speak merges simplicity with security using a fully custom-built backend.
      `.trim(),
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Tailwind CSS",
        "Shadcn UI",
        "Google AI",
        "Resend",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.stealthspeak.xyz",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/rahulkpr2510/stealth-speak",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/StealthSpeak.png",
    },
  ],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  // ],

  Certifications: [
    {
      title:
        "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=068C64A535941359CB5E8831382CC3E328527C5651FC6C3427026F7690436227",
      description: "Oracle",
      date: "August, 2025",
    },
    {
      title: "Accenture Nordics - Software Engineering Job Simulation",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_cokPGdi2iT2GxN4ku_1754582676686_completion_certificate.pdf",
      description: "Accenture",
      date: "August, 2025",
    },
    {
      title: "Postman API Fundamentals Students Expert",
      link: "https://api.badgr.io/public/assertions/CSW10caETc-5ZKNPzimH9w",
      description: "Postman",
      date: "August, 2025",
    },
    {
      title: "Full Stack Developer Certification",
      link: "https://oneroadmap.io/skills/fs/certificate/CERT-2218588C",
      description: "OneRoadmap.io",
      date: "July, 2025",
    },
  ],
  Blogs: [
    {
      title: "Why Writing 100 Lines of Code Can Be Better Than Just 2",
      link: "https://why-writing-100-lines-of-code-can-be-better-than-just-2.hashnode.dev/why-writing-100-lines-of-code-can-be-better-than-just-2-a-gentle-introduction-to-time-complexity",
      description:
        "Exploring the hidden tradeoffs behind time complexity and code verbosity",
      date: "May, 2025",
    },
    {
      title: "Mastering Prompt Styles",
      link: "https://mastering-prompt-styles.hashnode.dev/mastering-prompt-styles-a-straightforward-guide-thatll-stick-with-you-forever",
      description:
        "Crafting prompts that stick — a practical guide for LLM beginners",
      date: "April, 2025",
    },
    {
      title: "Decoding AI Jargons with Chai",
      link: "https://decoding-the-jargons-of-ai-with-chai.hashnode.dev/decoding-ai-jargons-with-chai",
      description:
        "A conversational walkthrough of key AI concepts and buzzwords",
      date: "April, 2025",
    },
    {
      title: "How Python Works Under the Hood",
      link: "https://how-does-python-work-under-the-hood.hashnode.dev/how-python-works-under-the-hood-understanding-pycache-and-the-python-execution-process",
      description:
        "An insider view into Python internals: from bytecode to __pycache__",
      date: "March, 2025",
    },
  ],
} as const;
