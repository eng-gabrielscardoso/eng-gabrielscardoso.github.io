import { useState, useEffect } from "react";

export default function PersonalAddressIframe(): JSX.Element {
  const [iframeWidth, setIframeWidth] = useState(600);
  const [iframeHeight, setIframeHeight] = useState(600);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 340) {
        setIframeWidth(285);
        setIframeHeight(285);
      } else if (window.innerWidth <= 620) {
        setIframeWidth(385);
        setIframeHeight(385);
      } else {
        setIframeWidth(500);
        setIframeHeight(500);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4457536093514!2d-48.62299068457083!3d-1.5029351989039492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a49b473effc5cd%3A0x132da258f5361bad!2sR.%20Ver.%20Jo%C3%A3o%20Pantoja%20de%20Castro%2C%20541%20-%20Barcarena%2C%20PA%2C%2068445-000!5e0!3m2!1spt-BR!2sbr!4v1667670568947!5m2!1spt-BR!2sbr"
      width={iframeWidth}
      height={iframeHeight}
      title="Gabriel's Address"
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
