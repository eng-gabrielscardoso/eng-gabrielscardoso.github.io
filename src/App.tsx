import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import Home from "./views/Home";

export default function App(): JSX.Element {
  const ref = useRef(null);

  const options = {
    smooth: true,
  };

  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <main data-scroll-container ref={ref}>
        <Home />
      </main>
    </LocomotiveScrollProvider>
  );
}
