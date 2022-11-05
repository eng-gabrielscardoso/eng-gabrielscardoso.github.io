import BadgesSources from '../Introduction/BadgesSources';
import PersonalAddressIframe from '../../assets/iframes/PersonalAddressIframe';

const badges = BadgesSources.map((badgeSource, index) => {
  return (
    <li key={index}>
      <a href={badgeSource.href} target="_blank" rel="noreferrer noopener">
        <img src={badgeSource.src} alt={badgeSource.label} title={badgeSource.label} />
      </a>
    </li>
  );
});

export default function Contact(props) {
  return (
    <section className="h-screen p-2 md:p-24 flex flex-col md:flex-row gap-4 justify-around md:justify-center items-center bg-yellow-600 text-white" data-scroll-section>
      <div className="w-full md:w-1/2 flex flex-col gap-2 items-center" data-scroll data-scroll-direction="horizontal" data-scroll-speed="9">
        <h2 className="text-4xl font-bold text-blue-700">
          &lt;/<span className="text-white">Contact</span>&gt;
        </h2>
        <ul className="grid grid-cols-3 place-items-center gap-2 bg-red-10">
          { badges }
        </ul>
        You can reach me by phone with the number: +55 91 986253389 (Also Whatsapp contact).
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-2" data-scroll data-scroll-direction="vertical" data-scroll-speed="9">
        <h2 className="text-4xl font-bold text-blue-700">
          &lt;/<span className="text-white">Where to reach me</span>&gt;
        </h2>
        <PersonalAddressIframe></PersonalAddressIframe>
      </div>
    </section>
  );
}
