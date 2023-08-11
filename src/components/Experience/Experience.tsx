import dacxichain_logo from "@/assets/images/dacxi-chain.jpeg";
import ufpa_logo from "@/assets/images/ufpa.jpeg";
import wealth99_logo from "@/assets/images/wealth99.jpeg";

interface IImage {
  src: string;
  alt: string;
}
interface IExperience {
  img: IImage;
  position: string;
  location: string;
  job_type: string;
  institution: string;
  period: string;
  description: string[];
}

const experience: IExperience[] = [
  {
    img: {
      src: dacxichain_logo,
      alt: "Dacxi Chain Logo",
    },
    position: "Fullstack Developer",
    location: "Australia",
    job_type: "Remote",
    institution: "Dacxi Chain",
    period: "Feb 2023 - Currently",
    description: [
      "Worked with technologies such as VueJS version 3, Typescript TailwindCSS, Vite, Playwright, Vitest, Laravel version 10 using the Sail starter kit, Laravel Nova, Laravel Vapor, AWS, Docker, Docker Compose, OpenAPI, MySQL and Redis.",
      "Was responsible for the development of graphical interfaces, implementation of new features, integration with APIs, unit, integration and E2E tests using Vitest and Playwright.",
      "Was responsible for the development of REST API using the MVC pattern, development of client features using Laravel Nova, software deployment using AWS Amplify and Laravel Vapor, unit and functionality testing with Pest."
    ]
  },
  {
    img: {
      src: wealth99_logo,
      alt: "Wealth99 Logo",
    },
    position: "Fullstack Developer",
    location: "Australia",
    job_type: "Remote",
    institution: "Wealth99",
    period: "Apr 2021 - Currently",
    description: [
      "Worked with technologies such as VueJS version 2, Typescript, TailwindCSS, Webpack, Playwright, Vue Test Utils, Laravel version 5, Laravel Nova, AWS, Docker, Docker Compose, Blockchain, OpenAPI, MySQL, MongoDB and Redis.",
      "Was responsible for the development of graphical interfaces, implementation of new features, integration with APIs, unit, integration and E2E tests using Vue Test Utils and Playwright.",
      "Was responsible for the development of REST API using the MVC pattern, development of client features using Laravel Nova, unit and functionality tests with PHPUnit."
    ]
  },
  {
    img: {
      src: ufpa_logo,
      alt: "UFPA Logo",
    },
    position: "Intern Software Developer",
    location: "Belém, PA, Brazil",
    job_type: "On-site",
    institution: "Universidade Federal do Pará",
    period: "Sep 2021 - May - 2022",
    description: [
      "PROAD scholarship holder at the Department of Development of Technological and Informational Products of the Central Library of the Federal University of Pará.",
      "Worked with the development of graphical interfaces and maintenance of systems developed with VueJS version 2, NuxtJS version 2, NodeJS and Bootstrap.",
      "He also worked with the development and maintenance of digital repositories using DSpace, where he supported UFPA's institutional repositories and also developed a new dedicated repository for cataloguing patents."
    ]
  },
];

const experienceCards: JSX.Element[] = experience.map((experience, index) => {
  return (
    <div className="bg-slate-50 p-4 rounded" key={index}>
      <div className="flex items-center gap-3 mb-4">
        <img
          src={experience.img.src}
          alt={experience.img.alt}
          className="rounded-full w-16 h-16 border"
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">{experience.position}</h3>
          <span>
            <strong>{experience.location}</strong> - {experience.job_type}
          </span>
          <span>
            <strong>{experience.institution}</strong> | {experience.period}
          </span>
        </div>
      </div>
      <ul className="list-disc px-4">
        {experience.description.map((details, index) => <li key={index}>{details}</li>)}
      </ul>
    </div>
  );
});

export default function Experience(): JSX.Element {
  return (
    <section
      className="min-h-screen p-4 flex flex-col gap-4 justify-center items-center bg-stone-800"
      data-scroll-section
    >
      <h2 className="text-4xl font-bold text-orange-600">
        &lt;/<span className="text-slate-200">Experience</span>&gt;
      </h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 overflow-y-scroll">
        {experienceCards}
      </div>
    </section>
  );
}
