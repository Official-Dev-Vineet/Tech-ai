import { Link } from "react-router-dom";
import "./about.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const About = () => {
  return (
    <div className="container">
      <section className="about-container">
        <div className="common-header">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdynamiccio.com%2Fwp-content%2Fuploads%2F2019%2F03%2FArtificial-intelligence-construction_1_1536x1536.jpg&f=1&nofb=1&ipt=313f602da1c4b46bd72bc9b0ab4f00e07c2cff22f8f6cc39b7c60526cc676d44&ipo=images"
            alt="about us"
          />
          <div className="common-text flex-center flex-column flex-gp-sm">
            <h1 className="theme-text">about us</h1>
            <p>
              we have recently launched the availability of our Artificial
              Intelligence and Machine Learning solutions on Amazon Web
              Services.
            </p>
          </div>
        </div>
        <div className="main-content">
          <div className="site-admin">
            <div className="admin-info">
              <h1>Vineet Singh</h1>
              <h2>Web developer</h2>
              <p>
                I'd starting my coding journey since 2019. <br /> And day by
                day, my coding skill had been improving by practicing and
                learning about different types of coding languages and
                technologies.
              </p>
            </div>
            <div className="admin-image">
              <img
                src="https://portfolio-vineet.netlify.app/images/my.jpg"
                alt="vineet singh / web developer "
              />
            </div>
          </div>
          <div className="key-point-container">
            <div className="card employee-container">
              <h1>Employee</h1>
              <h1 className="theme-text big-text">88+</h1>
              <h2>We are</h2>
              <p>
                Web developer, web designer, real-time-application handler, Full
                stack project handler, web security expert
              </p>
              <Link to="contact">Join us {<MdKeyboardArrowRight />}</Link>
            </div>
            <div className="card project-container">
              <h1>project delivered</h1>
              <h1 className="theme-text big-text">50+</h1>
              <h2>clients geography</h2>
              <p>Nepal, bhutan, india, japan, usa </p>
              <Link to="project">See our work {<MdKeyboardArrowRight />}</Link>
            </div>
            <div className="card our-work-point-container">
              <h1>key industries</h1>
              <h1 className="theme-text big-text">5+</h1>
              <h2>industry focus</h2>
              <p>
                marketing, automation, E-commerce, solutions ideas maker and
                provider{" "}
              </p>
            </div>
            <div className="card work-location-container">
              <h1>location</h1>
              <h1 className="theme-text big-text">3+</h1>
              <h2>our offices</h2>
              <p>faridabad (HR) , Agra (UP), delhi </p>
              <Link to="contact/#connect">
                Contact us {<MdKeyboardArrowRight />}
              </Link>
            </div>
          </div>
          <div className="admin-projects"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
