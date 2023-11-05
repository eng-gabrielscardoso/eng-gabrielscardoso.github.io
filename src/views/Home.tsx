import Contact from "@/components/home/Contact";
import Education from "@/components/home/Education";
import Experience from "@/components/home/Experience";
import Footer from "@/components/home/Footer";
import Introduction from "@/components/home/Introduction";
import Resume from "@/components/home/Resume";

export default function Home(): JSX.Element {
  return (
    <>
      <Introduction />
      <Resume />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}