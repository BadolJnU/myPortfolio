import About from "@/components/About/About";
import CTA from "@/components/CTA.jsx/CTA";
import Hero from "@/components/Hero/Hero";
import ProjectWorks from "@/components/ProjectWorks/ProjectWorks";
import ResearchWork from "@/components/ResearchWork/ResearchWork";
import Service from "@/components/Service/Service";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <ProjectWorks />
      <ResearchWork />
      <CTA />
    </main>
  );
}
