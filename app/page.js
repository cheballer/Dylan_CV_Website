import Nav          from '@/components/Nav';
import ClickSpark   from '@/components/ClickSpark';
import GrainOverlay from '@/components/GrainOverlay';
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
      <ClickSpark
        sparkColor="rgba(232,232,228,0.9)"
        sparkSize={7}
        sparkRadius={16}
        sparkCount={6}
        duration={380}
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
