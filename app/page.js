import Nav        from '@/components/Nav';
import ClickSpark  from '@/components/ClickSpark';
import Hero        from '@/components/Hero';
import About       from '@/components/About';
import Experience  from '@/components/Experience';
import Projects    from '@/components/Projects';
import Skills      from '@/components/Skills';
import Education   from '@/components/Education';
import Contact     from '@/components/Contact';

export default function Page() {
  return (
    <ClickSpark
      sparkColor="#E8FF47"
      sparkSize={8}
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
  );
}
