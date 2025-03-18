import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Rahul Kapoor",
  initials: "RK",
  url: "https://rahul-kapoor.vercel.app",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/newdelhi",
  description:
    "Passionate about {Building&Deploying} projects that make a difference",
  summary:
    "I’m a passionate **Full Stack Developer** with a strong foundation in the **MERN stack**, cloud computing, and a growing interest in **AI** & **Machine Learning**. My journey into programming started with **C** and **Java**, but my curiosity led me to explore web development, backend systems, and AI-driven applications. Over time, I have honed my skills in **HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, MongoDB, MySQL, Python**, and more, allowing me to build scalable, efficient, and user-friendly applications.\n\n\n Beyond coding, I love working on challenging projects that push my boundaries and contribute to real-world solutions. Whether it’s developing **full-stack applications, architecting APIs, or experimenting with AI**, I enjoy the process of building, iterating, and optimizing.",
  avatarUrl: "/PICTURE.png",
  skills: [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Python",
    "Java",
    "C",
    "Git",
    "GitHub",
    "Docker",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "rahulkpr1972@gamil.com",
    tel: "+91 9654741105",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rahulkapoor2005",
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
        url: "https://x.com/rahulkpr2510",
        icon: Icons.x,

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

  // work: [
  //   {
  //     company: "Mitre Media",
  //     href: "https://mitremedia.com/",
  //     badges: [],
  //     location: "Toronto, ON",
  //     title: "Software Engineer",
  //     logoUrl: "/mitremedia.png",
  //     start: "May 2017",
  //     end: "August 2017",
  //     description:
  //       "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
  //   },
  // ],
  education: [
    {
      school: "KCC Institute of Technology and Management",
      href: "https://kccitm.edu.in",
      degree:
        "Bachelor of Technology, Computer Science and Engineering (AI-ML)",
      logoUrl: "/fiqdo4xu.4kd.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Modern Public School, Delhi",
      href: "https://mpsshalimarbagh.com",
      degree: "Pre-University Education",
      logoUrl: "/Modern_Public_School_1488_Logo_1.png",
      start: "2009",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Stealth Speak",
      href: "https://www.stealthspeak.xyz",
      dates: "Feb 2025",
      active: true,
      description:
        "With the rise of privacy concerns in online communication, I built StealthSpeak—a secure and anonymous voice messaging platform. It enables users to share voice messages without revealing their identity, ensuring privacy while staying connected.",
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
          href: "https://github.com/rahulkapoor2005/stealth-speak",
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

  Blogs: [
    {
      title: "Docker Basic Commands for Beginners",
      link: "https://getting-started-with-docker.hashnode.dev/getting-started-with-docker-basic-commands-for-beginners",
      description: "A beginner-friendly guide to Docker basic commands",
      date: "19/03/2025",
    },
    {
      title: "SSR vs. SSG in Next.js",
      link: "https://understanding-ssr-vs-ssg-in-nextjs.hashnode.dev/understanding-server-side-rendering-vs-static-site-generation-in-nextjs",
      description:
        "Understanding Server Side Rendering vs Static Site Generation in Next.js",
      date: "18/03/2025",
    },
  ],
} as const;
