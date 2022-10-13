import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiLinkedinLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="container flex-center flex-column">
      <div className="column-container">
        <div className="column-content">
          <h2>Expertise &amp; services</h2>
          <ul>
            <li>
              {" "}
              <Link to="services/data-science-and-ai">Data science &amp; AI</Link>{" "}
            </li>
            <li>
              <Link to="services/ai-software-development">AI software development</Link>
            </li>
            <li>
              <Link to="services/AI-mobile-app-development">
                {" "}
                AI mobile app development
              </Link>
            </li>
            <li>
              <Link to="services/computer-vision">computer vision</Link>
            </li>
            <li>
              <Link to="services/machine-learning">machine learning</Link>
            </li>
            <li>
              <Link to="services/data-capture">data capture &amp; OCR</Link>
            </li>
          </ul>
        </div>
        <div className="column-content">
          <h2>computer vision techs</h2>
          <ul>
            <li>
              <Link to="tech-ai-serve/pose-estimation">pose estimation</Link>
            </li>
            <li>
              <Link to="tech-ai-serve/image-recognition">image recognition</Link>
            </li>
            <li>
              <Link to="tech-ai-serve/logo-detection">logo detection</Link>
            </li>
            <li>
              <Link to="tech-ai-serve/visual-search">visual search</Link>
            </li>
          </ul>
        </div>
        <div className="column-content">
          <h2>about us</h2>
          <ul>
            <li>
              <Link to="about-us/success-stories">Success stories</Link>
            </li>
            <li>
              <Link to="about-us/blog">blog</Link>
            </li>
            <li>
              <Link to="about-us/careers">careers</Link>
            </li>
            <li>
              <Link to="about-us/write-for-us">write for us </Link>
            </li>
          </ul>
        </div>
        <div className="column-content">
          <h3>contact us </h3>
          <ul className="flex-between flex-gp-sm">
            <li>
              <a
                href="https://www.facebook.com/vineetsinghkaharwar"
                target="_blank"
                rel="noreferrer"
              >
                {<FaFacebookF />}{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/procodrr.vineet/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                {<AiOutlineInstagram />}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vineet-singh-a7b140193/"
                target="_blank"
                rel="noreferrer"
              >
                {<RiLinkedinLine />}
              </a>
            </li>
          </ul>
          <div className="contact-info">
            <address>Tajupur - Badarpur Rd, Tajupur, Haryana 121101</address>
            <a href="mailto:viratsinghkaharwar8923@gmail.com">
              viratsinghkaharwar8923@gmail.com
            </a>
            <a href="tel:+917983920962">+91-7983920962</a>
          </div>
        </div>
      </div>
      <div className="copyright flex-between">
        <div>&copy;AI Tech 2022 – All Rights Reserved</div>
            <div>
        <ul className="flex-center flex-gp-sm">
          <li>
            <Link to="site-details/privacy-policy">privacy policy</Link>
          </li>
          <li>
            <Link to="site-details/term-of-use">term of use</Link>
          </li>
          <li>
            <Link to="site-details/cookie-policy">cookie policy</Link>
          </li>
        </ul>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
