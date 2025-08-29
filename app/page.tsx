import { Header } from "@/components/Header";
import { Intro } from "@/components/Intro";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import Blogs from "@/components/Blogs";
import { CTA } from "@/components/CTA";
import { Dock } from "@/components/Dock";

export default function HomePage() {
  return (
    <main className="relative">
      <Header />
      <Intro />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Blogs />
      <CTA />
      <Dock />
    </main>
  );
}
