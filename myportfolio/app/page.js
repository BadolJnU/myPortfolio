import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import ProjectWorks from "@/components/ProjectWorks/ProjectWorks";
import Service from "@/components/Service/Service";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <ProjectWorks />
    </main>
  );
}
