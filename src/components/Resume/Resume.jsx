import FrontendBadges from '../../assets/badges/FrontendBadges';
import BackendBadges from '../../assets/badges/BackendBadges';
import BlockchainBadges from '../../assets/badges/BlockchainBadges';
import DatabaseBadges from '../../assets/badges/DatabaseBadges';
import OtherToolsBadges from '../../assets/badges/OtherToolsBadges';

const frontend = FrontendBadges.map((badgeSource, index) => {
  return (
    <li key={index}>
      <img src={badgeSource.src} alt={badgeSource.label} title={badgeSource.label} width="40" height="30" />
    </li>
  );
});

const backend = BackendBadges.map((badgeSource, index) => {
  return (
    <li key={index}>
      <img src={badgeSource.src} alt={badgeSource.label} title={badgeSource.label} width="40" height="30" />
    </li>
  );
});

const blockchain = BlockchainBadges.map((badgeSource, index) => {
  return (
    <li key={index}>
      <img src={badgeSource.src} alt={badgeSource.label} title={badgeSource.label} width="40" height="30" />
    </li>
  );
});

const database = DatabaseBadges.map((badgeSource, index) => {
  return (
    <li key={index}>
      <img src={badgeSource.src} alt={badgeSource.label} title={badgeSource.label} width="40" height="30" />
    </li>
  );
});

const otherTools = OtherToolsBadges.map((badgeSource, index) => {
  return (
    <li key={index}>
      <img src={badgeSource.src} alt={badgeSource.label} title={badgeSource.label} width="40" height="30" />
    </li>
  );
});

export default function Resume(props) {
  return (
    <section className="h-screen p-4 flex flex-col gap-4 justify-center items-center bg-indigo-400 text-white" data-scroll-section>
      <h2 className="text-4xl font-bold text-emerald-500">
        &lt;/<span className="text-slate-200">Resume</span>&gt;
      </h2>
      <p className="text-justify w-full md:w-1/2">
        My name is Gabriel Santos Cardoso, I'm a software developer passionate about information systems and web-oriented programming. I am currently a student of the Information Systems course at the Federal University of Pará, I am a specialist in Software Engineering at Faculdade Capital Federal and graduated in Logistics Management at Universidade Paulista. I am always willing to face new challenges and look for new opportunities to develop my skills and be able to contribute to the development of a project.
      </p>
      <div className="w-full md:w-1/2">
        <h2 className="text-slate-200 text-xl font-bold">Front-end</h2>
        <ul className="grid grid-cols-12 place-items-center gap-2">
          { frontend }
        </ul>
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-slate-200 text-xl font-bold">Back-end</h2>
        <ul className="grid grid-cols-12 place-items-center gap-2">
          { backend }
        </ul>
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-slate-200 text-xl font-bold">Blockchain</h2>
        <ul className="grid grid-cols-12 place-items-center gap-2">
          { blockchain }
        </ul>
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-slate-200 text-xl font-bold">Database</h2>
        <ul className="grid grid-cols-12 place-items-center gap-2">
          { database }
        </ul>
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-slate-200 text-xl font-bold">Other tools</h2>
        <ul className="grid grid-cols-12 place-items-center gap-2">
          { otherTools }
        </ul>
      </div>
    </section>
  );
}
