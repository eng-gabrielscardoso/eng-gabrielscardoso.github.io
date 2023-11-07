import PersonalBadges from "@/assets/badges/PersonalBadges";
import PersonalAddressIframe from "@/assets/iframes/PersonalAddressIframe";

const badges: JSX.Element[] = PersonalBadges.map((badgeSource, index) => {
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

export default function Contact(): JSX.Element {
  return (
    <section
      className="min-h-screen p-2 lg:p-24 flex flex-col lg:flex-row gap-4 justify-around lg:justify-center items-center text-white bg-yellow-600"
    >
      <div
        className="w-full md:w-1/2 flex flex-col gap-2 items-center text-center"
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="9"
      >
        <h2 className="text-4xl font-bold text-blue-700">
          &lt;/<span className="text-white">Contact</span>&gt;
        </h2>
        <ul className="flex flex-col items-center justify-center flex-wrap gap-2 bg-red-10">
          {badges}
        </ul>
        You can reach me by text message, email or by LinkedIn.
      </div>
      <div
        className="w-full md:w-1/2 flex flex-col items-center lg:items-start gap-2"
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed="9"
      >
        <h2 className="text-4xl font-bold text-blue-700">
          &lt;/<span className="text-white">Where to reach me</span>&gt;
        </h2>
        <PersonalAddressIframe />
      </div>
    </section>
  );
}
