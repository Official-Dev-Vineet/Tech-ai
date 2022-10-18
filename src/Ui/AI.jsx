import { useParams } from "react-router-dom";
import PoseEstimation from "../AI/Pose_estimation";
import ImageRecognition from "../AI/Image_detection";
import LogoDetection from "../AI/Logo_detection";
import VisualSearch from "../AI/Visual_search";
import './ui.css'

const AI = () => {
  const { ai } = useParams();

  return (
    <>
      {(ai === "pose-estimation" && <PoseEstimation />) ||
        (ai === "image-recognition" && <ImageRecognition />) ||
        (ai === "logo-detection" && <LogoDetection />) ||
        (ai === "visual-search" && <VisualSearch />)}
    </>
  );
};

export default AI;
