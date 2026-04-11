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
      <GridBackground />    {/* z:0   — WebGL grid shader     */}
      <GrainOverlay />      {/* z:9997— film grain texture    */}
      <CursorGlow />        {/* z:9998— mouse radial glow     */}

      {/* ── Global UI ────────────────────────────────────── */}
      <ScrollProgress />    {/* slim top progress rail        */}
      <SectionNav />        {/* floating right section dots   */}

      {/* ── Page content ─────────────────────────────────── */}
      <ClickSpark
        sparkColor="rgba(124,58,237,0.85)"
        sparkSize={5}
        sparkRadius={16}
        sparkCount={8}
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
