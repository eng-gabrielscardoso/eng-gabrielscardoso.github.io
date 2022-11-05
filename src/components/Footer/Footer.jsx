export default function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-screen flex justify-center items-center bg-slate-300 text-green-600 font-bold" data-scroll-section>
      <div data-scroll data-scroll-direction="vertical" data-scroll-speed="9">
        <h2>&copy; Gabriel Santos Cardoso - {currentYear}</h2>
      </div>
    </footer>
  );
}
