import ufpa_logo from "../../assets/images/ufpa.jpeg"
import unifecaf_logo from "../../assets/images/unifecaf.jpeg"
import unip_logo from "../../assets/images/unip.jpeg"

const education = [
  {
    img: {
      src: ufpa_logo,
      alt: "UFPA Logo"
    },
    position: "Information Systems",
    degree: "Bachelor Degree",
    institution: "Universidade Federal do Pará",
    period: "Sep 2021 - Currently" ,
    description: "The Bachelor's Degree in Information Systems at the Federal University of Pará was created based on Resolution No. Its objective is to prepare a competent, active, enterprising, ethical professional, aware of his social role and his contribution to the scientific and technological advancement of the Pará - Amazon region, and its main competence is to contemplate a professional profile that dominates the technologies of information, promotion of technological and innovative development, ability to develop an entrepreneurial spirit in the search for solutions to organizational challenges and new opportunities for professional growth and a critical and consistent humanistic view of the impact of their professional activities on society."
  },
  {
    img: {
      src: unifecaf_logo,
      alt: "UniFECAF Logo"
    },
    position: "Software Engineering",
    degree: "Post-graduation Degree",
    institution: "UniFECAF",
    period: "Nov 2021 - Apr 2022",
    description: "The lato sensu postgraduate course in Software Engineering at Faculdade FECAF aims to present the main topics of the software development process in agile teams and in a competitive market like the current one, highlighting topics such as software quality metrics, evaluation of software, software development process and software project management. It has a workload of 360 hours divided without modules and with aptitude exams, emerging the student in a large with extensive content, readings, cases, practice and guidance with tutors"
  },
  {
    img: {
      src: unip_logo,
      alt: "Universidade Paulista"
    },
    position: "Supply Chain and Logistics Management",
    degree: "Bachelor of Technology",
    institution: "Universidade Paulista",
    period: "Aug 2019 - Jul 2021",
    description: "The Logistics Technology Course aims to train professionals capable of planning, putting into operation and controlling the logistics activities of a company, using up-to-date management methodologies and technologies and identifying opportunities to reduce costs, increase the quality of services in and increasing the quality of meeting the deadline. The professional will be prepared to optimize the processes of acquisition, storage and distribution of materials within the supply chain concept (supply-chain), as well as to analyze aspects of dimension and location of Distribution Centers, aiming at minimizing operating costs and taxes, without loss in the quality of services, and enabling competitive advantages for the company."
  }
]

const educationCards = education.map((education, index) => {
  return (
    <div className="bg-slate-50 p-4 rounded hover:cursor-pointer" key={index}>
      <div className="flex items-center gap-3 mb-4">
        <img src={education.img.src} alt={education.img.alt} className="rounded-full w-16 h-16 border" />
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">{education.position}</h3>
          <span>{education.degree}</span>
          <span><strong>{education.institution}</strong> | {education.period}</span>
        </div>
      </div>
      <p>{education.description}</p>
    </div>
  )
});

export default function Education(props) {
  return (
    <section className="min-h-screen p-4 flex flex-col gap-4 justify-center items-center bg-amber-800" data-scroll-section>
      <h2 className="text-4xl font-bold text-red-500">
        &lt;/<span className="text-slate-200">Education</span>&gt;
      </h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 overflow-y-scroll">
        {educationCards}
      </div>
    </section>
  );
}
