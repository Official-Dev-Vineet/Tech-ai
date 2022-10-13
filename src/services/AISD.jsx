import { Link } from "react-router-dom";
import { cycleLife } from "../extern";
import Header from "../Ui/ui-component/Header";

const AISD = () => {
  return (
    <>
      <Header
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsurganc.surfactants.net%2F1665067267563.jpg&f=1&nofb=1&ipt=69ab51d8fd2c68854e1d4e94a73afc2c50c79deaec19bb81c3df59b669bcbabd&ipo=images"
        title="Transform Your Business with Custom-Built AI Software"
      >
        by A Top 10 AI Software Companies in the Global Clutch Leaders Matrix
      </Header>
      <div className="main-content">
        <section className="get-started flex-center flex-gp-sm flex-column">
          <p>
            We deliver relevant and impactful custom AI software, data science
            and Big data solutions tailored to your unique business
            requirements. We propel your business and help you innovate with
            less risk and better results.
          </p>
        </section>
        <section className="how-we-solve flex-center flex-column flex-gp-md">
          <h1>Our Expertise</h1>
          <p>
            As an AI development company, we always keep track of emerging
            technologies and have developed our proprietary models and tools to
            deliver benefits to our clients.
          </p>
          <div className="working-summary">
            <div className="box">
              <h3>Machine Learning</h3>
              <p>
                Our team of machine learning developers helps our clients drive
                business growth and expand their businesses by extracting
                valuable insights from unstructured data from multiple
                resources.
              </p>
            </div>
            <div className="box">
              <h3>Business Intelligence</h3>
              <p>
                We provide BI &amp; Data Warehouse consulting services and offer
                Big Data analytics solutions to unlock the potential of your
                data available and set up efficient data management for enhanced
                decision-making.
              </p>
            </div>
            <div className="box">
              <h3>Predictive Analytics</h3>
              <p>
                Our professionals create proprietary models for personalized
                recommendations, churn prediction, dynamic pricing, fraud
                detection, sentiment analysis, and customer segmentation.
              </p>
            </div>
            <div className="box">
              <h3>Natural Language Processing</h3>
              <p>
                We analyze text data from social media, emails and audio to
                uncover audience insights. With our bespoke NLP solutions, you
                get to know your users better by detecting sentiment, interests,
                gender, etc.
              </p>
            </div>
            <div className="box">
              <h3>Data Capture / OCR</h3>
              <p>
                We automate document processing through data capture and &
                extraction. We help businesses improve accuracy, boost overall
                efficiency, and reduce human errors.
              </p>
            </div>
            <div className="box">
              <h3>Computer Vision</h3>
              <p>
                We empower your business with tech solutions for accurate pose
                estimation, image recognition, and visual search. We can help
                with its integration and customization according to your needs.
              </p>
            </div>
          </div>
        </section>
        <section className="cycle-life">
          <h1>AI Services Implementation: Benefits for Your Business</h1>
          <div className="cycle">
            <ul>
              {cycleLife.map((value, index) => {
                return <li key={index}>{value}</li>;
              })}
            </ul>
          </div>
          <div className="btn">
            <Link to="../contact">Contact us</Link>
          </div>
        </section>
        <section className="how-we-solve industry">
          <h1>Industries</h1>
          <p>
            We have proven track records of helping businesses in different
            niches to reach a new level. And we keep on enhancing our expertise
            across domains with AI algorithms.
          </p>
          <div className="working-summary">
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/09/icon-bank.svg"
                alt="icon-bank"
              />
              <div className="text">
                <h3>Banking &amp; Finance</h3>
                <p>
                  Harness AI to power smart assistants that help with enhanced
                  decision-making, financial apps to plan budgets, score
                  credits, and detect anomalous transactions for fraud
                  prevention.
                </p>
              </div>
            </div>
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2022/01/icon-manufacturing.svg"
                alt="icon-manufacturing"
              />
              <div className="text">
                <h3>Automotive Manufacturing</h3>
                <p>
                  Automotive Manufacturing Adopt AI solutions for smooth vehicle
                  production. Perform complex simulations and design iterations,
                  enable robust visual inspection and equipment defect detection
                  with efficient AI automotive software.
                </p>
              </div>
            </div>
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/09/icon-car.svg"
                alt="icon-car"
              />
              <div className="text">
                <h3>Supply Chain &amp; Logistics</h3>
                <p>
                  Facilitate supply planning, invoice and receipt processing,
                  automate warehouse analysis, cargo damage detection, and
                  optimize routes.
                </p>
              </div>
            </div>
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/09/icon-insurance-2.svg"
                alt="icon-insurance"
              />
              <div className="text">
                <h3>Insurance</h3>
                <p>
                  Manage claims with the help of AI, predict high loss claims
                  and detect fraud claims, evaluate insurance property cost,
                  offer more customer-focused services.
                </p>
              </div>
            </div>
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/09/icon-retail-5.svg"
                alt="icon-retails"
              />
              <div className="text">
                <h3>Retail &amp; E-commerce</h3>
                <p>
                  Predict customer behavior with the help of your AI developer.
                  Enable personalized recommendations, provide customer
                  experience consulting services, increase the efficiency of
                  in-store operations, and cut customer churn.
                </p>
              </div>
            </div>
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/09/icon-healtcare.svg"
                alt="icon-healthcare"
              />
              <div className="text">
                <h3>Healthcare &amp; Pharma</h3>
                <p>
                  Let medical professionals use AI-assisted analytics for more
                  effective diagnosis, personalized treatment, and to make
                  better data-based predictions and recommendations, allow
                  advanced evidence analytics to meet life-saving needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="implement-ai">
          <h1>Our Competences</h1>

          <div className="accordion">
            <div className="accordion-head">
              <h1>Concepts</h1>
              <span
                onClick={(e) =>
                  e.currentTarget.parentElement.parentElement.classList.toggle(
                    "active"
                  )
                }
              >
                +
              </span>
            </div>
            <div className="accordion-details">
              <p>
                Supervised, unsupervised and reinforcement learning, metric
                learning, fine-tuning, temporal and efficient neural networks,
                representation learning
              </p>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-head">
              <h1>Neural Networks</h1>
              <span
                onClick={(e) =>
                  e.currentTarget.parentElement.parentElement.classList.toggle(
                    "active"
                  )
                }
              >
                +
              </span>
            </div>
            <div className="accordion-details">
              <p>
                Convolutional and recurrent neural networks, generative
                adversarial networks, deep bayesian neural networks, siamese
                networks
              </p>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-head">
              <h1>Deep Learning Frameworks</h1>
              <span
                onClick={(e) =>
                  e.currentTarget.parentElement.parentElement.classList.toggle(
                    "active"
                  )
                }
              >
                +
              </span>
            </div>
            <div className="accordion-details">
              <div className="image-wrapper-container">
                <img
                  src="https://indatalabs.com/wp-content/uploads/2019/12/logo-tensorflow.svg"
                  alt="logo-tensorflow"
                />
                <img
                  src="https://indatalabs.com/wp-content/uploads/2020/06/logo-keras.svg"
                  alt="logo-keras"
                />
                <img
                  src="https://indatalabs.com/wp-content/uploads/2020/06/logo-pytorch.svg"
                  alt="logo-pytorch"
                />
              </div>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-head">
              <h1>Deployment Toolkits</h1>
              <span
                onClick={(e) =>
                  e.currentTarget.parentElement.parentElement.classList.toggle(
                    "active"
                  )
                }
              >
                +
              </span>
            </div>
            <div className="accordion-details">
              <div className="image-wrapper-container">
                <img
                  src="https://indatalabs.com/wp-content/uploads/2020/06/logo-Core-ML.jpg"
                  alt="logo-core-ml"
                />
                <img
                  src="https://indatalabs.com/wp-content/uploads/2020/06/logo-onnx.svg"
                  alt="logo-onNx"
                />
                <img
                  src="https://indatalabs.com/wp-content/uploads/2020/06/logo-tensorflowlite.svg"
                  alt="logo tensor flow lite"
                />
                <img
                  src="https://indatalabs.com/wp-content/uploads/2020/06/logo-tensor-rt.jpg"
                  alt="logo tensor rt"
                />
              </div>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-head">
              <h1>Other AI Tools</h1>
              <span
                onClick={(e) =>
                  e.currentTarget.parentElement.parentElement.classList.toggle(
                    "active"
                  )
                }
              >
                +
              </span>
            </div>
            <div className="accordion-details">
              <div className="image-wrapper-container">
                <img
                  src="https://indatalabs.com/wp-content/uploads/2020/08/logo_catalyst.svg"
                  alt="logo catalyst"
                />
                <img
                  src="https://indatalabs.com/wp-content/uploads/2019/04/technologies-scikit-learn.png"
                  alt="logo scikit learn"
                />
                <img
                  src="https://indatalabs.com/wp-content/uploads/2020/08/logo_mlflow.svg"
                  alt="logo ml flow"
                />
                <img
                  src="https://indatalabs.com/wp-content/uploads/2020/08/logo_weight-and-biases.jpg"
                  alt="logo weight and biases"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="timeline how-we-solve">
          <h1>AI-Driven Software Development Process</h1>
          <p>Check out the steps it takes us to make your project a success.</p>
          <div className="timeline-container">
            <div className="line"></div>
            <div className="timeline-content">
              <div className="head"></div>
              <div className="content">
                <h1>Discovery</h1>
                <ul>
                  <li>Analyze requirements</li>
                  <li>Make high-level estimation</li>
                  <li>Provide technology consulting</li>
                  <li>Exploratory data analysis</li>
                </ul>
              </div>
            </div>
            <div className="timeline-content">
              <div className="head"></div>
              <div className="content">
                <h1>Project Setup</h1>
                <ul>
                  <li>Select the engagement model</li>
                  <li>Build the core team</li>
                  <li>Prepare a roadmap for the project</li>
                  <li>Prepare tech documents</li>
                </ul>
              </div>
            </div>
            <div className="timeline-content">
              <div className="head"></div>
              <div className="content">
                <h1>Development</h1>
                <ul>
                  <li>Use Agile development methodology</li>
                  <li>Progress reporting on each iteration</li>
                  <li>Perform internal and release testing</li>
                </ul>
              </div>
            </div>
            <div className="timeline-content">
              <div className="head"></div>
              <div className="content">
                <h1>Live Release</h1>
                <ul>
                  <li>Final testing of the complete system</li>
                  <li>Solve possible issues</li>
                  <li>Live release after approval</li>
                  <li>Collect feedback </li>
                </ul>
              </div>
            </div>
            <div className="timeline-content">
              <div className="head"></div>
              <div className="content">
                <h1>Support</h1>
                <ul>
                  <li>Knowledge transfer</li>
                  <li>Perform continuous server monitoring</li>
                  <li>
                    Allocate team members to fix bugs and make improvements
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="why-work-with-us">
          <h1>Why Work with Us</h1>
          <p>
            Our artificial intelligence developers build beneficial products and
            software solutions.
          </p>
          <div className="column-container">
            <div className="card">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/06/icon-medal.svg"
                alt="icon medal"
              />
              <h3>Top-Notch Team</h3>
              <p>
                We’re a strong AI software engineering team with years of
                experience in AI-driven solutions development.
              </p>
            </div>
            <div className="card">
              <img
                src="https://indatalabs.com/wp-content/uploads/2020/09/icon-like.svg"
                alt="icon like"
              />
              <h3>Strong Tech Expertise</h3>
              <p>
                We have solid technical know-how in custom AI application
                development and AI software design for different domains.
              </p>
            </div>
            <div className="card">
              <img
                src="https://indatalabs.com/wp-content/uploads/2020/03/icon-hospitality.svg"
                alt="icon hospitality"
              />
              <h3>Reliable Technology Provider</h3>
              <p>
                We guarantee transparent AI development processes and steady
                communication during the project.
              </p>
            </div>
            <div className="card">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/04/icon-productivity.svg"
                alt="icon productivity"
              />
              <h3>Favorable Cooperation Terms</h3>
              <p>
                We offer flexible terms of cooperation that will be the most
                suitable for your project needs and goals. Let Our Clients Do
                the Talking
              </p>
            </div>
          </div>
        </section>
        <section className="implement-ai">
          <h1>AI in Software Development: Frequently Asked Questions</h1>
          <div className="accordion">
            <div className="accordion-head">
              <h1>What is AI in software development?</h1>
              <span
                onClick={(e) =>
                  e.currentTarget.parentElement.parentElement.classList.toggle(
                    "active"
                  )
                }
              >
                +
              </span>
            </div>
            <div className="accordion-details">
              <p>
                AI is used in software development to help write code faster and
                more effectively, automate manual tasks, and speed up the
                testing process. Using AI in software app development, one can
                expect the app to be more robust, speedy, and almost error-free.
              </p>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-head">
              <h1>How much does an app with AI cost?</h1>
              <span
                onClick={(e) =>
                  e.currentTarget.parentElement.parentElement.classList.toggle(
                    "active"
                  )
                }
              >
                +
              </span>
            </div>
            <div className="accordion-details">
              <p>
                Custom AI apps may cost from $15 K up to $70-100K and more. The
                cost usually comes from complexity, functionality, and
                exclusiveness.
              </p>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-head">
              <h1>What is an AI development company?</h1>
              <span
                onClick={(e) =>
                  e.currentTarget.parentElement.parentElement.classList.toggle(
                    "active"
                  )
                }
              >
                +
              </span>
            </div>
            <div className="accordion-details">
              <p>
                An AI company is an AI technology vendor who has got broad
                expertise under their belt, an impressive project portfolio in
                various business domains. AI, data scientists, software
                engineers, quality assurance specialists can usually work on an
                average project.
              </p>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-head">
              <h1>What benefits AI provides business with?</h1>
              <span
                onClick={(e) =>
                  e.currentTarget.parentElement.parentElement.classList.toggle(
                    "active"
                  )
                }
              >
                +
              </span>
            </div>
            <div className="accordion-details">
              <p>The benefits are the following:</p>
              <ul>
                <li>higher revenues</li>
                <li>reduced costs</li>
                <li>business process automation</li>

                <li>improved speed and accuracy</li>
                <li>simplified data management</li>
                <li>personalized customer experience</li>
                <li>business risks mitigation, etc.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISD;
