export default function Header(): JSX.Element {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white py-4 shadow-md dark:bg-black">
      <nav className="mx-auto flex items-center justify-between px-4 sm:px-8">
        <a href="/" className="link-hover text-xl text-black dark:text-white"
          ><strong>
            Gabriel Santos Cardoso
          </strong></a>
        <div className="flex gap-1 sm:gap-4">
          <a href="http://github.com/eng-gabrielscardoso/eng-gabrielscardoso.github.io" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </div>
      </nav>
    </header>
  )
}
