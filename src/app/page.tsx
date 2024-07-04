import { Metadata } from 'next';
import About from './About.js';
import Projects from './Projects.js';

export const metadata: Metadata = {
  title: 'About',
  description: 'About page with Tech Stack, Bio, and Projects',
};

export default function Home() {
  return (
    <>
      <About />
      <Projects />
    </>
  );
}
