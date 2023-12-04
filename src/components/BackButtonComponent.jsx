import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackButtonComponent = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className="pointer" onClick={goBack}>
      <FontAwesomeIcon icon={faArrowLeft} /> Kembali
    </div>
  );
};

export default BackButtonComponent;
