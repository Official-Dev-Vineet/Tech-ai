import { Link } from "react-router-dom";
import Header from "../Ui/ui-component/Header";

const ML = () => {
  return (
    <>
      <Header
        image="https://miro.medium.com/max/2878/0*M50IPKZz58Fyy178.gif"
        title="Machine Learning Consulting and Development
        for Business Analytics "
      >
        Innovate and explore new opportunities in your field with our machine
        learning consulting and development services.
      </Header>
      <main className="main-content">
        <section className="get-started">
          <p>
            The InData Labs team of seasoned data scientists and machine
            learning engineers experienced with unsupervised learning,
            supervised learning and reinforcement learning cooperates with
            clients to provide cutting-edge solutions for businesses of any
            size. We delve into each case and select best-fit innovative tools
            and proprietary technologies. The output is our custom machine
            learning models and solutions created in line with our clients’
            business requirements and goals.
          </p>
        </section>
        <section className="what-we-offer">
          <h1>Start Your Next Machine Learning Project With InData Labs</h1>
          <div className="column-container">
            <div className="column-content">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/04/icon-data.svg"
                alt="icon-data"
              />
              <div className="text">
                <h3>Big Data Visualization</h3>
                <p>
                  Extract valuable insights from unstructured data from multiple
                  sources.
                </p>
              </div>
            </div>
            <div className="column-content">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/09/icon-vision.svg"
                alt="icon-vision"
              />
              <div className="text">
                <h3>Computer Vision</h3>
                <p>
                  Extract more insights from visual data, and detect and
                  classify images according to their features into topic groups.
                </p>
              </div>
            </div>
            <div className="column-content">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/04/icon-visualization.svg"
                alt="icon-visualization"
              />
              <div className="text">
                <h3>Predictive </h3>
                <p>
                  Analytics Anticipate trends, sales and costs, reveal anomalies
                  to mitigate risks and steer your business in the right
                  direction.
                </p>
              </div>
            </div>
            <div className="column-content">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/08/icon-aaa.svg"
                alt="icon-aaa"
              />
              <div className="text">
                <h3>NLP (Natural Language Processing)</h3>
                <p>
                  Extract meaning from text data and speed up the reporting and
                  analysis processes.
                </p>
              </div>
            </div>
          </div>
          <p>Have an idea of a breakthrough ML solution in mind?</p>
          <span className="btn">
            <Link to="/contact">Let's Discuss your Project</Link>
          </span>
        </section>
        <section className="how-to-solve grid-two-wrapper">
          <h1>Our Machine Learning Development Services</h1>
          <div className="grid-three">
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/05/icon-deep-learning.svg"
                alt="icon-learning"
              />
              <div className="text">
                <h3>Deep Learning Solutions Development</h3>
                <p>
                  We provide our clients with quality assistance to streamline
                  business processes and significantly improve business metrics
                  by fine-tuning the performance of algorithms powered by
                  artificial neural networks.
                </p>
              </div>
            </div>
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/04/icon-custom-software.svg"
                alt="custom-software"
              />
              <div className="text">
                <h3>Custom Web Application Development</h3>
                <p>
                  Our customers get expert assistance in matters related to
                  custom machine learning-based web development services to
                  enhance their business efficiency and gain results unseen
                  before.
                </p>
              </div>
            </div>
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/05/icon-enterprise.svg"
                alt="icon-enterprise"
              />
              <div className="text">
                <h3>Enterprise Machine Learning as a Service</h3>
                <p>
                  Our hand-picked team builds machine learning solutions for
                  enterprises to help business owners automate and optimize
                  business operations through deriving valuable insights from
                  raw data with human intervention eliminated.
                </p>
              </div>
            </div>
          </div>
          <span className="btn">
            <Link to="/contact"> Contact us</Link>
          </span>
        </section>
        <section className="grid-two-wrapper">
          <div className="grid-two">
            <div className="text">
              <h1>The Machine Learning Development Lifecycle at a Glance</h1>
              <p>
                We take care of your entire project from day one, starting with
                clarifying the requirements and culminating with the delivery of
                a fully automated system.
                <br />
                <br />
                As one of the leading machine learning consulting and
                development companies, InData Labs presents a world-class data
                science team and machine learning consultants. Our experts have
                hands-on experience in applying cutting-edge ML tools and
                development approaches. They also use Cross-Industry Standard
                Process for Data Mining (CRISP-DM) to ensure the highest quality
                solutions and services that meet your requirements.
              </p>
            </div>
            <div className="image-fixer">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/05/machine-learning-cube-data.svg"
                alt="machine-learning-cube-data"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <span className="btn">
            <Link to="/contact">Start your project</Link>
          </span>
        </section>
        <section className="how-to-solve grid-two-wrapper">
          <h1>Our Machine Learning Consulting Services</h1>
          <p>
            Tech and business consulting on machine learning solutions based on
            your unique requirements, use cases, and dataset peculiarities.
          </p>
          <div className="grid-three">
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/05/icon-data-issues-2.svg"
                alt="icon-data-issue"
              />
              <div className="text">
                <h3>Unveiling Opportunities for Data Collection</h3>
                <p>
                  We’re aware of the data challenges that organizations face
                  like data collection and storage for further analysis. We help
                  companies pull together the requirements for data collection,
                  identify issues, and uncover relevant opportunities.
                </p>
              </div>
            </div>
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/05/icon-data-analysis-2.svg"
                alt="icon-data-analysis"
              />
              <div className="text">
                <h3>Conducting Exploratory Data Analysis (EDA)</h3>
                <p>
                  We plunge into step-by-step cooperation with organizations of
                  any size, starting with EDA, to pass to the model development
                  and training process. As a result of EDA, our clients retrieve
                  valuable reports and data-based recommendations.
                </p>
              </div>
            </div>
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/05/icon-implementing.svg"
                alt="icon-implement"
              />
              <div className="text">
                <h3>Implementing Machine Learning Algorithms</h3>
                <p>
                  Whatever the challenges, our team’s here to help implement
                  machine learning algorithms in business workflow. We offer the
                  best-fit approach for implementing and processing the provided
                  data.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="grid-two-wrapper">
          <h1>Key Use Cases for Industries</h1>
          <div className="grid">
            <div className="text">
              <div className="accordion">
                <div
                  className="accordion-head"
                  onClick={(e) =>
                    e.currentTarget.parentElement.classList.toggle("active")
                  }
                >
                  <h1>Healthcare & Pharma</h1>
                  <span
                    onClick={(e) =>
                      e.currentTarget.parentElement.parentElement.classList.remove(
                        "active"
                      )
                    }
                  >
                    +
                  </span>
                </div>
                <div
                  className="accordion-details"
                  onClick={(e) =>
                    e.currentTarget.parentElement.classList.toggle("active")
                  }
                >
                  <p>
                    Harness machine learning technology for better patient
                    outcomes. Forecast health risks and prevent diseases.
                  </p>
                  <br />
                  <ul>
                    <li>disease prediction and prevention</li>
                    <li>efficient diagnosis and anomaly detection</li>
                    <li>healthcare record and workflow analysis</li>
                    <li>clinical trial opportunity identification</li>
                    <li>drug development</li>
                  </ul>
                </div>
              </div>
              <div className="accordion">
                <div
                  className="accordion-head"
                  onClick={(e) =>
                    e.currentTarget.parentElement.classList.toggle("active")
                  }
                >
                  <h1>Sport & Wellness</h1>
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
                    Optimize physical activity with top-notch technology.
                    Enhance patient physical therapy outcomes through error
                    detection algorithms.
                  </p>
                  <br />
                  <ul>
                    <li>
                      human pose estimation for injury-free workouts with
                      personalized real-time feedback
                    </li>
                    <li>action recognition for fall detection</li>
                    <li>automated ball tracking</li>
                    <li>object tracking for players to train movements</li>
                    <li>sports performance analysis</li>
                  </ul>
                </div>
              </div>
              <div className="accordion">
                <div
                  className="accordion-head"
                  onClick={(e) =>
                    e.currentTarget.parentElement.classList.toggle("active")
                  }
                >
                  <h1>Manufacturing</h1>
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
                    Optimize the production processes, reduce costs and produce
                    products of high demand and quality.
                  </p>
                  <br />
                  <ul>
                    <li>
                      predictive maintenance on equipment and machinery to
                      predict failures
                    </li>
                    <li>analog gauge data reading</li>
                    <li>visual defect detection</li>
                    <li>forklift collision prevention</li>
                    <li>supply chain optimization</li>
                  </ul>
                </div>
              </div>
              <div className="accordion">
                <div
                  className="accordion-head"
                  onClick={(e) =>
                    e.currentTarget.parentElement.classList.toggle("active")
                  }
                >
                  <h1>E-commerce & Retail</h1>
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
                    Increase sales and predict customer retention with smart ML
                    technology.
                  </p>
                  <br />
                  <ul>
                    <li>customer review analysis</li>
                    <li>customer retention prediction</li>
                    <li>inventory management</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text">
              <div className="accordion">
                <div
                  className="accordion-head"
                  onClick={(e) =>
                    e.currentTarget.parentElement.classList.toggle("active")
                  }
                >
                  <h1>Marketing</h1>
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
                    Use ML to boost marketing strategies and increase sales.
                  </p>
                  <br />
                  <ul>
                    <li>lead qualification</li>
                    <li>customer analytics</li>
                    <li>customer sentiment analysis</li>
                    <li>personalized offers</li>
                  </ul>
                </div>
              </div>
              <div className="accordion">
                <div
                  className="accordion-head"
                  onClick={(e) =>
                    e.currentTarget.parentElement.classList.toggle("active")
                  }
                >
                  <h1>Supply Chain & Logistics</h1>
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
                    Implementing machine learning custom solutions, you improve
                    operational efficiency and automation.
                  </p>
                  <br />
                  <ul>
                    <li>inventory management</li>
                    <li>order management and freight control</li>
                    <li>demand and sales prediction</li>
                    <li>equipment damage prediction</li>
                    <li>route optimization</li>
                    <li>freight rates prediction</li>
                  </ul>
                </div>
              </div>
              <div className="accordion">
                <div
                  className="accordion-head"
                  onClick={(e) =>
                    e.currentTarget.parentElement.classList.toggle("active")
                  }
                >
                  <h1>Game & Entertainment</h1>
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
                    Uncover behavioral insights and retain your players with ML
                    analytics.
                  </p>
                  <br />
                  <ul>
                    <li>analytical insights</li>
                    <li>user behavior analysis</li>
                    <li>churn prediction</li>
                    <li>user sentiment analysis</li>
                  </ul>
                </div>
              </div>
              <div className="accordion">
                <div
                  className="accordion-head"
                  onClick={(e) =>
                    e.currentTarget.parentElement.classList.toggle("active")
                  }
                >
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
                    Advance financial decision making and strengthen security in
                    your organization with machine learning.
                  </p>
                  <ul>
                    <li>fraud detection</li>
                    <li>credit scoring analytics</li>
                    <li>customer retention prediction</li>
                    <li>violent behavior detection</li>
                    <li>paperwork automation</li>
                    <li>customer service analytics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="how-to-solve grid-two-wrapper">
          <div className="grid-two">
            <div className="image-fixer">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/05/machine-learning-cube-people.svg"
                alt="machine-learning-cube-people"
              />
            </div>
            <div className="text">
              <h1>Why Work with Us?</h1>
              <p>
                As a machine learning consulting services provider, we dive into
                the clients' business problems and help them make machine-driven
                systems learn on their own to achieve outstanding performance.
                Our machine learning engineers focus on the development of
                profound self-learning solutions. Such systems are capable of
                performing well on unstructured data and giving a highly
                accurate output. Data-driven business success is what we offer
                to our clients.
              </p>
            </div>
          </div>
          <div className="grid-three">
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2020/09/icon-like.svg"
                alt="icon-like"
              />
              <div className="text">
                <h3>Years of Experience </h3>
                <p>
                  Since 2014, we’ve been developing ML-powered solutions helping
                  businesses from various industries get digitized and grow.
                </p>
              </div>
            </div>
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/07/icon-five-stars.svg"
                alt="icon-five-start"
              />
              <div className="text">
                <h3>Top-Notch Technology</h3>
                <p>
                  Our team of data scientists and engineers use the latest
                  technology for custom solution development.
                </p>
              </div>
            </div>
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/06/icon-medal.svg"
                alt="icon-medal"
              />
              <div className="text">
                <h3>Reliable Development Partner</h3>
                <p>
                  A leading machine learning development company you can place
                  your trust in.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="get-started">
          <h1>Technologies</h1>
          <div className="image-wrapper-container" style={{ fontSize: 20 }}>
            <img
              src="https://indatalabs.com/wp-content/uploads/2019/04/technologies-python.png"
              alt="python"
            />
            <img
              src="https://indatalabs.com/wp-content/uploads/2019/04/technologies-tensorflow.png"
              alt="tensor-flow"
            />
            <img
              src="https://indatalabs.com/wp-content/uploads/2019/04/technologies-scikit-learn.png"
              alt="scikit-learn"
            />
            <img
              src="https://indatalabs.com/wp-content/uploads/2019/04/technologies-spark.png"
              alt="spark"
            />
            <img
              src="https://indatalabs.com/wp-content/uploads/2019/04/technologies-keras.png"
              alt="keras"
            />
            <img
              src="https://indatalabs.com/wp-content/uploads/2019/03/technologies-apache.png"
              alt="apache"
            />
            <img
              src="https://indatalabs.com/wp-content/uploads/2016/03/technologies-kafka.png"
              alt="kafka"
            />
            <img
              src="https://indatalabs.com/wp-content/uploads/2016/03/technologies-postgresql.png"
              alt="postgresql"
            />
            <img
              src="https://indatalabs.com/wp-content/uploads/2016/03/technologies-elastic.png"
              alt="elastic"
            />
          </div>
        </section>
        <section className="grid-two-wrapper">
          <h1>Customer Success</h1>
          <div className="stories-wrapper">
            <div className="story">
              <div className="image-fixer">
                <img
                  src="https://indatalabs.com/wp-content/uploads/2022/02/making-a-project-management-system-smarter.jpg"
                  alt="management-system"
                />
              </div>
              <div className="content">
                <h1>Making a Project Management System Smarter</h1>
                <p>
                  InData Labs was hired to eliminate the lack of information
                  managers have access to when estimating the duration of a
                  project. Our team employed machine learning and significantly
                  improved the performance of a project management system for
                  enterprises.
                </p>
              </div>
            </div>
            <div className="story">
              <div className="image-fixer">
                <img
                  src="https://indatalabs.com/wp-content/uploads/2022/02/predictive-models-improve-debt.jpg"
                  alt="predictive-model"
                />
              </div>
              <div className="content">
                <h1>
                  Building Predictive Models to Improve the Debt Collection
                  Process
                </h1>
                <p>
                  The client needed to improve debt collection effectiveness
                  with the help of predictive analytics. InData Labs managed to
                  build a machine learning model to predict the probability of
                  promise to pay and improve the efficiency of the debt
                  collection process.
                </p>
              </div>
            </div>
            <div className="story">
              <div className="image-fixer">
                <img
                  src="https://indatalabs.com/wp-content/uploads/2022/02/machine-learning-prediction-app.jpg"
                  alt="machine-learning-prediction"
                />
              </div>
              <div className="content">
                <h1>
                  Machine Learning to Improve the Accuracy of a Period
                  Prediction App
                </h1>
                <p>
                  The Client was looking for expertise in machine learning as a
                  service and asked our team to improve the overall prediction
                  accuracy. We have provided the client with a high- capacity
                  solution to significantly improve the accuracy of the
                  period-tracker app up to 15%.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="get-started">
          <h1>Frequently Asked Questions</h1>
          <div className="accordion">
            <div className="accordion-head">
              <h1>What’s machine learning project cost?</h1>
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
                Every project is unique. Time, development and integration,
                maintenance and deliverables make up the price of the project.
                The average price starts from $15k and can reach $40-90k and
                more.
              </p>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-head">
              <h1>
                What technologies do you use in machine learning projects?
              </h1>
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
                Python, Tensorflow, scikit-learn, Apache Spark, Keras, kafka,
                PostgreSQL, elastic, and more.
              </p>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-head">
              <h1>
                What machine learning development services do you provide?
              </h1>
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
              <p>Our consulting services include:</p>
              
              <ul className="list">
                <li>Exploratory data analysis (EDA)</li>
                <li>ML algorithms development and implementation</li>
              </ul>
              <br />
              <p>Development services:</p>
            
              <ul className="list">
                <li>Deep learning solution development</li>
                <li>Custom web application development</li>
                <li>Enterprise machine learning as a service</li>
              </ul>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-head">
              <h1>What are the key use cases for machine learning?</h1>
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
              <ul className="list">
                <li>Advanced analytics</li>
                <li>User behavior prediction</li>
                <li>Product recommendations</li>
                <li>Fraud detection</li>
                <li>Personalized treatment</li>
                <li>Targeting and customer behavior analysis</li>
                <li>Dynamic pricing and sales navigation</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ML;
