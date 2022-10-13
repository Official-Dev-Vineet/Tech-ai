import { useParams } from "react-router-dom";
import Blog from '../Data/Blog'
import WriteForUs from '../Data/WriteForUs'
import Careers from '../Data/Careers'
import SuccessStories from '../Data/SuccessStories'

const Data = () => {
  const { data } = useParams();

  return (
    <>
      {(data === "success-stories" && <SuccessStories />) ||
        (data === "blog" && <Blog />) ||
        (data === "careers" && <Careers />) ||
        (data === "write-for-us" && <WriteForUs />)}
    </>
  );
};

export default Data;
