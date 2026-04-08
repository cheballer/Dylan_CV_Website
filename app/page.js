import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Footer from '@/components/Footer';
import Animations from '@/components/Animations';

export default function Page() {
  return (
    <>
      <Nav />
      <Animations />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </>
  );
}
