import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Rahul Kapoor",
  initials: "RK",
  url: "",
  location: "New Delhi, India",
  description:
    "Exploring AI/ML, Crafting the Web. Passionate about {Building&Learning}, Driven by {Innovation&Creativity}.",
  summary:
    "A B.Tech CSE (AI-ML) student fueled by a passion for web development and artificial intelligence. I thrive on crafting cutting-edge solutions, engaging with tech communities, and delving into AI/ML research. Currently, I'm harnessing OpenCV and deep learning to translate raw sketches into intelligent, AI-powered interfaces—blending creativity with technology to shape the future.",
  avatarUrl: "/PICTURE.png",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "API Development",
    "Next.js",
    "Typescript",
    "Python",
    "Java",
    "C",
    "MySQL",
    "MongoDB",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
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
      degree: "Bachelor of Technology, Computer Science and Engineering (AI-ML)",
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
        "Resend"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.stealthspeak.xyz",
          icon: <Icons.globe className="size-3" />,
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
  // ]
} as const;