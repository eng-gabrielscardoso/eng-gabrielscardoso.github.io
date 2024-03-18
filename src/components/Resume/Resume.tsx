export default function Resume(): JSX.Element {
  return (
    <section
      className="min-h-screen p-4 flex flex-col gap-4 justify-center items-center text-white bg-indigo-400"
      data-scroll-section
    >
      <h2 className="text-4xl font-bold text-emerald-500">
        &lt;/<span className="text-slate-200">Resume</span>&gt;
      </h2>
      <p className="text-justify w-full md:w-1/2">
      As a seasoned Full Stack developer  I am passionate about creating innovative solutions that drive business success. With a proven track record of developing scalable and successful web applications, I am skilled in both front-end and back-end technologies, including modern frameworks and multicultural environments.
      My experience includes designing and implementing databases using SQL and NoSQL technologies, deploying applications, and optimizing performance through responsive web design techniques. I am proficient in version control systems such as Git, and have a strong ability to troubleshoot and debug applications.
      I have excellent communication and collaboration skills, working effectively in individual and team settings. I am constantly adapting to changing technologies and enjoy staying up-to-date with the latest industry trends. My passion for coding, combined with my problem-solving mindset, makes me a versatile asset to any development team.
      </p>
      <div className="w-full md:w-1/2">
        <details open>
          <summary className="text-slate-200 text-xl font-bold mb-2 hover:cursor-pointer">
            Languages
          </summary>
          <img src="https://skills.thijs.gg/icons?i=html,css,less,sass,js,ts,php,java,python,r,go,elixir,solidity,bash" alt="Languages" />
        </details>
      </div>
      <div className="w-full md:w-1/2">
        <details open>
          <summary className="text-slate-200 text-xl font-bold mb-2 hover:cursor-pointer">
            Frameworks and Libraries
          </summary>
          <img src="https://skills.thijs.gg/icons?i=tailwind,react,next,vue,nuxt,pinia,vitest,jest,express,nestjs,adonis,angular,svelte,laravel,spring" alt="Frameworks and Libraries" />
        </details>
      </div>
      <div className="w-full md:w-1/2">
        <details open>
          <summary className="text-slate-200 text-xl font-bold mb-2 hover:cursor-pointer">
            Database/ORMs and Cloud Services
          </summary>
          <img src="https://skills.thijs.gg/icons?i=mysql,postgresql,mongodb,redis,sqlite,sequelize,prisma,firebase,supabase,aws,gcp,vercel,netlify,heroku" alt="Database/ORMs and Cloud Services" />
        </details>
      </div>
      <div className="w-full md:w-1/2">
        <details open>
          <summary className="text-slate-200 text-xl font-bold mb-2 hover:cursor-pointer">
            Other Tools
          </summary>
          <img src="https://skills.thijs.gg/icons?i=pnpm,yarn,nodejs,bun,vite,vscode,docker,git,linux,github,gitlab,figma,githubactions,latex" alt="Other Tools" />
        </details>
      </div>
    </section>
  );
}
