import ufpa_logo from "../../assets/images/ufpa.jpeg"
import dacxichain_logo from "../../assets/images/dacxi-chain.jpeg"
import wealth99_logo from "../../assets/images/wealth99.jpeg"

const experience = [
  {
    img: {
      src: dacxichain_logo,
      alt: "Dacxi Chain Logo"
    },
    position: "Fullstack Developer",
    location: "Australia",
    jobType: "Remote",
    institution: "Dacxi Chain",
    period: "Feb 2023 - Currently",
    description: "Junior Fullstack Developer at Dacxi Chain, where he worked first part-time and later full-time. He has worked with technologies such as blockchain, VueJS 3, TailwindCSS, Playwright, Docker, DBeaver and Insomnia. He was responsible for graphical interface hotfixes, implementation of new pages and also for unit, integration and E2E tests. In addition to working on the frontend, he was also able to work on the backend with technologies such as PHP, Laravel 9 / 10, Docker, SQL and NoSQL databases, testing with Playwright, DevOps culture and also blockchain. During the experience he had the opportunity to improve his knowledge in Clean Code, SOLID, DevOps, English skills, agile culture, code review and also teamwork and a sense of belonging."
  },
  {
    img: {
      src: wealth99_logo,
      alt: "Wealth99 Logo"
    },
    position: "Fullstack Developer",
    location: "Australia",
    jobType: "Remote",
    institution: "Wealth99",
    period: "Apr 2021 - Currently",
    description: "Junior Fullstack Developer at Wealth99, where he worked first part-time and later full-time. He has worked with technologies such as blockchain, VueJS 3, TailwindCSS, Playwright, Docker, DBeaver and Insomnia. He was responsible for graphical interface hotfixes, implementation of new pages and also for unit, integration and E2E tests. In addition to working on the frontend, he was also able to work on the backend with technologies such as PHP, Laravel 5.6, Docker, SQL and NoSQL databases, testing with Playwright, DevOps culture and also blockchain. During the experience he had the opportunity to improve his knowledge in Clean Code, SOLID, DevOps, English skills, agile culture, code review and also teamwork and a sense of belonging."
  },
  {
    img: {
      src: ufpa_logo,
      alt: "UFPA Logo"
    },
    position: "Intern Software Developer",
    location: "Belém, PA, Brazil",
    jobType: "On-site",
    institution: "Universidade Federal do Pará",
    period: "Sep 2021 - May - 2022",
    description: "PROAD Scholarship at the Department of Development of Technological and Informational Products - DDTIP (SEDEPTI) of the Central Library - CL (BC) of UFPA. He worked on the interface development project for the UFPA Patent Repository System - RIPAT, where he worked with technologies such as DSpace 7, Angular, Typescript and NodeJS + NPM and YARN. He also worked on the UFPA Central Library Self-Deposit System development project, in which he worked with technologies such as VueJS, NuxtJS, NodeJS and the main web technologies. Worked on the emergency development of the reserve RIPAT system, implemented and maintained with technologies such as JSP and Bootstrap, in addition to dealing with PostgreSQL database issues, SSH and SCP and FTP connection, backup automation, Linux servers (Debian like) and programming shell. Also, she worked on the production of the Resource Map of DDTIP-CL (SEDEPTI-BC), carrying out the collection of data and information."
  }
]

const experienceCards = experience.map((experience, index) => {
  return (
    <div className="bg-slate-50 p-4 rounded" key={index}>
      <div className="flex items-center gap-3 mb-4">
        <img src={experience.img.src} alt={experience.img.alt} className="rounded-full w-16 h-16 border" />
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">{experience.position}</h3>
          <span><strong>{experience.location}</strong> - {experience.jobType}</span>
          <span><strong>{experience.institution}</strong> | {experience.period}</span>
        </div>
      </div>
      <p>{experience.description}</p>
    </div>
  )
});

export default function Experience(props) {
  return (
    <section className="min-h-screen p-4 flex flex-col gap-4 justify-center items-center bg-stone-800">
      <h2 className="text-4xl font-bold text-orange-600">
        &lt;/<span className="text-slate-200">Experience</span>&gt;
      </h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 overflow-y-scroll">
        {experienceCards}
      </div>
    </section>
  );
}
