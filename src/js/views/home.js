import React from "react";
import "../../styles/home.css";

const Home = () => {
	return(
		<div className="container-fluid">			
			<div class="d-grid justify-content-end" id="newcontact">
				<button class="btn btn-primary" type="button">Add new contact</button>				
			</div>			
			<div className="mainTitle">
				<h1>Contact list</h1>
			</div>
			<div class="container-fluid">
  				<div class="row align-items-start" id="contactcard">
					<div className="col-2" id="profilePic">
						<img src="https://picsum.photos/id/129/100"></img>
					</div>
					<div className="col-8" id="info">
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<p className="fw-bold">Mike Anamendolla</p>
								<p><i className="fas fa-map-marker"></i></p>
								<p><i className="fas fa-phone"></i></p>
								<p><i className="fas fa-envelope"></i></p>
							</li>					
						</ul>
					</div>
					<div className="col-2" id="addDelete">
						<i className="fas fa-pencil-alt" id="pencil"></i>
						<i className="fas fa-trash" id="trash"></i>
					</div>
				</div>
			</div>				
		</div>
	);
}

export default Home