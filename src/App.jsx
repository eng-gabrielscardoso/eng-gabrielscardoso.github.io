import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import Introduction from './components/Introduction/Introduction'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';

export default function App(props) {
  const ref = useRef(null);

  const options = {
    smooth: true,
  }

  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <main data-scroll-container ref={ref}>
        <Introduction />
        <Resume />
        <Education />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  );
}
