import { FaLongArrowAltDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
const KnowMore = (prop) => {
  return (
    prop.name && (
      <div className="wrapper">
        <section className="know-more-container">
          <div className="flex-center flex-column relative">
            <div className="flex-center flex-gp-md know-more-header">
              <div className="text-container">
                <h1>
                  {" "}
                  How to Use{" "}
                  <span className="theme-text ">AI in Web Development </span>
                </h1>
                <p>
                  The role of AI in web development cannot go unnoticed. Today,
                  web app development has grown to an extent that it has given
                  birth to whole new industries related to the field. Website
                  developers compete in offering customers highly personalized
                  and enhanced experiences which are achieved by using AI in web
                  development.
                </p>
              </div>
              <div className="image-container">
                <img
                  src="https://indatalabs.com/wp-content/uploads/2021/08/how-to-use-ai-in-webdev.jpg"
                  alt="How to Use AI in Web Development"
                />
              </div>
            </div>
            <div className="dummy-text ">
              <p>
                The way we search things on search engines has changed
                dramatically. For instance, many people prefer voice searches
                via Google Assistant and Apple’s Siri. Therefore, using
                AI-powered solutions allows businesses to implement user-centric
                innovations that improve user experience and increase customer
                interaction. For instance, E-commerce websites now use AI tools
                like voice-based search results and AI-based chatbots to improve
                user experience. Some uses of AI for web development include:
                <span className="flex-center icon-lg">
                  <FaLongArrowAltDown />
                </span>
              </p>
            </div>
            <div className="text-container">
              <h1>
                <span className="theme-text">1.</span> Artificial Intelligence
                (AI) in Website Development
              </h1>
              <p>
                Artificial intelligence is being widely used by web app
                development companies to simplify the development process. These
                companies use an algorithm that constructs websites and assists
                developers by giving website design and layout suggestions. It
                gives real-time suggestions for the development process.
              </p>
            </div>
            <div className="text-container">
              <h1>
                <span className="theme-text">2.</span>Stimulating Customer
                Engagement
              </h1>
              <p>
                AI enables website developers to add AI-powered chatbots and
                communication tools to enhance customer experience and induce
                engagement. These chatbots stimulate real conversations and have
                easily replaced customer service specialists. They also guide
                customers about taking action and increasing their participation
                on your website as a result of quick response times.
              </p>
            </div>
            <div className="text-container">
              <h1>
                <span className="theme-text">3.</span>Faster Coding
              </h1>
              <p>
                Those days are long gone when coding was considered difficult.
                With AI assisting in web development, code is way easier and
                faster. Artificial Intelligence in web development automates
                various processes and enables developers to create code more
                easily. Automated coding has massively cut down turnaround times
                and has enabled developers to build more intuitive apps in a
                short timeframe.
              </p>
            </div>
            <div className="text-container">
              <h1>
                <span className="theme-text">4.</span>
                Conduct Customer Behavior Analysis
              </h1>
              <p>
                AI empowers website owners and E-commerce businesses to analyze
                customer’s behavior by monitoring their daily activity on the
                platforms. Additionally, it has provided a customization
                experience to website owners and customers where they can use
                visual AI to make informed purchases. Image recognition allows
                businesses to remove inappropriate content and counterfeit
                products from their platforms that are uploaded as fake reviews
                by so-called customers.
              </p>
            </div>
          </div>
        </section>
        <div className="close-btn">
          <span
            className="flex-center gap-sm icon-close"
            onClick={() => prop.name(!prop.name)}
          >
            {<IoMdClose />}
          </span>
        </div>
      </div>
    )
  );
};

export default KnowMore;
