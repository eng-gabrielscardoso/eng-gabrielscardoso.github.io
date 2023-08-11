export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="min-h-screen flex justify-center items-center text-green-600 font-bold bg-slate-300"
      data-scroll-section
    >
      <div data-scroll data-scroll-direction="vertical" data-scroll-speed="9">
        <div className="flex flex-col gap-2 justify-center items-center p-2">
          <picture>
            <img
              src="https://raw.githubusercontent.com/MicaelliMedeiros/micaellimedeiros/master/image/computer-illustration.png"
              title="Computer banner"
              alt="Computer Banner"
            />
          </picture>
          <h2>&copy; Gabriel Santos Cardoso - {currentYear}</h2>
        </div>
      </div>
    </footer>
  );
}
