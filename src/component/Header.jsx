import { useState } from "react";
import { Link } from "react-router-dom";
import KnowMore from "./KnowMore";

const Header = (prop) => {
  const [isShowKnowMore, setIsShowKnowMore] = useState(false);
  function toggler(data) {
    setIsShowKnowMore(data);
  }
  return (
    <>
      <div className="container">
        <header className="home-header flex-gp-lg">
          <div className="left">
            <h1>
              welcome to new generation{" "}
              <span className="theme-text">AI Web</span>
            </h1>
            <p>
              The world-famous science fiction movie, “The Matrix” showed us a
              fictional world where Artificial Intelligence (AI) controlled the
              planet. The movie explored what our world would be like if AI took
              over everything. However, you don’t need a movie anymore to show
              you how data science and artificial intelligence (AI) could change
              everything. It’s already here and is already being adapted in
              major industries globally.
            </p>
            <Link
              to="#"
              onClick={(e) => setIsShowKnowMore(!isShowKnowMore)}
              className="btn"
            >
              know more...
            </Link>
          </div>
          <div className="right flex-center">
            <img
              src="https://indatalabs.com/wp-content/uploads/2021/08/ai-in-webdev.jpg"
              alt="will web development replaced by AI technology"
            />
          </div>
        </header>
        {isShowKnowMore && <KnowMore name={toggler} />}
      </div>
    </>
  );
};

export default Header;
