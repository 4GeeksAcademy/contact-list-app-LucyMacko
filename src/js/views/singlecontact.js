import React, {useEffect, useState } from "react";
import "../../styles/home.css";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";

const SingleContact = () => {
    const params = useParams();
    const [contact, setContact] = useState();
    const profilePhoto = "https://picsum.photos/id/129/100";

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
        <div>
			<div className="row align-items-start" id="contactcard">					  					
                <div className="col-4" id="profilePic">
                    <img src={profilePhoto}></img>
                </div>
            </div>			
			<div className="mainTitle">
				<h1>Single Contact: {contact.id}</h1>				
			</div>
            {contact ? (			
			<li
            key={index}
            className="list-group-item d-flex justify-content-between"
            >
                <div className="d-flex justify-content-between">
                    <div>
                        <img src={profilePhoto}/>
                    </div>
                    <div className="info">
                        <div>
                            <h5>{item.full_name}</h5>
                        </div>
                        <div>
                            <i className="fas fa-map-marker"></i>
                            <p>{item.address}</p>
                        </div>
                        <div>
                            <i className="fas fa-phone"></i>
                            <p>{item.phone}</p>
                        </div>
                        <div> 
                            <i className="fas fa-envelope"></i>
                            <p>{item.email}</p>
                        </div>
                    </div>	
                </div>                						
            </li>
               
            ) : (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
            <Link to="/">Go back home</Link>			
		</div>
    )
}

export default SingleContact