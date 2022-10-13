import { useParams } from "react-router-dom";
import PrivacyPolicy from '../Details/PrivacyPolicy'
import CookiePolicy from '../Details/CookiePolicy'
import TermOfUse from '../Details/TermOfUse'

const Details = () => {
  const { details } = useParams();
  return (
    <>
      {(details === "privacy-policy" && <PrivacyPolicy />) ||
        (details === "cookie-policy" && <CookiePolicy />) ||
        (details === "term-of-use" && <TermOfUse />)}
    </>
  );
};

export default Details;
