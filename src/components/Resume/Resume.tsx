import FrontendBadges from "@/assets/badges/FrontendBadges";
import BackendBadges from "@/assets/badges/BackendBadges";
import BlockchainBadges from "@/assets/badges/BlockchainBadges";
import DatabaseBadges from "@/assets/badges/DatabaseBadges";
import OtherToolsBadges from "@/assets/badges/OtherToolsBadges";
import TestingBadges from "@/assets/badges/TestingBadges";

const frontend = FrontendBadges.map((badgeSource, index) => {
  return (
    <li key={index}>
      <img
        src={badgeSource.src}
        alt={badgeSource.label}
        title={badgeSource.label}
        width="40"
        height="30"
      />
    </li>
  );
});

const backend = BackendBadges.map((badgeSource, index) => {
  return (
    <li key={index}>
      <img
        src={badgeSource.src}
        alt={badgeSource.label}
        title={badgeSource.label}
        width="40"
        height="30"
      />
    </li>
  );
});

const blockchain = BlockchainBadges.map((badgeSource, index) => {
  return (
    <li key={index}>
      <img
        src={badgeSource.src}
        alt={badgeSource.label}
        title={badgeSource.label}
        width="40"
        height="30"
      />
    </li>
  );
});

const database = DatabaseBadges.map((badgeSource, index) => {
  return (
    <li key={index}>
      <img
        src={badgeSource.src}
        alt={badgeSource.label}
        title={badgeSource.label}
        width="40"
        height="30"
      />
    </li>
  );
});

const testing = TestingBadges.map((badgeSource, index) => {
  return (
    <li key={index}>
      <img
        src={badgeSource.src}
        alt={badgeSource.label}
        title={badgeSource.label}
        width="40"
        height="30"
      />
    </li>
  );
});

const otherTools = OtherToolsBadges.map((badgeSource, index) => {
  return (
    <li key={index}>
      <img
        src={badgeSource.src}
        alt={badgeSource.label}
        title={badgeSource.label}
        width="40"
        height="30"
      />
    </li>
  );
});

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
          <ul className="grid grid-cols-12 place-items-center gap-2">
            {frontend}
          </ul>
        </details>
      </div>
      <div className="w-full md:w-1/2">
        <details>
          <summary className="text-slate-200 text-xl font-bold mb-2 hover:cursor-pointer">
            Back-end
          </summary>
          <ul className="grid grid-cols-12 place-items-center gap-2">
            {backend}
          </ul>
        </details>
      </div>
      <div className="w-full md:w-1/2">
        <details>
          <summary className="text-slate-200 text-xl font-bold mb-2 hover:cursor-pointer">
            Blockchain
          </summary>
          <ul className="grid grid-cols-12 place-items-center gap-2">
            {blockchain}
          </ul>
        </details>
      </div>
      <div className="w-full md:w-1/2">
        <details>
          <summary className="text-slate-200 text-xl font-bold mb-2 hover:cursor-pointer">
            Database
          </summary>
          <ul className="grid grid-cols-12 place-items-center gap-2">
            {database}
          </ul>
        </details>
      </div>
      <div className="w-full md:w-1/2">
        <details>
          <summary className="text-slate-200 text-xl font-bold mb-2 hover:cursor-pointer">
            Testing
          </summary>
          <ul className="grid grid-cols-12 place-items-center gap-2">
            {testing}
          </ul>
        </details>
      </div>
      <div className="w-full md:w-1/2">
        <details>
          <summary className="text-slate-200 text-xl font-bold mb-2 hover:cursor-pointer">
            Other Tools
          </summary>
          <ul className="grid grid-cols-12 place-items-center gap-2">
            {otherTools}
          </ul>
        </details>
      </div>
    </section>
  );
}
