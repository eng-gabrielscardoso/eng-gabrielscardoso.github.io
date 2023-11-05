import moment from "moment";

import BadgesSources from "@/assets/badges/PersonalBadges";
import picrew_avatar from "@/assets/images/picrew.png";

const getCurrentAge = moment().diff("2001-12-02", "years");

const badges = BadgesSources.map((badgeSource, index) => {
  return (
    <li key={index} className="min-w-fit">
      <a href={badgeSource.href} target="_blank" rel="noreferrer noopener">
        <img
          src={badgeSource.src}
          alt={badgeSource.label}
          title={badgeSource.label}
        />
      </a>
    </li>
  );
});

export default function Introduction(): JSX.Element {
  return (
    <section
      className="min-h-screen p-2 md:p-24 flex flex-col md:flex-row gap-4 justify-around md:justify-center items-center text-white bg-slate-900"
      data-scroll
      data-scroll-section
      data-scroll-speed="4"
    >
      {/* Left */}
      <div className="w-full md:w-1/2 flex flex-col gap-2 justify-between items-center">
        <h1 className="text-4xl font-bold text-yellow-600 text-center">
          &lt;/<span className="text-slate-200">Gabriel Santos Cardoso</span>
          &gt;
        </h1>
        <p className="text-xl">Software solutions | Fullstack developer</p>
        <ul className="flex items-center justify-center flex-wrap gap-2">
          {badges}
        </ul>
        <p className="w-full lg:w-4/6 text-justify mt-2">
          Hello, I'm Gabriel Santos Cardoso, a man in love with technology. I
          currently reside in Barcarena, PA, I am {getCurrentAge} years old and
          I am looking for new job opportunities. Feel free to contact me to
          discuss business, studies, or simply exchange a good idea between
          colleagues.
        </p>
      </div>

      {/* Right */}
      <div className="w-full md:w-1/2 flex justify-center items-center rounded-full">
        <img
          src={picrew_avatar}
          alt="Gabriel's profile"
          title="Gabriel's profile"
          width="320"
          height="320"
          className="rounded-full"
        />
      </div>
    </section>
  );
}
