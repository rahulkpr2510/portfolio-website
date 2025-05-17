import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Rahul Kapoor",
  initials: "RK",
  url: "https://rahul-kapoor.in",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/newdelhi",
  description:
    "Innovating Through Code — One Deployment at a Time",
  summary:
    "I'm a dedicated **Full Stack Developer** specializing in the **MERN stack**, with a strong foundation in cloud computing and an evolving passion for **AI and Machine Learning**. My journey began with core programming in **C**, **C++**, and **Java**, which laid the groundwork for my transition into modern web technologies and scalable backend systems.\n\n\n With hands-on experience in **JavaScript**, **TypeScript**, **React**, **Next.js**, **Node.js**, **Express**, **MongoDB**, **MySQL**, **Python**, and more — I focus on building performant, user-centric applications that solve real-world problems.\n\n\nWhether it's developing full-stack web platforms, architecting robust APIs, or experimenting with AI-driven solutions, I’m driven by the thrill of turning complex ideas into impactful digital products.",
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
      title: "Why Writing 100 Lines of Code Can Be Better Than Just 2",
      link: "https://why-writing-100-lines-of-code-can-be-better-than-just-2.hashnode.dev/why-writing-100-lines-of-code-can-be-better-than-just-2-a-gentle-introduction-to-time-complexity",
      description: "A Gentle Introduction to Time Complexity",
      date: "04/05/2025",
    },
    {
      title: "Mastering Prompt Styles",
      link: "https://mastering-prompt-styles.hashnode.dev/mastering-prompt-styles-a-straightforward-guide-thatll-stick-with-you-forever",
      description: "A straightforward guide that'll stick with you forever",
      date: "10/04/2025",
    },
    {
      title: "Decoding AI Jargons with Chai",
      link: "https://decoding-the-jargons-of-ai-with-chai.hashnode.dev/decoding-ai-jargons-with-chai",
      description: "A comprehensive guide to understanding AI jargons",
      date: "08/04/2025",
    },
    {
      title: "How Python Works Under the Hood",
      link: "https://how-does-python-work-under-the-hood.hashnode.dev/how-python-works-under-the-hood-understanding-pycache-and-the-python-execution-process",
      description: "Understanding __pycache__ and the Python execution process",
      date: "23/03/2025",
    },
  ],
} as const;
