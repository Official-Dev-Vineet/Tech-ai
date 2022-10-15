import { Link } from "react-router-dom";
import Header from "../Ui/ui-component/Header";

const DC = () => {
  return (
    <>
      <Header
        image="http://media.giphy.com/media/YZdO1VXtOUH5u/giphy.gif"
        title="Automated Data Capture, Data Extraction & OCR Services"
      >
        InData Labs, a data extraction company, provides high-quality services
        for you to find, capture, and extract data automatically from
        unstructured documents and automate work processes
      </Header>
      <div className="main-content">
        <section className="get-started">
          <h1>
            Robust Solutions to Get Rich Insights Into Data and Automate
            Business Processes
          </h1>
          <p>
            The volume of data that businesses deal with on a daily basis is
            growing exponentially. Services such as data capture, retrieval, and
            extraction have become integral parts of an organization’s
            workflows. These are the prerequisites for effectively managing
            large amounts of information stored in different formats and
            locations.
          </p>
          <p>
            InData Labs is an automated data capture vendor that fosters
            data-driven businesses by providing them with efficient solutions.
            To manage your data and automate business processes, we offer OCR,
            data capture and extraction services.
          </p>
        </section>
        <section className="what-we-offer">
          <h1>Data Capture Services We Offer</h1>
          <div className="column-container">
            <div className="column-content">
              <img
                src="
              https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Homoglyph_a.svg/800px-Homoglyph_a.svg.png"
                alt="character recognition"
                style={{ backgroundColor: "#ddd", borderRadius: "1em" }}
              />
              <div className="text">
                <h3>Character Recognition</h3>
                <p>
                  Automated identification, data capture and character
                  recognition of text in embedded images, image files, etc.
                </p>
              </div>
            </div>
            <div className="column-content">
              <img
                src="https://cdn.icon-icons.com/icons2/2248/PNG/512/text_recognition_icon_135110.png"
                alt="text-recognition"
                style={{ backgroundColor: "#ddd", borderRadius: "1em" }}
              />
              <div className="text">
                <h3>Feature Detection</h3>
                <p>
                  Recognition of separate elements of each character, such as
                  lines, strokes, angles, etc.
                </p>
              </div>
            </div>
            <div className="column-content">
              <img
                src="https://cdn.icon-icons.com/icons2/1936/PNG/128/barcode1_122337.png"
                alt="barcode"
                style={{ backgroundColor: "#ddd", borderRadius: "1em" }}
              />
              <div className="text">
                <h3>Optical Barcode Recognition </h3>
                <p>
                  <span
                    className="theme-text"
                    title="optical-barcode-recognition"
                  >
                    (OBR)
                  </span>
                  Recognition of a product and its features by scanning a
                  barcode.
                </p>
              </div>
            </div>
            <div className="column-content">
              <img
                src="
              https://cdn.icon-icons.com/icons2/1265/PNG/128/1496969764-file09_84697.png"
                alt="Character Recognition on Raw Images"
                style={{ backgroundColor: "#ddd", borderRadius: "1em" }}
              />
              <div className="text">
                <h3>Character Recognition on Raw Images</h3>
                <p>
                  Data extraction from low-quality images with poor
                  illumination, containing poorly printed characters, and more.
                </p>
              </div>
            </div>
          </div>
          <p style={{ lineHeight: 1.5 }}>
            We also assist with data extraction services such as developing web
            data extraction software from scratch to derive information not only
            from printed documents, but also from the web sources.
            <br /> <br />
            Explore web data extraction services with InData Labs!
          </p>
          <span className="btn">
            <Link to="/contact">Contact us</Link>
          </span>
        </section>
        <section className="timeline how-we-solve">
          <h1>How Our Data Capture and Extraction Services Work</h1>
          <div className="timeline-container" style={{ margin: "1.5em auto" }}>
            <div className="line"></div>
            <div className="timeline-content">
              <div className="head"></div>
              <div className="content">
                <img
                  src="	https://indatalabs.com/wp-content/themes/indata/img/data-source-cloud-mobile.svg"
                  alt="cloud-mobile"
                />
                <h1>Data Source</h1>
                <p>We capture data from different data sources</p>
              </div>
            </div>
            <div className="timeline-content">
              <div className="head"></div>
              <div className="content">
                <img
                  src="https://indatalabs.com/wp-content/uploads/2019/04/icon-load-data.svg"
                  alt="icon-data-loading"
                />
                <h1>ETL</h1>
                <p>We extract, transform and load your data</p>
              </div>
            </div>
            <div className="timeline-content">
              <div className="head"></div>
              <div className="content">
                <img
                  src="https://indatalabs.com/wp-content/uploads/2019/04/icon-data.svg"
                  alt="data-icon"
                />
                <h1>Analytics DWH</h1>
                <p>We integrate and store your data in a data warehouse</p>
              </div>
            </div>
            <div className="timeline-content">
              <div className="head"></div>
              <div className="content">
                <img
                  src="https://indatalabs.com/wp-content/uploads/2019/04/icon-visualization.svg"
                  alt="Data Visualization"
                />
                <h1>Data Visualization</h1>
                <p>
                  {" "}
                  We visualize analytical data for your reporting and monitoring
                  purposes, etc.
                </p>
              </div>
            </div>
            <div className="timeline-content">
              <div className="head"></div>
              <div className="content">
                <img
                  src="https://indatalabs.com/wp-content/uploads/2019/04/icon-data-ready.svg"
                  alt="icon-data-ready"
                />
                <h1>AI, ML, DS</h1>
                <p>Data is ready for training algorithms</p>
              </div>
            </div>
            <div className="timeline-content">
              <div className="head"></div>
              <div className="content">
                <img
                  src="	https://indatalabs.com/wp-content/uploads/2019/04/icon-data-analysis.svg"
                  alt="EDA"
                />
                <h1>EDA</h1>
                <p>Our team conducts exploratory data analysis</p>
              </div>
            </div>
            <div className="timeline-content">
              <div className="head"></div>
              <div className="content">
                <img
                  src="	https://indatalabs.com/wp-content/uploads/2019/04/icon-engineering.svg"
                  alt="engineering"
                />
                <h1>FE</h1>
                <p>We kickstart the feature engineering process</p>
              </div>
            </div>
            <div className="timeline-content">
              <div className="head"></div>
              <div className="content">
                <img
                  src="https://indatalabs.com/wp-content/uploads/2019/04/icon-fitting.svg"
                  alt="icon fitting"
                />
                <h1>Model Fitting</h1>
                <p>
                  We train an AI model and choose the best fitting parameters
                </p>
              </div>
            </div>
            <div className="timeline-content">
              <div className="head"></div>
              <div className="content">
                <img
                  src="https://indatalabs.com/wp-content/uploads/2019/04/icon-validation.svg"
                  alt="icon-validating"
                />
                <h1>Model Validation</h1>
                <p>We validate the model to prove its functionality</p>
              </div>
            </div>
            <div className="timeline-content">
              <div className="head"></div>
              <div className="content">
                {" "}
                <img
                  src="	https://indatalabs.com/wp-content/uploads/2019/04/icon-Interpretation.svg"
                  alt="Results Interpretation"
                />
                <h1>Results Interpretation</h1>
                <p>
                  We show you the results and explain the functionality of the
                  model
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="how-we-solve flex-center flex-column">
          <h1>How You Can Use It</h1>
          <div className="grid-two">
            <div className="image-fixer">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/09/ocr-monoblock.svg"
                alt="ocr-monoBlock"
              />
            </div>
            <div className="text">
              <p>
                Organizations face numerous challenges in modern competitive
                industries. By remaining stagnant and not improving processes
                over time, you can undermine both short- and long-term growth.
                Today, most business leaders have to be steadily on the lookout
                for the most effective ways to embrace technologies for workflow
                automation.
                <br />
              </p>

              <article>
                <br />
                <p>
                  InData Labs employs Google’s Tesseract OCR, Abbyy
                  FlexiCapture, and Textract to provide real-time data capture,
                  efficient processing of raw static images, and the
                  categorization and storage of data in a single database.
                </p>
              </article>
            </div>
          </div>
          <p>
            We’re also ready to build an automated data capture system to meet
            your requirements that will help you improve office efficiency and
            maximize productivity with minimal effort.
            <br /> <br />
            Looking for an efficient data extraction solution powered by machine
            learning?
          </p>
          <span className="btn">
            <Link to="/contact">Contact us </Link>
          </span>
        </section>
        <section className="benefits why-work-with-us">
          <div className="text-wrapper">
            <div className="text">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/04/icon-accuracy.svg"
                alt="icon-accuracy"
              />
              <div className="text-inner">
                <h2>Improved Accuracy</h2>
                <p>
                  Tedious and repetitive manual processes may cause employee
                  overload. With a view to prevent that, data input procedures
                  should be automated to enhance the accuracy of information for
                  further processing and to optimize workload.
                </p>
              </div>
            </div>
            <div className="text">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/04/icon-accuracy-2.svg"
                alt="icon-accuracy-4"
              />
              <div className="text-inner">
                <h2>Improved Visibility</h2>
                <p>
                  Data extraction and processing automation allows employees to
                  have all business-critical data immediately available and
                  accessible at any time.
                </p>
              </div>
            </div>
            <div className="text">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/04/icon-productivity.svg"
                alt="icon-productivity"
              />
              <div className="text-inner">
                <h2>Increased Productivity</h2>
                <p>
                  Elimination of manual data entry minimizes input errors and
                  increases employee productivity. Employees can focus on tasks
                  requiring human involvement and allocate more time to
                  activities that add value to an organization.
                </p>
              </div>
            </div>
            <div className="text">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/08/icon-cost-2.svg"
                alt="icon-cost"
              />
              <div className="text-inner">
                <h2>Reduced Costs</h2>
                <p>
                  Business owners are always looking for ways to make business
                  processes more cost-efficient and invest in improved
                  productivity. The automation of manual work can immediately
                  yield the desired results.
                </p>
              </div>
            </div>
            <div className="text">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/04/icon-time-saving.svg"
                alt=""
              />
              <div className="text-inner">
                <h2>Time-Saving Approach</h2>
                <p>
                  Time is of great value for business processes. To ensure a
                  time-saving approach to manual task solving, employees can use
                  data automation and extraction tools which free up time for
                  intellectual work.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="how-we-solve">
          <h1>OCR and Data Capture for Logistics & Transportation</h1>
          <div className="grid-two">
            <div className="image-fixer">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/04/ocr-scanning.svg"
                alt="ocr-scanning"
              />
            </div>
            <div className="text">
              <p>
                Optical character recognition systems aim to digitize paper
                documents to enable automated data search, retrieval, and
                processing with little to no human involvement. OCR systems can
                help optimize business workflow involving numerous manual tasks.
                Companies of different sizes can make the most of the technology
                to meet the consumers’ needs for expedited and more secure
                goods’ shipment at a lower delivery cost.
              </p>
              <br />
              <p>
                OCR scanning services provide logistics industry representatives
                with significant perks:
              </p>
              <ul className="list">
                <li>Automates manual input and cuts paper-based workflow</li>
                <li>Reduces input errors by more than 90%</li>
                <li>Enables remote data capture via mobile devices</li>
                <li>Reduces data capture costs and time by more than 90%</li>
                <li>Automates transferring captured data</li>
                <li>Provides efficient automated invoice processing</li>
                <li>Facilitates invoices and receipts processing</li>
                <li>
                  Makes package registration, tracking, and delivery
                  time-efficient
                </li>
                <li>Reduces overall delivery costs</li>
                <li>Provides web data extraction services if needed</li>
              </ul>
            </div>
          </div>
          <p style={{ lineHeight: 1.4, letterSpacing: "0.8px" }}>
            By adopting custom OCR data extraction software, you invest in a
            solution that automates data capture, both locally and remotely,
            processes it with a low error rate, ensures timely order delivery,
            and increases customer loyalty.
          </p>
        </section>
        <section className="what-we-offer">
          <h1>Other Industries</h1>
          <p>
            As a data extraction company, we provide optical character
            recognition services and help companies across multiple industries
            optimize their business processes with the help of our automated
            data capture software.
          </p>
          <div className="accordion active">
            <div className="accordion-head">
              <h1>Gaming</h1>
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
                Player metrics have always been the most valuable resource for
                game developers and analysts. They want to understand players,
                monitor and improve gameplay, test design hypotheses, and
                release products based on thoroughly gathered research.
                <br />
                <br />
                We provide our customers with the best OCR services and help
                them:
                <br />
              </p>
              <ul className="list">
                <li>improve accuracy</li>
                <li>reduce errors</li>
                <li>eliminate manual tasks</li>
              </ul>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-head">
              <h1>Education</h1>
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
                The educational sphere deals with huge amounts of paperwork
                every day. Almost all crucial documents are in a paper format
                and it can be difficult to find necessary information quickly
                and store it in a convenient format.
                <br />
                <br />
                This makes it difficult and challenging for educational
                institutions to offer the best student experience.
                <br />
                <br />
                Our automated data capture services:
                <br />
              </p>
              <ul className="list">
                <li>optimize educational process</li>
                <li>eliminate manual data entry errors</li>
                <li>improve the overall accuracy</li>
                <li>improve the students experience</li>
              </ul>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-head">
              <h1>Retails</h1>
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
                {" "}
                The use of automated data capture services give you an overview
                of your customers’ behavior. Additionally, you can easily scan
                and extract data from various sources.
                <br />
                <br />
                This will give you some interesting insights and ways in which
                some areas can be optimized.
                <br />
                <br />
                You will be able to:
                <br />
              </p>
              <ul className="list">
                <li>reduce costs</li>
                <li>improve customer services </li>
                <li> increase the efficiency of store operations</li>
              </ul>
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-head">
              <h1>Travel</h1>
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
                Big data can bring endless opportunities for the travel
                industry.
                <br />
                <br />
                We help our clients collect and analyze valuable information
                from different sources at every stage of their customers’
                journey. We help them improve the customer experience and
                enhance the service provided.
                <br />
                <br />
                The use of our solution will allow you to:
                <br />
              </p>
              <ul className="list">
                <li>collect and structure valuable data</li>
                <li>improve services provided</li>
                <li>improve customer experience</li>
              </ul>
            </div>
          </div>
          <p>Outsource your data extraction services to experts.</p>
          <span className="btn">
            <Link to="/contact">contact us</Link>
          </span>
        </section>
        <section className="how-to-solve ">
          <h1>
            Why Work With <span className="theme-text">AI Tech</span>
          </h1>
          <p
            style={{ margin: "0.8em auto", width: "80%", textAlign: "center" }}
          >
            At InData Labs, we invest time and effort into delivering the best
            solutions to our clients and providing first-class data capture and
            extraction services.
          </p>
          <div className="grid-three">
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/04/icon-professional-team.svg"
                alt="icon-professional"
              />
              <h3> Top-Notch R&amp;D Team</h3>
              <p>
                We are a seasoned development team of over 80 members with years
                of production experience in artificial intelligence projects and
                expertise in various domains.
              </p>
            </div>
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/04/icon-customizable-solutions.svg"
                alt="icon-customizable-solutions"
              />
              <h3>Customizable Solutions</h3>
              <p>
                We don’t settle for average. Our solutions are tailored to fit
                our clients’ exact needs, the nature of their data and the
                specifics of their business area.
              </p>
            </div>
            <div className="box">
              <img
                src="https://indatalabs.com/wp-content/uploads/2019/04/icon-quality-results.svg"
                alt="icon-quality-results"
              />
              <h3>High-Quality Results</h3>
              <p>
                We build automated data capture solutions to help you improve
                data accuracy, reduce input errors, cut paper document
                processing costs, and concentrate on more creative tasks.
              </p>
            </div>
          </div>
        </section>
        <section className="how-we-solve">
          <h1>Customer Success</h1>
          <div className="stories-wrapper">
            <div className="story">
              <div className="image-fixer">
                <img
                  src="https://indatalabs.com/wp-content/uploads/2022/08/ocr-solution-and-api.jpg"
                  alt="ocr-solution-and-api"
                />
              </div>
              <div className="content">
                <h2>
                  OCR Solution and API for Secure Infrared Brand Verification
                </h2>
                <p>
                  Our Client was the Netherlands-based startup focused on
                  creating technologies for the security printing industry to
                  help brands combat counterfeits in the market. The Client
                  contacted InData Labs for machine learning consulting services
                  and expertise in data management and Al software development.
                  As a result, the InData Labs' team delivered a PoC to evaluate
                  Computer Vision <span className="theme-text">(OCR)</span>{" "}
                  tools capabilities.
                </p>
              </div>
            </div>
            <div className="story">
              <div className="image-fixer">
                <img
                  src="https://indatalabs.com/wp-content/uploads/2021/04/ocr-based-solution-retrieve-data-from-receipts.jpg"
                  alt="ocr-based-solution-retrieve-data-from-receipts"
                />
              </div>
              <div className="content">
                <h2>OCR-Based Solution to Retrieve Data from Receipts</h2>
                <p>
                  The Client provided the InData Labs' team with a mobile
                  application designed to store digital receipts. The challenge
                  was to amplify this app by applying machine learning. Our data
                  scientists employed optical character recognition technology
                  to train an algorithm to extract key data from raw images
                  after improving image quality via classical computer vision
                  methods.
                </p>
              </div>
            </div>
            <div className="story">
              <div className="image-fixer">
                <img
                  src="https://indatalabs.com/wp-content/uploads/2021/12/image-analysis-enhance-ticket-processing-sw.jpg"
                  alt="images-analysis-enhance-ticket-processing-sw"
                />
              </div>
              <div className="content">
                <h2>Image Analysis to Enhance Ticket Processing Software</h2>
                <p>
                  InData Labs provided consulting on a solution in the field of
                  machine learning and computer vision{" "}
                  <span className="theme-text">(OCR)</span>. The Client
                  challenged us to develop a solution for automated digitization
                  of travel cheques, which requires a large dataset.
                </p>
              </div>
            </div>
          </div>
          <p>Automated data capture and machine learning data extraction will generate additional value, increase ROI, automate the workflow, and facilitate tedious tasks. If you want to outsource data capture or extraction services, InData Labs is at your service to offer the best solutions for your business.</p>
        </section>
      </div>
    </>
  );
};

export default DC;
