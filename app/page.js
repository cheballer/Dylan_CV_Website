import Nav           from '@/components/Nav';
import ClickSpark    from '@/components/ClickSpark';
import GrainOverlay  from '@/components/GrainOverlay';
import CursorGlow    from '@/components/CursorGlow';
import GridBackground from '@/components/GridBackground';
import ScrollProgress from '@/components/ScrollProgress';
import SectionNav    from '@/components/SectionNav';
import Hero          from '@/components/Hero';
import About         from '@/components/About';
import Experience    from '@/components/Experience';
import Projects      from '@/components/Projects';
import Skills        from '@/components/Skills';
import Education     from '@/components/Education';
import Contact       from '@/components/Contact';

export default function Page() {
  return (
    <>
      {/* ── Fixed ambient layers — back to front ─────────── */}
      <GridBackground />    {/* z:0   — grid shader / texture */}
      <GrainOverlay />      {/* z:9997— film grain overlay    */}
      <CursorGlow />        {/* z:9998— mouse radial glow     */}

      {/* ── Global UI ────────────────────────────────────── */}
      <ScrollProgress />
      <SectionNav />

      {/* ── Page content ─────────────────────────────────── */}
      <ClickSpark
        sparkColor="rgba(109,40,217,0.8)"
        sparkSize={4}
        sparkRadius={14}
        sparkCount={7}
        duration={350}
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
