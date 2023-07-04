import React, {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import "../../styles/singlecontact.css";

const SingleContact = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [contact, setContact] = useState();
    const profilePhoto = "https://picsum.photos/id/129/200/";

    useEffect(() => {
        fetchSingleContact();
    }, [])

    const fetchSingleContact= () => {
        fetch('https://assets.breatheco.de/apis/fake/contact/' + params.id, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(resp => {
			console.log(resp.ok); // will be true if the response is successfull
			console.log(resp.status); // the status code = 200 or code = 400 etc.
			console.log(resp); // will try return the exact result as string
			return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
		})
		.then(data => {
			//here is where your code should start after the fetch finishes
			console.log(data); //this will print on the console the exact object received from the server
            setContact(data);
            
		})
		.catch(error => {
			//error handling
			console.log(error);
    	});
    }
    

    return(
        <div className="component">
            <h1>Contact : {params.id}</h1>
            {contact ? (
                <div>
                    <div className="card">
                        <img src={profilePhoto} className="card-img-top" alt="two_people" />                    
                        <div className="card-body">
                            <h5 className="card-title"> {contact.full_name}</h5>
                            <li><i className="fas fa-envelope"></i> {contact.email}</li>
                            <li><i className="fas fa-phone"></i> {contact.phone}</li>
                            <li><i className="fas fa-map-marker"></i> {contact.address}</li>
                            <button className="btn btn-secondary" onClick={() => navigate("/")}>Go back home</button>
                        </div>
                    </div>			
                </div>           
            ) : (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}            			
		</div>
    )
}

export default SingleContact