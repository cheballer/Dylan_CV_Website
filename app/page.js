import Nav             from '@/components/Nav';
import ClickSpark      from '@/components/ClickSpark';
import GrainOverlay    from '@/components/GrainOverlay';
import CursorGlow      from '@/components/CursorGlow';
import GridBackground  from '@/components/GridBackground';
import Hero            from '@/components/Hero';
import About           from '@/components/About';
import Experience      from '@/components/Experience';
import Projects        from '@/components/Projects';
import Skills          from '@/components/Skills';
import Education       from '@/components/Education';
import Contact         from '@/components/Contact';

export default function Page() {
  return (
    <>
      {/* Fixed layers — back to front */}
      <GridBackground />   {/* z-index: 0  — grid shader, fades in after hero */}
      <GrainOverlay />     {/* z-index: 9997 — film grain */}
      <CursorGlow />       {/* z-index: 9998 — cursor glow */}

      <ClickSpark
        sparkColor="rgba(109,40,217,0.9)"
        sparkSize={6}
        sparkRadius={18}
        sparkCount={7}
        duration={420}
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
