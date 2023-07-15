export default function Resume(): JSX.Element {
  return (
    <section
      className="min-h-screen p-4 flex flex-col gap-4 justify-center items-center bg-resume text-white"
      data-scroll-section
    >
      <h2 className="text-4xl font-bold text-emerald-500">
        &lt;/<span className="text-slate-200">Resume</span>&gt;
      </h2>
      <p className="text-justify w-full md:w-1/2">
        As a seasoned Full Stack developer with expertise in web development,
        database design, and most recent and relevant technologies, I am
        passionate about creating innovative solutions that drive business
        success. With a proven track record of developing scalable and succeeded
        web applications, I am skilled in both front-end and back-end
        technologies. My experience includes designing and implementing
        databases using SQL and NoSQL technologies, deploying applications, and
        optimizing performance through responsive web design techniques. I am
        proficient in version control systems such as Git, and have a strong
        ability to troubleshoot and debug applications.
      </p>
      <div className="w-full md:w-1/2">
        <details>
          <summary className="text-slate-200 text-xl font-bold mb-2 hover:cursor-pointer">
            Front-end
          </summary>
          <img src="https://skills.thijs.gg/icons?i=html,css,js,ts,jquery,sass,tailwindcss,bootstrap,angular,react,next,vuejs,nuxtjs,svelte,astro,jest" alt="Front-end" />
        </details>
      </div>
      <div className="w-full md:w-1/2">
        <details>
          <summary className="text-slate-200 text-xl font-bold mb-2 hover:cursor-pointer">
            Back-end
          </summary>
          <img src="https://skills.thijs.gg/icons?i=js,ts,nodejs,express,nestjs,php,laravel,java,maven,spring,python,django,elixir,golang,docker,aws" alt="Back-end" />
        </details>
      </div>
      <div className="w-full md:w-1/2">
        <details>
          <summary className="text-slate-200 text-xl font-bold mb-2 hover:cursor-pointer">
            Blockchain
          </summary>
          <img src="https://skills.thijs.gg/icons?i=js,ts,golang,solidity,nodejs,linux" alt="Blockchain" />
        </details>
      </div>
      <div className="w-full md:w-1/2">
        <details>
          <summary className="text-slate-200 text-xl font-bold mb-2 hover:cursor-pointer">
            Database
          </summary>
          <img src="https://skills.thijs.gg/icons?i=mysql,postgresql,sqlite,mongodb,redis" alt="Databases and ORMs" />
        </details>
      </div>
      <div className="w-full md:w-1/2">
        <details>
          <summary className="text-slate-200 text-xl font-bold mb-2 hover:cursor-pointer">
            Other Tools
          </summary>
          <img src="https://skills.thijs.gg/icons?i=linux,vscode,postman,bash,python,r,c,git,github,gitlab,figma,gulp,webpack,vite" alt="Other tools" />
        </details>
      </div>
    </section>
  );
}
