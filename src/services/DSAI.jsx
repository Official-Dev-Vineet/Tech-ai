import React from "react";
import Header from "../Ui/ui-component/Header";
import { Link } from "react-router-dom";
import Card from "../Ui/ui-component/Card";

const DSAI = () => {
  return (
    <>
      <Header
        image="https://internationalbanker.com/wp-content/uploads/2018/04/AI-1170x650.jpg"
        title="AI Consulting and Custom AI Solutions Development"
      >
        Artificial intelligence consulting and development services that empower
        you to become a leader in your field
      </Header>
      <div className="main-content">
        <section className="get-started flex-center flex-gp-sm flex-column">
          <p>
            We use machine learning (ML) tools and algorithms to help companies
            develop AI-driven products and solutions. Our team has profound
            knowledge and experience in designing, implementing, and integrating
            artificial intelligence solutions into the customer’s business
            environment.
          </p>
          <span className="btn btn-lg">
            <Link to="../contact">Get Started</Link>
          </span>
        </section>
        <section className="what-we-offer">
          <h1>what we offer</h1>
          <p>
            Custom-tailored AI solutions and{" "}
            <Link
              style={{ color: "#df9616  " }}
              to="/services/ai-software-development"
            >
              AI Software Development
            </Link>{" "}
            services by InData Labs help our clients to solve complex issues and
            add value to their business efficiency.
          </p>
          <div className="gui">
            <Card image="https://indatalabs.com/wp-content/uploads/2019/06/icon-deep-learning.svg">
              Data Science & Analytics
            </Card>
            <Card image="https://indatalabs.com/wp-content/uploads/2019/04/icon-roadmap.svg">
              Data Strategy
            </Card>
            <Card image="https://indatalabs.com/wp-content/uploads/2019/11/icon-bi-analytics.svg">
              Business Intelligence
            </Card>
            <Card image="https://indatalabs.com/wp-content/uploads/2019/04/icon-custom-software.svg">
              AI Software Development
            </Card>
            <Card image="https://indatalabs.com/wp-content/uploads/2019/05/icon-implementing.svg">
              Artificial intelligence Consulting{" "}
            </Card>
            <Card image="https://indatalabs.com/wp-content/uploads/2019/11/icon-data-engineering.svg">
              Data Engineering &amp; Architecture
            </Card>
          </div>
          <p>
            In order to help our customers grow their business, we also offer
            customer experience consulting services. Whether you need the aid of
            expert consultants, or want to enhance your customer experience
            management software, we are here to help!
          </p>
        </section>
        <section className="our-consultants">
          <div className="text">
            <h1>
              World-Class Data Scientists and Machine Learning Consultants
            </h1>
            <p>
              We cooperate with businesses of all sizes, from startups to large
              enterprises. Our experience tells us that, regardless of the size
              of a company, business owners face similar challenges when
              planning new data initiatives.
              <br /> <br />
              Our clients either don’t have their own data science teams, or
              their team is too small to cope with all the tasks in the
              environment of a fast-growing company.
              <br /> <br />
              With InData Labs, you’ll save time on looking for top-notch
              specialists. Our team of world-class data scientists, AI
              consultants, advisors, and ML engineers will bring consultancy,
              technical know-how to your project from day one.
            </p>
          </div>
          <img
            src="https://indatalabs.com/wp-content/uploads/2019/11/ml-engineers.svg"
            alt="machine-learning"
          />
        </section>
        <section className="how-we-solve flex-center flex-column flex-gp-md">
          <h1>how we solve problem</h1>
          <div className="working-summary">
            <div className="box">
              <h3> Discovery</h3>
              <p>
                Reviewing your current capabilities and defining future goals to
                make recommendations for tools, technology, and architecture.
              </p>
            </div>
            <div className="box">
              <h3>Improvement</h3>
              <p>
                Improvement of previously built models to continuously raise the
                quality of insights and to keep up with the changing
                environment.
              </p>
            </div>
            <div className="box">
              <h3>Proof of Concept</h3>
              <p>
                Testing a small-scale system, and proving the viability of ML
                models for your problem.
              </p>
            </div>
            <div className="box">
              <h3> Production</h3>

              <p>
                Putting the ML system into production while considering
                implementation and maintenance costs during deployment.
              </p>
            </div>
          </div>
          <span className="btn">
            <Link to="/contact">request a free quote</Link>
          </span>
        </section>
        <section className="how-we-apply">
          <h1>How We Apply Our Data Science Expertise</h1>
          <div className="gui">
            <Card image="https://indatalabs.com/wp-content/uploads/2019/04/icon-iot-2.svg">
              Big Data analytics
            </Card>
            <Card image="https://indatalabs.com/wp-content/uploads/2019/09/icon-jpg-1.svg">
              NLP &amp; text analysis
            </Card>
            <Card image="https://indatalabs.com/wp-content/uploads/2019/04/bi-icon-analysis.svg">
              BI implementation
            </Card>
            <Card image="https://indatalabs.com/wp-content/uploads/2019/04/icon-visualization.svg">
              Predictive Analytics
            </Card>
            <Card image="https://indatalabs.com/wp-content/uploads/2019/09/icon-k-2.svg">
              Data capture &amp; OCR
            </Card>
            <Card image="https://indatalabs.com/wp-content/uploads/2019/09/icon-vision-1.svg">
              Computer Vision
            </Card>
          </div>
        </section>
        <section className="implement-ai">
          <h1>Implementing AI Across Industries</h1>
          <div className="accordion active">
            <div className="accordion-head">
              <img
                src="https://indatalabs.com/wp-content/uploads/2020/01/icon-marketing-h.svg"
                alt="icon-marketing"
              />
              <h1>Marketing and Advertising</h1>
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
                We leverage artificial intelligence to speed up your marketing
                transformation and fuel sales. Analyze marketing campaigns,
                forecast demand and nurture data-based decision-making.
              </p>
              <ul>
                <li>Campaign performance forecasting</li>
                <li>Customer churn prediction</li>
                <li>Personalized advertising</li>
                <li>AI-led price optimization</li>
                <li>User-centric reporting</li>
                <li>Demand forecasting</li>
                <li>Smart data analytics</li>
                <li>Lead identification</li>
                <li>Sentiment analysis</li>
              </ul>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-head">
              <img
                src="https://indatalabs.com/wp-content/uploads/2021/09/icon-ecommerce-alt.svg"
                alt="icon-e-commerce"
              />
              <h1>E-commerce and Retail</h1>
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
                Implement AI technology to track current E-commerce trends,
                better segment and target clients, and guarantee your customers
                supreme shopping experience.
              </p>
              <ul>
                <li> AR visual effects and immersiveness</li>
                <li>Client segmentation and re-targeting</li>
                <li>Efficient customer data analysis</li>
                <li>Accurate AI-based visual search</li>
                <li>Improved customer experience</li>
                <li>Brand health monitoring</li>
                <li>Shoplifting prevention</li>
              </ul>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-head">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/09/icon-healtcare.svg"
                alt="icon-healthcare"
              />
              <h1>Healthcare and Wellness</h1>
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
                We build AI-based solutions to enhance healthcare delivery and
                improve patient outcomes. AI simplifies the healthcare journey:
                from diagnosis, treatment to monitoring.
              </p>
              <ul>
                <li> Business process optimization</li>
                <li>High-risk patient identification</li>
                <li>Accurate anomaly detection</li>
                <li>Chronic disease prevention</li>
                <li>Personalized treatment</li>
                <li>Treatment plan adjusting</li>
                <li>Medical image analysis</li>
                <li>Touch-less authentication</li>
              </ul>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-head">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/09/icon-car.svg"
                alt="icon-car"
              />
              <h1>Logistics and Supply Chain</h1>
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
                Decrease inventory costs, improve inventory and shipping
                management, and prevent human error with robust artificial
                intelligent custom solutions for logistics and supply chain.
              </p>
              <ul>
                <li>Order management and freight control</li>
                <li>Automated document processing</li>
                <li>Price prediction and optimization</li>
                <li>Smart inventory management</li>
                <li>Non-compliance identification</li>
                <li>Goods demand forecasting</li>
                <li>Cargo damage detection</li>
                <li>Brand health monitoring</li>
              </ul>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-head">
              <img
                src="https://indatalabs.com/wp-content/uploads/2022/01/icon-finance-banking-alt.svg"
                alt="icon-finance-banking-alt"
              />
              <h1>Fintech</h1>
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
                We develop AI-powered finance solutions for simplified work
                processes and better customer service. Get data insights to
                customer retention and automate paperwork with AI technology.
              </p>
              <ul>
                <li> Customer service and insights</li>
                <li>Customer retention insights</li>
                <li>Brand health monitoring</li>
                <li>Credit scoring analytics</li>
                <li>Crime and fraud prevention</li>
                <li>Violent behavior detection</li>
                <li>Paper work automation</li>
                <li>Secured private data</li>
              </ul>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-head">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/06/solutions-4.svg"
                alt="automotive"
              />
              <h1>Automotive</h1>
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
                Smart AI technologies for manufactures to better design,
                manufacture and monitor vehicles. Enable data-driven production
                process and post-support with cutting edge technologies.
              </p>
              <ul>
                <li> Reinforced safety measures on-site</li>
                <li>Automated documents processing</li>
                <li>Automated defect detection</li>
                <li>Warehouse capacity planning</li>
                <li>Smart design engineering</li>
                <li>Predictive maintenance</li>
                <li>AI visual inspection</li>
                <li>Crash simulation</li>
                <li>Fast data analysis</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="why-work-with-us">
          <h1>Why Work With InData Labs?</h1>
          <div className="flex-center">
            <div className="box flex-center flex-gp-sm">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/10/real-time.svg"
                alt="real-time"
              />
              <div className="text">
                <h2>Flexible Cooperation Models</h2>
                <p>
                  We offer flexible terms of cooperation that are the best fit
                  for your business needs.
                </p>
              </div>
            </div>

            <div className="box flex-center flex-gp-sm">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/10/personalization.svg"
                alt="personalization"
              />
              <div className="text">
                <h2>Innovative Approach</h2>
                <p>
                  The use of the latest tools and technologies with innovative
                  approaches.
                </p>
              </div>
            </div>

            <div className="box flex-center flex-gp-sm">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/10/customized.svg"
                alt="customized"
              />
              <div className="text">
                <h2>Extensive Experience</h2>
                <p>
                  Extensive experience and deep domain know-how in ML and AI
                  development.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="our-expertise">
          <h1>Our Tech Expertise Matrix</h1>
          <p>
            To develop artificial intelligence solutions, we use the best
            technologies available on the market, and we continually enrich our
            tech stack.
          </p>
          <div className="expertise">
            <h2>Data Science</h2>
            <div className="image-wrapper-container">
              <img
                src="https://indatalabs.com/wp-content/uploads/2020/08/logo-spacy.svg"
                alt="logo-Spacy"
              />
              <img
                src="https://indatalabs.com/wp-content/uploads/2020/08/logo-gensim.jpg"
                alt="logo-gensim"
              />
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/12/logo-tensorflow.svg"
                alt="logo-tensonflow"
              />
              <img
                src="https://indatalabs.com/wp-content/uploads/2020/08/logo-theano.svg"
                alt="logo-theano"
              />
              <img
                src="https://indatalabs.com/wp-content/uploads/2020/08/logo-xgboost.jpg"
                alt="logo-xgboost"
              />
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/04/technologies-scikit-learn.png"
                alt="technologies-scikit-learn"
              />
              <img
                src="https://indatalabs.com/wp-content/uploads/2020/06/logo-pytorch.svg"
                alt="logo-pytorch"
              />
              <img
                src="https://indatalabs.com/wp-content/uploads/2020/06/logo-keras.svg"
                alt="logo-keras"
              />
            </div>
          </div>
          <div className="expertise">
            <h2>Amazon AWS</h2>
            <div className="image-wrapper-container">
              <img
                src="https://indatalabs.com/wp-content/uploads/2020/08/logo-amazon-sagemaker.jpg"
                alt="logo-amazon-sagemaker"
              />
              <img
                src="https://indatalabs.com/wp-content/uploads/2020/08/logo-aws.svg"
                alt="logo-aws"
              />
            </div>
          </div>
          <div className="expertise">
            <h2>Amazon Azure</h2>
            <div className="image-wrapper-container">
              <img
                src="https://indatalabs.com/wp-content/uploads/2020/08/logo-azure-ml.jpg"
                alt="logo-azure-ml"
              />
            </div>
          </div>
        </section>
        <section className="implement-ai">
          <h1>Frequently asked question</h1>
          <div className="accordion">
            <div className="accordion-head">
              <h1>How can AI solve all business problems?</h1>
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
                A business problem can be solved with the help of AI. AI can be
                the right technology to analyze, monitor, predict, and automate
                a variety of business processes.
              </p>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-head">
              <h1>What are the top technologies of AI?</h1>
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
              <ul>
                <li>
                  Machine learning (supervised, unsupervised, reinforcement
                  learning)
                </li>
                <li>Deep learning</li>
                <li>Neural networks</li>
                <li>Natural language processing</li>
              </ul>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-head">
              <h1>What do AI consultants do?</h1>
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
                An AI consultant helps address the problem with technology
                according to the client’s business needs and pain points.
              </p>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-head">
              <h1>What is the price of AI consulting?</h1>
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
                The price depends on the complexity of the project, and can
                range from anywhere $10,000 to $250,000.
              </p>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-head">
              <h1>Will AI take over consulting?</h1>
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
                Neither AI replace consultant, nor it will take over management
                jobs. What we can predict is that there’ll be a shift to
                digitization in the years to come.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DSAI;
