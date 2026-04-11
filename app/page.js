import Nav          from '@/components/Nav';
import ClickSpark   from '@/components/ClickSpark';
import GrainOverlay from '@/components/GrainOverlay';
import CursorGlow   from '@/components/CursorGlow';
import Hero         from '@/components/Hero';
import About        from '@/components/About';
import Experience   from '@/components/Experience';
import Projects     from '@/components/Projects';
import Skills       from '@/components/Skills';
import Education    from '@/components/Education';
import Contact      from '@/components/Contact';

export default function Page() {
  return (
    <>
      <GrainOverlay />
      <CursorGlow />
      <ClickSpark
        sparkColor="rgba(56,189,248,0.85)"
        sparkSize={6}
        sparkRadius={18}
        sparkCount={6}
        duration={400}
      >
        <Nav />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
      </ClickSpark>
    </>
  );
}
