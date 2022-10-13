import Header from "../Ui/ui-component/Header";
import { Link } from "react-router-dom";

const CV = () => (
  <>
    <Header
      image="https://luzontech.com/wp-content/uploads/2020/04/computer-vision-compressor-scaled.jpg"
      title="Custom Computer Vision Software Development"
    >
      We are ready to help you add value to your business with ML algorithms for
      robust computer vision solutions with image analysis, object detection and
      video analysis.
    </Header>
    <div className="main-content">
      <div className="get-started">
        Our team of experts at InData Labs helps businesses in Healthcare,
        Manufacturing, Fitness and Sports, E-commerce, Marketing and Logistics,
        and other industries solve business challenges and fuel growth with the
        help of computer vision technology. No matter what solution you need – a
        surveillance video system, building a visual inspection system, invoice
        processing app, or pose estimation implementation for enhancing your
        customer experience and automating business processes, we’ll find the
        right way to address it.
      </div>
      <section className="our-expertise">
        <h1>Computer Vision Expertise</h1>
        <p>
          Our computer vision software development team builds custom solutions
          that perform:
        </p>
        <div className="grid-three" style={{ width: "100%" }}>
          <div className="box">
            <img
              src="https://indatalabs.com/wp-content/uploads/2021/07/icon-segment-cube.svg"
              alt="cube"
            />
            <h3>Object Detection, Tracking and Labeling</h3>
            <p>
              We extract insights from visual data for various needs: medical
              image processing, virtual try-ons, visual search, etc.
            </p>
          </div>
          <div className="box">
            <img
              src="https://indatalabs.com/wp-content/uploads/2020/09/icon-like.svg"
              alt="like"
            />
            <h3>Recommender Systems Based on Visual Search</h3>
            <p>
              Recommender systems for personalized offers and increased customer
              engagement and loyalty.
            </p>
          </div>
          <div className="box">
            <img
              src="https://indatalabs.com/wp-content/uploads/2022/02/icon-defect-detection.svg"
              alt="detection"
            />
            <h3>Visual Inspection for Defect Detection</h3>
            <p>
              Automated visual inspection solutions to look for defects on the
              production line and cargo damage detection.
            </p>
          </div>
          <div className="box">
            <img
              src="https://indatalabs.com/wp-content/uploads/2019/12/icon-digitalization.svg"
              alt="digitalization"
            />
            <h3>OCR &amp; Data Capture</h3>
            <p>
              Custom data capture and extraction solutions developed for
              document process automation.
            </p>
          </div>
          <div className="box">
            <img
              src="https://indatalabs.com/wp-content/uploads/2021/07/icon_pose-estimation.svg"
              alt="pose"
            />
            <h3>Pose Estimation</h3>
            <p>
              Solutions to track and analyze human movement and activity, and
              give feedback on user’s workouts.
            </p>
          </div>
          <div className="box">
            <img
              src="https://indatalabs.com/wp-content/uploads/2020/03/icon-entertainment-3.svg"
              alt="entertainment"
            />
            <h3>Video Analysis for Automated Surveillance</h3>
            <p>
              We develop video analytics solutions for violent behavior
              detection in real time.
            </p>
          </div>
        </div>
      </section>
      <section className="how-we-solve">
        <h1>Computer Vision Software Development for Your Needs</h1>
        <div className="grid-two">
          <div className="text">
            <h1>
              Adopt Multi-Object Detection Models for Automatic Image Tagging
            </h1>
            <p>
              We use convolutional neural networks to teach machines what
              different objects look like and train algorithms to automatically
              identify people and objects in the picture.
              <br />
              Multi-object detection can be a great asset for E-commerce
              organizations and social media platforms.
              <br /> It can be used to enhance the customer experience in
              retail, logistics, and supply chain. Need a custom image
              recognition model?
            </p>
            <span className="btn">
              <Link to="/contact">Let's talk</Link>
            </span>
          </div>
          <div className="image-fixer">
            <img
              src="https://cdn.dribbble.com/users/1976516/screenshots/8813427/media/dc39df1db943f5e771f43bb54ce023d2.gif"
              alt=""
            />
          </div>
        </div>
        <div className="grid-two">
          <div className="text">
            <h1>
              Extract More Insights from Visual Data with Image Segmentation
              Models
            </h1>
            <p>
              Image segmentation splits an image into meaningful parts to make
              it easier for machines to understand, process, and analyze.
              <br />
              Image segmentation can be widely applied for object tracking,
              medical image processing, face recognition, and more. Looking for
              help with your image analysis project?
            </p>
            <span className="btn">
              <Link to="/contact">Contact us</Link>
            </span>
          </div>
          <div className="image-fixer">
            <img
              src="https://thegradient.pub/content/images/2018/05/semseg.gif"
              alt=""
            />
          </div>
        </div>
        <div className="grid-two">
          <div className="text">
            <h1> Provide Better Experiences with Our Pose Estimation Model</h1>
            <p>
              Human pose estimation is one of the most burning issues in today’s
              computer vision community.
              <br />
              Our team is ready to aid you with a pose estimation model that can
              be implemented into your app or any other 3rd party tool. It’s
              aimed to predict, identify, and track the presence and location of
              a person and their movement to help you provide better services.
              <br />
              <br />
            </p>
            <span className="theme-text">This functionality will empower:</span>
            <ul className="list">
              <li>Crowd counting and tracking systems</li>
              <li>AR experiences (ex. AI-powered coaches)</li>
              <li>Gaming and entertainment</li>
              <li>Robotics</li>
            </ul>
            <p>Need help with your project?</p>
            <span className="btn">
              <Link to="/contact">Contact us </Link>
            </span>
          </div>
          <div className="image-fixer">
            <img
              src="https://user-images.githubusercontent.com/11255376/71256359-d6ca1300-2373-11ea-812a-babb3b5b2ad5.gif"
              alt="pose estimation  "
            />
          </div>
        </div>
        <div className="grid-two">
          <div className="text">
            <h1>
              Automate Manual and Repetitive Tasks with OCR &amp; Data Capturing
            </h1>
            <p>
              Businesses deal with big data on a daily basis, and the volume is
              growing exponentially. Services such as data capture, retrieval,
              and extraction have become integral parts of organizations’
              workflows.
              <br />
              We deliver high-end computer vision solutions to find, capture,
              and extract data automatically from unstructured documents and cut
              down on manual operations.
              <br />
              Contact us to discuss your would-be solution!
            </p>
            <span className="btn">
              <Link to="/contact">Contact us </Link>
            </span>
          </div>
          <div className="image-fixer">
            <img
              src="https://miro.medium.com/max/1400/1*hVxkXe35kRcAht3QpJylyg.gif"
              alt="text scanning"
            />
          </div>
        </div>
        <div className="grid-two">
          <div className="text">
            <h1>
              {" "}
              Use Product Matching and Provide Accurate Recommendations with
              Image Similarity Search
            </h1>
            <p>
              Image similarity search allows customers to quickly find similar
              products based on visual attributes such as color, shape, texture,
              etc, across the web. This technology is becoming increasingly
              important in the era of big data that businesses exploit for
              growth.
              <br />
              We will help you implement the product-matching and recommendation
              technology to tackle massive amounts of unstructured data more
              efficiently, increase ROI, prevent cost overruns, and add value to
              your work.
              <br />
              Need a custom visual search engine?
            </p>
            <span className="btn">
              <Link to="/contact">Contact us </Link>
            </span>
          </div>
          <div className="image-fixer">
            <img
              src="https://www.royalcyber.com/wp-content/uploads/2020/06/Visual-Search-bag-main-img-V1.png"
              alt="visual search "
            />
          </div>
        </div>
        <div className="grid-two">
          <div className="text">
            <h1>
              Create Unique Content with Generative Adversarial Network (GAN)
            </h1>
            <p>
              Animation, entertainment and other visual content creation
              industries can benefit from GAN to generate creative
              interpretations of data. It can change sketches into realistic
              scenes, synthesize characters or scenes similar to the original
              ones, autocorrect artifacts in drawings, simulate and animate body
              physics, and generate 3D objects from pictures.
              <br />
              GAN is used for images to:
            </p>
            <ul className="list">
              <li>
                Enhance – restore quality, correct the color and lighting,
                upsample or remove background.
              </li>
              <li>
                Stylize – change the way the image is painted, borrowing from
                visual artists and styles.
              </li>
              <li>
                Transform – make your users look younger or older, or maybe even
                zombies or athletes.
              </li>
              <li>
                Generate – build your own portfolio of concept arts, designs or
                even imagined humans.
              </li>
              <li>
                Visualize – paint a realistic (or not really) picture from the
                textual description.
              </li>
              <li>
                {" "}
                Edit – vary poses, clothing and facial features such as smiles,
                eyes, noses or hair.
              </li>
            </ul>
            <span className="btn">
              <Link to="/contact">Contact us </Link>
            </span>
          </div>
          <div className="image-fixer">
            <img
              src="https://cdn.vox-cdn.com/thumbor/DSwbGm6n1Ml6QP4iKVOKvzSKm-4=/0x0:954x525/954x499/filters:focal(477x263:478x264):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21974085/neural_filters_age_change.gif"
              style={{ objectFit: "contain" }}
              alt="gan images filter"
            />
          </div>
        </div>
        <div className="grid-two">
          <div className="text">
            <h1>
              Boost Brand Visibility with Logo Detection &amp; Brand Monitoring
              Solution
            </h1>
            <p>
              Object detection algorithms facilitate specifying object presence
              and location in an image, based on the set of categories used to
              train a custom algorithm.
              <br />
              We assist organizations and individuals by delivering machine
              learning-based logo detection systems. Our solutions help automate
              real-time recognition of brand logos in an image or in broadcast
              video streams and show accurate brand visibility analytics.
              <br />
              Need a custom logo detection and brand monitoring solution?
            </p>
            <span className="btn">
              <Link to="/contact">Contact us </Link>
            </span>
          </div>
          <div className="image-fixer">
            <img
              src="https://miro.medium.com/max/3840/1*hIp11kgQiIoV6YRESsui7Q.jpeg"
              alt="images recognition"
            />
          </div>
        </div>
        <div className="grid-two">
          <div className="text">
            <h1>
              Harness Big Data with Object Segmentation in 3D Point Clouds
            </h1>
            <p>
              Point clouds are used in 3D modeling to generate accurate models
              of real-world items or scenes. This technology is in high demand
              for computer graphics, VR, and communication.
              <br />
              Our computer vision developers and infrastructure architects will
              help you generate immersive 3D models of the physical world easily
              and with great speed.
              <br />
              Have a project in mind?
            </p>
            <span className="btn">
              <Link to="/contact">Contact us </Link>
            </span>
          </div>
          <div className="image-fixer">
            <img
              src="https://miro.medium.com/max/1000/1*7kkB294P5LNaN1qDFDdZvQ.gif"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="what-we-offer">
        <h1>Computer Vision Software Development Services</h1>
        <div className="column-container">
          <div className="column-content">
            <img
              src="https://indatalabs.com/wp-content/uploads/2019/05/icon-data-analysis-2.svg"
              alt="data analysis"
            />
            <h3>Validating Data</h3>
            <p>
              We check and analyze the data provided. And if needed, clean, and
              relabel it.
            </p>
          </div>
          <div className="column-content">
            <img
              src="https://indatalabs.com/wp-content/uploads/2021/07/icon-design-optimization.svg"
              alt="design-optimize"
            />
            <h3>Design and Optimization</h3>
            <p>
              According to the client's requirements, we can design and optimize
              the solution for the specific platforms and devices.
            </p>
          </div>
          <div className="column-content">
            <img
              src="https://indatalabs.com/wp-content/uploads/2021/07/icon-engine-mobile-app.svg"
              alt="engine mobile app"
            />
            <h3> Developing an App</h3>
            <p>
              We develop solid computer vision-powered applications catered to
              your business' specifics and needs.
            </p>
          </div>
          <div className="column-content">
            <img
              src="https://indatalabs.com/wp-content/uploads/2021/07/icon-engine-integration.svg"
              alt="engine-integration"
            />
            <h3>System Integration</h3>
            <p>
              We help integrate our solution into the client’s infrastructure
              and offer post production support.
            </p>
          </div>
        </div>
      </section>
      <section className="why-work-with-us">
        <h1>Computer Vision Development Tools</h1>
        <p>
          We use the latest tools &amp; technologies for computer vision
          development to help you overcome your challenges.
        </p>
        <div className="flex-center flex-gp-lg flex-wrap image">
          <div className="image-container">
            <h3>Deep learning</h3>
            <img
              src="https://indatalabs.com/wp-content/uploads/2016/03/technologies-tensorflow.png"
              alt="tensorflow"
            />
            <img
              src="https://indatalabs.com/wp-content/uploads/2016/03/technologies-keras.png"
              alt="keras"
            />
          </div>
          <div className="image-container">
            <h3>Computer Vision</h3>
            <img
              src="https://indatalabs.com/wp-content/uploads/2018/03/technologies-opencv.png"
              alt="opencv"
            />
            <img
              src="https://indatalabs.com/wp-content/uploads/2018/03/technologies-pcl.png"
              alt="pcl"
            />
          </div>
          <div className="image-container">
            <h3>Software Development</h3>
            <img
              src="https://indatalabs.com/wp-content/uploads/2018/03/technologies-cplusplus.png"
              alt="cplusplus"
            />
            <img
              src="https://indatalabs.com/wp-content/uploads/2016/03/technologies-python.png"
              alt="python"
            />
          </div>
        </div>
        <p className="light-text">
          Implementation of a custom-built solution will generate additional
          value, automate the workflow and facilitate difficult tasks.
        </p>
      </section>
      <section className="benefits why-work-with-us">
        <h1>Benefits</h1>
        <p>
          The use of custom-built computer vision solutions allow you to derive
          many practical benefits with minimal efforts.
        </p>
        <div className="flex-center">
          <div className="box flex-center flex-gp-sm">
            <img
              src="https://indatalabs.com/wp-content/uploads/2019/10/real-time.svg"
              alt="real time"
            />
            <div className="text">
              <h2>Simpler and Faster Processes</h2>
              <p>
                Automate a number of working processes and check your products
                faster.
              </p>
            </div>
          </div>
          <div className="box flex-center flex-gp-sm">
            <img
              src="https://indatalabs.com/wp-content/uploads/2020/12/icon-analytics-2.svg"
              alt="analysis"
            />
            <div className="text">
              <h2>Cost Reduction</h2>
              <p>
                Reduce expenses and increase the profitability of your services
                and products.
              </p>
            </div>
          </div>
          <div className="box flex-center flex-gp-sm">
            <img
              src="https://indatalabs.com/wp-content/uploads/2021/07/icon-goal.svg"
              alt="goal"
            />
            <div className="text">
              <h2>Higher Accuracy</h2>
              <p>
                Increase the accuracy of data-based operations and reduce
                errors.
              </p>
            </div>
          </div>
          <div className="box flex-center flex-gp-sm">
            <img
              src="https://indatalabs.com/wp-content/uploads/2021/05/icon-diamond.svg"
              alt="diamond"
            />
            <div className="text">
              <h2>High-Quality Results</h2>
              <p>
                Optimize the working process and increase the quality of
                customer service.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="why-work-with-us">
        <h1>Why Work With Us?</h1>
        <p>
          We make it easy to build excellent machine vision software. Discover
          the reasons to choose us as your computer vision technology partner.
        </p>
        <div className="text-wrapper">
          <div className="text">
            <img
              src="https://indatalabs.com/wp-content/uploads/2019/06/icon-deep-learning.svg"
              alt="deep learning "
            />
            <div className="text-inner">
              <h3>Complex Computer Vision Models</h3>
              <p>
                We use convolution's neural networks to train efficient
                algorithms inspired by biological neural activities.
              </p>
            </div>
          </div>
          <div className="text">
            <img
              src="https://indatalabs.com/wp-content/uploads/2019/06/icon-customizable-solutions.svg"
              alt="customizable solution"
            />
            <div className="text-inner">
              <h3>Customizable Solutions</h3>
              <p>
                We don’t settle for average. The solutions that we deliver are
                tailored to fit our customers’ needs and the nature of their
                data.
              </p>
            </div>
          </div>
          <div className="text">
            <img
              src="https://indatalabs.com/wp-content/uploads/2019/06/icon-cloud.svg"
              alt="icon cloud"
            />
            <div className="text-inner">
              <h3>Cloud Infrastructure</h3>
              <p>
                Our leading ML engineers, consultants, and infrastructure
                architects work together to achieve the best performance for our
                customers.
              </p>
            </div>
          </div>
          <div className="text">
            <img
              src="https://indatalabs.com/wp-content/uploads/2019/06/icon-medal.svg"
              alt="icon medal"
            />
            <div className="text-inner">
              <h3>A Highly Experienced Team</h3>
              <p>
                We pursue greatness in everything we do to provide our customers
                with best-in-class solutions in computer vision applications
                development.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="success-stories how-we-solve">
        <h1>Customer success</h1>
        <div className="stories-wrapper">
          <div className="story">
            <div className="image-fixer">
              <img
                src="https://indatalabs.com/wp-content/uploads/2021/07/building-object-capturing-model.jpg"
                alt="building-object-capturing-model"
              />
            </div>
            <div className="content">
              <h2> An Object Capturing Model to Improve Cargo Security</h2>
              <p>
                The client hired InData Labs' team to develop a solution capable
                of solving the following challenges:
              </p>
              <ul className="list">
                <li> Enable capturing objects </li>
                <li>
                  Ensure more secure cargo transportation with object tracking
                </li>
                <li>
                  Calibrate 3D cameras and create a dense point cloud to detect
                  different objects and movements
                </li>
                <li>Solve semantic segmentation problems</li>
              </ul>
              <p>
                As a result, the Client got the object segmentation model for
                capturing objects and more effective processing of point clouds
                data.
              </p>
            </div>
          </div>
          <div className="story">
            <div className="image-fixer">
              <img
                src="https://indatalabs.com/wp-content/uploads/2021/07/man-on-horse-jumps-over-barrier.jpg"
                alt="man-on-horse-jumps-over-barrier"
              />
            </div>
            <div className="content">
              <h2>
                Image Capturing Solution to Predict Horses' Performance During
                Races
              </h2>
              <p>
                InData Labs was challenged to develop a Windows 10-based desktop
                application for tablets to capture images of available horses by
                using internal and external cameras. The extracted data was
                needed to predict the performance of horses during race events.
                <br />
                Our team managed to create a high-quality computer vision
                application that meets the Client's needs and exceeds
                expectations.
              </p>
            </div>
          </div>
          <div className="story">
            <div className="image-fixer">
              <img
                src="https://indatalabs.com/wp-content/uploads/2021/07/face-id-solution.jpg"
                alt="face id solution"
              />
            </div>
            <div className="content">
              <h2>
                {" "}
                Creating a Deep Learning-Based Face ID Solution to Improve
                Security
              </h2>
              <p>
                Our client was looking for expertise in facial recognition to
                build a highly secure Face ID system.
                <br />
                Our challenge was to build this system with the use of deep
                learning algorithms capable of identifying an individual by
                matching a photo with a real-time captured image or video
                streams Of different length. The result: a Python-based PoC and
                consultation on the project.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="implement-ai">
        <h1>Frequently Asked Questions</h1>
        <div className="accordion">
          <div className="accordion-head">
            <h1>What’s computer vision cost?</h1>
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
              An average computer vision project price starts at about 15k$ and
              can reach 50-100k$ or more. Since every project is one of a kind,
              the project price is calculated considering its scope, complexity,
              data available, domain, and target date.
            </p>
          </div>
        </div>
        <div className="accordion">
          <div className="accordion-head">
            <h1>
              What technologies do you use to develop computer vision solutions?
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
            <p className="light-text">
              OpenCV, Open3D, OpenCL, sci-kit-image, PyTorch, Tensorflow, CoreML
            </p>
          </div>
        </div>
        <div className="accordion">
          <div className="accordion-head">
            <h1>What computer vision apps can you develop?</h1>
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
              Using computer vision technology, we can solve the following
              tasks:
            </p>
            <ul>
              <li>object detection</li>
              <li>image segmentation</li>
              <li>visual search </li>
              <li>brand logo detection</li>
              <li>facial recognition</li>
              <li>pose estimation</li>
              <li>motion analysis</li>
            </ul>
          </div>
        </div>
        <div className="accordion">
          <div className="accordion-head">
            <h1>How does R&amp;D product development work?</h1>
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
              Our business consultants and data scientists will help you figure
              out your project’s feasibility. We’ll study the requirements, and
              come up with the idea how to solve your business challenge with
              computer vision.
            </p>
          </div>
        </div>
        <div className="accordion">
          <div className="accordion-head">
            <h1>What domains do you work with?</h1>
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
              Retail/eCom, Wellness &amp; Fitness, Healthcare, Logistics,
              Marketing & Advertising, Fintech, Entertainment and Gaming, but we
              are flexible in applying our computer vision expertise to solve
              business challenges faced by companies in other domains.
            </p>
          </div>
        </div>
        <div className="accordion">
          <div className="accordion-head">
            <h1>
              My project requires work with sensitive data. How do you ensure
              data privacy?
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
            <p>We don’t keep your data. Your data is processed locally.</p>
          </div>
        </div>
        <div className="accordion">
          <div className="accordion-head">
            <h1>What are the key stages of a computer vision-based project?</h1>
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
              First, we analyze the requirements and give an estimation. During
              the project setup, we choose the development model and build the
              team. We move to agile project development (progress reporting
              during each iteration and testing). Then we do the final testing
              and collect the feedback. Post-project support is offered upon the
              project completion.
            </p>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default CV;
