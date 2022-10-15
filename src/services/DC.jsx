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
                src="https://indatalabs.com/wp-content/uploads/2019/04/icon-accuracy-4.svg"
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
                src="https://indatalabs.com/wp-content/uploads/2018/04/icon-productivity.svg"
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
      </div>
    </>
  );
};

export default DC;
