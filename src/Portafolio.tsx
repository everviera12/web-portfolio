import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faListAlt } from "@fortawesome/free-regular-svg-icons";

// import "./scss/responsive.scss";

const Portafolio = () => {
  return (
    <>
      <div className="presentation d-flex">
        <div className="container home__container">
          <div className="presentation__container">
            <h1>
              Frontend <br />
              <span className="neon__text">
                Devel<span className="letter__o">o</span>per
              </span>
            </h1>

            <span className="sobre__mi">
              Siempre entusiasta por aprender nuevas tecnologías y mejorar
              constantemente mis habilidades para ofrecer soluciones web
              innovadoras.
            </span>

            <div className="contact__info">
              <FontAwesomeIcon className="icon" icon={faGithub} />
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
              <FontAwesomeIcon className="icon" icon={faInstagram} />
              <span className="gap-2 d-flex fl align-items-center fs-2">
                <FontAwesomeIcon className="icon__project" icon={faListAlt} />
                Proyectos
              </span>
            </div>
          </div>

          <div className="picture_container">
            <img
              src="https://avatars.githubusercontent.com/u/112356399?v=4"
              alt="osito imagen"
            />
          </div>
        </div>
      </div>

      <div className="about__me d-flex">
        <div className="about__me__container container">
          <div className="info">
            <img
              src="https://avatars.githubusercontent.com/u/112356399?v=4"
              alt="foto mia"
            />

            <p>
              Apasionado desarrollador Front-end con un ferviente deseo de
              aprender y crecer en el emocionante campo de la programación.
              <br /> <br />
              Mi enfoque principal está en el desarrollo Front-end, donde puedo
              dar vida a conceptos creativos y mejorar la experiencia del
              usuario.
            </p>

            <span className="fw-bold mb-3">Un poco de mi</span>
          </div>
        </div>
      </div>

      <div className="employes d-flex">
        <div className="employes__container container">
          <h1 className="text-center mt-5 fs-2 fw-bold">EXPERIENCIA LABORAL</h1>

          <div className="logos">
            <div className="alleguard__container">
              <a href="https://alleguard.com/" target="_blank">
                <img
                  src="https://moodle.hunt-sol.com/pluginfile.php/1/theme_moove/logo/1695331643/Logo-removebg-preview.png"
                  alt="alleguard logo"
                  width={"200px"}
                />
              </a>
            </div>

            <div className="tft__container">
              <a href="https://thefudtrailer.com/" target="_blank">
                <img
                  src=" https://yt3.googleusercontent.com/W3XIX-nlKUdhjxXqDSRjTQa3Rfqfs4BtEgxIGH9WlIiC-lqJEIZfst1FcJBOEqgEZfobaxGigg=s900-c-k-c0x00ffffff-no-rj"
                  alt="alleguard logo"
                  width={"150px"}
                />
              </a>
            </div>

            <div className="legion__container">
              <a href="https://www.legionagency.mx/" target="_blank">
                <img
                  src="https://scontent.fntr5-1.fna.fbcdn.net/v/t39.30808-6/290637097_142550888435703_3410872608351955777_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeECNF8B0PuReGUh7yPtv4NJ3tyiV-ztw57e3KJX7O3DnjnSY33Z3e8PJN35SwllPHjB_GZwF44QIdB2NHvarNqv&_nc_ohc=94UF2jLEsaYAX86osvl&_nc_ht=scontent.fntr5-1.fna&oh=00_AfDU1Fp6f0ch-zogA3l_dQKpLT_gqcLvMUAxHxUsyGS2Tw&oe=655887C6"
                  alt="alleguard logo"
                  width={"150px"}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="skills d-flex">
        <span className="fw-bold fs-1 text-center mt-4 mb-5">Mis Skills</span>

        <div className="img__container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
            alt="logo Bootstrap"
            className="bootstrap"
          />
          <img
            src="https://www.svgrepo.com/show/349330/css3.svg"
            alt="logo CSS"
            className="css"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png"
            alt="logo HTML"
            className="html"
          />
          <img
            src="https://www.jennerstrand.se/wp-content/uploads/2023/06/JavaScript-logo.png"
            alt="logo javascript"
            className="javascript"
          />
          <img
            src="https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png"
            alt="logo nodejs"
            className="nodejs"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
            alt="logo react"
            className="react"
          />
          <img
            src="https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png"
            alt="logo typescript"
            className="typescript"
          />
          <img
            src="https://www.svgrepo.com/show/330398/express.svg"
            alt="logo express"
            className="express"
          />
        </div>
      </div>
    </>
  );
};

export default Portafolio;
