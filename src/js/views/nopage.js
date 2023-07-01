import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { useNavigate } from "react-router-dom";

const NoPage = () =>{
    const navigate = useNavigate();
    return (
        <div className="container text-center mt-5">
            <div> 
                <h1>Oops! URL not available ... </h1>
                <img src={rigoImage} />
            </div>
            <div className="mt-5">
                <button className="btn btn-light" onClick={() => navigate("/home")}>E.T. calling Home💕</button>
            </div>
        </div>
    )
}

export default NoPage