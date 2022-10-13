import { Link } from "react-router-dom";
import Header from "../Ui/ui-component/Header";
import Card from "../Ui/ui-component/Card";
import { useState } from "react";

const AIMAD = () => {
  return (
    <>
      <Header
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbluewhaleapps.com%2Fwp-content%2Fuploads%2F2019%2F05%2FAI-in-Mobile-Development.jpg&f=1&nofb=1&ipt=b165fc606bf0f0b41370d20751806645c43c923f7899e04e3be745d2b8c34023&ipo=images"
        title="AI-Driven Mobile App Development"
      >
        AI-powered mobile app development services to engage your users and
        skyrocket your revenue
      </Header>
      <div className="main-content">
        <section className="get-started">
          <p>
            {" "}
            AI-based mobile apps are becoming the smarter way to serve business
            purposes and boost revenue. Personalized user experiences, security,
            effective design, feature-richness, and performance are the key
            elements of a successful app. And that’s where AI comes into play.
            AI has proven extremely useful in mobile app development.
            <br />
            <br />
            InData Labs can turn your idea into reality. Let our team create an
            app that climbs the download charts and brings the highest business
            revenue.
          </p>
          <span className="btn">
            <Link to="/contact">let's start</Link>
          </span>
        </section>

        <section className="how-we-solve">
          <h1>Step-by-Step AI Mobile App Development</h1>
          <p>
            The process of AI mobile software development involves various
            stages. Each of them is important — by skipping any one of them, a
            powerful solution cannot be built.
          </p>
          <div className="column-container">
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2020/04/circle-strategy.svg"
                alt="circle strategy"
              />
              <h3>Strategy</h3>
            </div>
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2020/04/icon-report-2.svg"
                alt="icon report"
              />
              <h3>Analysis and Planning</h3>
            </div>
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2020/04/circle-ml.svg"
                alt="circle ml"
              />
              <h3>Machine Learning Process Sequence</h3>
            </div>
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2020/04/circle-design.svg"
                alt="circle design"
              />
              <h3>UI/UX Design</h3>
            </div>
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2020/04/circle-development.svg"
                alt="circle development"
              />
              <h3>Development</h3>
            </div>
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2020/04/circle-testing.svg"
                alt="circle testing"
              />
              <h3>Testing</h3>
            </div>
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2020/04/circle-mobile-app.svg"
                alt="circle mobile"
              />
              <h3>Mobile App Deployment</h3>
            </div>
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2020/04/circle-support.svg"
                alt="circle support"
              />
              <h3>Support</h3>
            </div>
          </div>
        </section>
        <section className="timeline how-we-solve">
          <h1>AI to Develop Mobile Apps</h1>
          <p>
            Machine learning, deep learning, and NLP are the three major
            technologies to implement artificial intelligence into mobile apps.
            They interact, reason, learn and recommend.
          </p>
          <div className="timeline-container">
            <div className="line"></div>
            <div className="timeline-content">
              <div className="head"></div>
              <div className="content">
                <h1>Interaction</h1>
                <p>
                  AI can take customer experience to the next level. The
                  game-changing innovation improves customer satisfaction and
                  the success of your business.
                </p>
              </div>
            </div>
            <div className="timeline-content">
              <div className="head"></div>
              <div className="content">
                <h1>Reasoning</h1>
                <p>
                  Deep reasoning of AI enables seamless problem-solving. It
                  streamlines the process of drawing valid conclusions and
                  making predictions from the available data, text, and images.
                </p>
              </div>
            </div>
            <div className="timeline-content">
              <div className="head"></div>
              <div className="content">
                <h1>Learning</h1>
                <p>
                  AI streamlines the software development process, making it
                  easier for you to write and review code, identify errors and
                  manage software testing efficiently.{" "}
                </p>
              </div>
            </div>
            <div className="timeline-content">
              <div className="head"></div>
              <div className="content">
                <h1>Recommendation</h1>
                <p>
                  AI recommendation systems provide vivid insights into how to
                  reshape business strategy and plan your next move. By
                  introducing recommendations to your AI mobile app, you’ll not
                  only improve brand perception but sell more with less effort.
                </p>
              </div>
            </div>
          </div>
          <p>
            Get powerful AI mobile applications that will rank high in the Apple
            Store and on Google Play.
          </p>
          <span className="btn">
            <Link to="/contact"> Request a Quote </Link>
          </span>
        </section>
        <section className="how-we-solve ai-in-mad">
          <h1>Artificial Intelligence in Mobile App Development</h1>
          <p>
            Let our skilled team use artificial intelligence to empower your
            app.
          </p>
          <div className="grid-two">
            <div className="text">
              <h1>Prediction Engine</h1>
              <p>
                Get the most out of AI to predict and interpret user behavior,
                preferences and buying intentions. Improve ROI by identifying
                user interactions within your app, offering customized
                recommendations and predicting their next moves.
              </p>
            </div>
            <div className="image-fixer">
              <img
                src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/03/onlap-1305h-featured-1.jpg"
                alt="ai prediction engine "
              />
            </div>
          </div>
          <div className="grid-two">
            <div className="text">
              <h1>Personalized Engine</h1>
              <p>
                Empower your app with a personalized engine that prevents the
                overload of irrelevant information and curates only the type of
                content the user is interested in. By infusing personalization
                into your AI mobile app content, you save yourself an
                irreplaceable position in the world of apps and drive a great
                wellspring of income.
              </p>
            </div>
            <div className="image-fixer">
              <img
                src="https://s3-ap-southeast-2.amazonaws.com/gorillastack-blog/wp-content/uploads/2016/05/Netflix+Recommendations+Screenshot.png"
                alt="netflix screenshot"
              />
            </div>
          </div>
          <div className="grid-two">
            <div className="text">
              <h1>AI-Driven Visual Search</h1>
              <p>
                If you want an app that scales, make a shift from text search to
                visual search. It’s fast, convenient, and saves plenty of time.
                Machine learning eases the pain of visual searches in your
                mobile app. ML technology learns from your clients’ queries and
                provides them with up-to-date search results that best match
                their needs.
                <br /> <br />
                Integrating AI visual search enables you to focus on the user’s
                intent and encourage faster and more accurate search results.
              </p>
            </div>
            <div className="image-fixer">
              <img
                src="https://cdn.searchenginejournal.com/wp-content/uploads/2017/03/pinterest-visual-search-web.jpg"
                alt="visual search"
              />
            </div>
          </div>
          <div className="grid-two">
            <div className="text">
              <h1>Image Recognition</h1>
              <p>
                From healthcare and ecommerce to banking and entertainment,
                image recognition has revolutionized them all. Use image
                recognition to identify millions of products such as books,
                household items, groceries and so on. Adapt image recognition to
                effectively examine patients and diagnose diseases, detect
                counterfeit goods and battle against piracy.
                <br /> <br />
                Consolidate facial recognition technology to create an app that
                keeps your children safe online and makes sure they aren’t
                exposed to inappropriate content or unsuitable ads.
              </p>
            </div>
            <div className="image-fixer">
              <img
                src="https://www.aiiottalk.com/wp-content/uploads/2020/09/AI-in-Image-Recognition-1.jpg"
                alt="images-ai recognition "
              />
            </div>
          </div>
          <div className="grid-two">
            <div className="text">
              <h1>Real-Time AI-Powered Video Analytics</h1>
              <p>
                Reduce man-hours by deploying real-time, on-premise video
                analysis. Benefit from video analytics monitoring crowd behavior
                and preventing outbreaks of violence. Using the vast potential
                of object detection and pose estimation in surveillance systems,
                you save money for your business and ensure the highest level of
                security.
              </p>
            </div>
            <div className="image-fixer">
              <img
                src="https://www.ipi-singapore.org/contents/2021/02/bannersmall-16139804621752/banner_small.jpg"
                alt="video analytics by ai"
              />
            </div>
          </div>
          <div className="grid-two">
            <div className="text">
              <h1>Data Extraction</h1>
              <p>
                Leverage artificial intelligence to derive valuable insights
                into your users so you can better tailor your services to their
                needs. Use this information to promote your app and increase
                your profit margins.
                <br />
                Save time with automated data extraction from any scanned
                document or image and convert them into text. Why Wo
              </p>
            </div>
            <div className="image-fixer">
              <img
                src="https://www.dataentryexport.com/blog/wp-content/uploads/2019/03/Outsource-Data-Extraction-Service-for-LinkedIn-and-Social-Media-2-min.jpg"
                alt="data extraction"
              />
            </div>
          </div>
        </section>
        <section className="why-work-with-us">
          <h1>
            Why Work With <span className="theme-text">AI Tech</span> ?
          </h1>
          <div className="column-container">
            <div className="card">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/05/icon-implementing.svg"
                alt="icon implementing"
              />
              <h3>Top-Notch AI Software Development</h3>
              <p>
                We are at the forefront of delivering high-quality AI solutions
                to help our clients address their business challenges.
              </p>
            </div>
            <div className="card">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/09/icon-engine.svg"
                alt="icon engine"
              />
              <h3>Custom-Made Solutions</h3>
              <p>
                We identify the client’s needs and aid them with tailored
                solutions that make their business thrive.
              </p>
            </div>
            <div className="card">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/06/icon-medal.svg"
                alt="icon medal"
              />
              <h3>A Highly-Skilled Team</h3>
              <p>
                Our artificial intelligence mobile app development company goes
                the extra mile to provide solutions that are efficient, scalable
                and which add value to the client’s business.
              </p>
            </div>
            <div className="card">
              <img
                src="https://indatalabs.com/wp-content/uploads/2020/04/icon-lists.svg"
                alt="icon lists"
              />
              <h3>Transparent Business Processes</h3>
              <p>
                We care about transparency in business processes. To keep you in
                the loop, we use Agile Methodology.
              </p>
            </div>
          </div>
        </section>
        <section className="why-work-with-us platform">
          <h1>Reaching Users on Any Platform</h1>
          <p>
            AI and deep learning mobile app development are made easy with
            InData Labs. Our data scientists and software engineers can help you
            create an app compatible with both iOS and Android and make the most
            of your presence on Google Play and the Apple Store.
          </p>
          <div className="flex-center">
            <div className="box flex-center flex-column">
              <img
                src="https://indatalabs.com/wp-content/uploads/2020/04/icon-apple.svg"
                alt="icon apple"
              />
              <h3>iOS Mobile App Development</h3>
              <p>
                We can aid you with the full-cycle of iOS mobile app
                development, from design to maintenance. Using Swift and
                Objective C, we develop scalable AI-powered mobile apps that
                help you get ahead of your competitors.
              </p>
            </div>
            <div className="box flex-center flex-column gap-sm">
              <img
                src="https://indatalabs.com/wp-content/uploads/2020/04/icon-android.svg"
                alt="icon android"
              />
              <h3>Android Mobile App Development</h3>
              <p>
                Win over any audience with a custom-made app developed by us.
                Build customer loyalty by creating a new level of convenience in
                the app experience.
              </p>
            </div>
            <div className="box flex-center flex-column gap-sm">
              <img
                src="https://indatalabs.com/wp-content/uploads/2020/04/icon-phones.svg"
                alt="icon phones"
              />
              <h3>Cross-Platform App Development</h3>
              <p>
                Turn your vision into an outstanding app that takes your
                business to the next level. Go cross-platform and publish your
                app on multiple platforms, driving traffic and maximizing ROI.
              </p>
            </div>
          </div>
          <span className="btn">
            <Link to="/contact">Contact us</Link>
          </span>
        </section>
        <section className="how-we-solve">
          <h1>Industries</h1>
          <div
            className="flex-center flex-gp-lg flex-wrap"
            style={{ margin: "2em auto" }}
          >
            <Card image="https://indatalabs.com/wp-content/uploads/2020/01/icon-marketing-h.svg">
              Advertising
            </Card>
            <Card image="https://indatalabs.com/wp-content/uploads/2020/03/icon-dollar-alt.svg">
              Banking and Finance
            </Card>
            <Card image="https://indatalabs.com/wp-content/uploads/2020/04/icon-breeding.svg">
              Breeding
            </Card>
            <Card image="https://indatalabs.com/wp-content/uploads/2019/04/icon-digital-health-2.svg">
              Digital Health
            </Card>
            <Card image="https://indatalabs.com/wp-content/uploads/2019/04/icon-e-commerce.svg">
              E-Commerce
            </Card>
            <Card image="https://indatalabs.com/wp-content/uploads/2020/03/icon-entertainment-3.svg">
              Entertainment
            </Card>
            <Card image="https://indatalabs.com/wp-content/uploads/2020/04/icon-ball.svg">
              Sport
            </Card>
            <Card image="https://indatalabs.com/wp-content/uploads/2020/04/icon-travel-2.svg">
              Travel
            </Card>
          </div>
        </section>
        <section className="flipper how-we-solve">
          <h1>customer Success</h1>
          <div className="flip-wrapper">
            <div className="grid-two">
              <div className="text">
                <h2>Deep Learning-Based Anti-Counterfeiting Solution</h2>
                <p>
                  The client is a scientific and business-oriented organization
                  which turned to us for an effective solution to fight against
                  counterfeits and privacy.
                  <br />
                  The key task our team faced at the PoC stage was to create a
                  software solution for recognizing and verifying marks applied
                  on top of QR codes.
                  <br />
                  The outcome of the work done at the PoC stage was an
                  Android-based application to authenticate QR codes and
                  immediately detect counterfeits.
                </p>
              </div>
              <div className="image-fixer">
                <img
                  src="https://indatalabs.com/wp-content/uploads/2020/04/deep-learning.jpg"
                  alt="deep learning"
                />
              </div>
            </div>
            <div className="grid-two">
              <div className="image-fixer">
                <img
                  src="https://indatalabs.com/wp-content/uploads/2020/04/ocr-solution-and-api.png"
                  alt=""
                />
              </div>
              <div className="text">
                <h2>Deep Learning-Based Anti-Counterfeiting Solution</h2>
                <p>
                  The client is a scientific and business-oriented organization
                  which turned to us for an effective solution to fight against
                  counterfeits and privacy. The key task our team faced at the
                  PoC stage was to create a software solution for recognizing
                  and verifying marks applied on top of QR codes.
                  <br />
                  The outcome of the work done at the PoC stage was an
                  Android-based application to authenticate QR codes and
                  immediately detect counterfeits.
                  <br />
                  OCR Solution and API for Secure Infrared Brand Verification
                  The client is a startup that works in the niche market of
                  security printing, and delivers proprietary technology.
                  <br />
                  The client was looking for a reliable provider of OCR software
                  development services to tailor a solution for Android phones
                  to scan and recognize printed marks. Our team of talented data
                  scientists successfully built and delivered automated data
                  capture software to augment the client’s existing solution
                  with AI.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIMAD;
