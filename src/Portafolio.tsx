import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// import "./scss/responsive.scss";

const Portafolio = () => {
  return (
    <>
      <div className="presentation d-flex ">
        <div className="container home__container">
          <div className="presentation__container">
            <h1>
              Frontend <br />
              <span>
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
          </div>
        </div>
      </div>

      <div className="employes">
        <div className="employes__container container">
          <h1 className="text-center mt-5 fs-2 fw-bold">EXPERIENCIA LABORAL</h1>

          <div className="logos d-flex">
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
    </>
  );
};

export default Portafolio;
