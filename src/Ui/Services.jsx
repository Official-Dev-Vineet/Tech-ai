import DSAI from "../services/DSAI";
import { useParams } from "react-router-dom";
import AISD from "../services/AISD";
import AIMAD from "../services/AIMAD";
import DC from "../services/DC";
import CV from "../services/CV";
import ML from "../services/ML";
import './ui.css'

const Container = () => {
  const { param } = useParams();

  return (
    <>
      {(param === "data-science-and-ai" && <DSAI />) ||
        (param === "ai-software-development" && <AISD />) ||
        (param === "AI-mobile-app-development" && <AIMAD />) ||
        (param === "computer-vision" && <CV />) ||
        (param === "machine-learning" && <ML />) ||
        (param === "data-capture" && <DC />)}
    </>
  );
};

export default Container;
