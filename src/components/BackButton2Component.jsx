
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton2Component = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate("/profile", { replace: true });
        };
        return (
        <div className="pointer" onClick={goBack}>
            <FontAwesomeIcon icon={faArrowLeft} /> Kembali
        </div>
    );
}

export default BackButton2Component



