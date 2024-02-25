import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Icons() {
  return (
    <>
      <a
        href="https://www.facebook.com/Ames-Figure-Skating-Club-141594889200004/"
        target="_blank"
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
      >
        <FontAwesomeIcon
          icon={faFacebook}
          className="hover:text-blue-600 transition hover:-translate-y-2 duration-300"
        />
      </a>
      <a
        href="https://twitter.com/AmesFigureSkate"
        target="_blank"
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
      >
        <FontAwesomeIcon
          icon={faTwitter}
          className="hover:text-sky-400 transition hover:-translate-y-2 duration-300"
        />
      </a>
      <a
        href="https://www.instagram.com/ames_fsc/"
        target="_blank"
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className="hover:text-rose-400 transition hover:-translate-y-2 duration-300"
        />
      </a>
    </>
  );
}
