import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Navigate, useNavigate } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const Home = () => {
	const {store, actions} = useContext(Context);
	const [contactList, setContactList] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		initializeAgenda()
		fetchContacts()
	}, []);

	const initializeAgenda = () => {
		actions.changeAgenda('4geeks_agenda')
	}

	const fetchContacts = () => {
		fetch('https://assets.breatheco.de/apis/fake/contact/agenda/' + store.agenda, {
			method: 'GET',
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(resp => {
			console.log(resp.ok);
			console.log(resp.status);
			console.log(resp);
		return resp.json();
		})
		.then(data=> {
			console.log(data);
			setContactList(data);
		})
		.catch(error => {
			console.log(error);
			alert('Oops something went wrong'+ error);
		});
	}

	const deleteContact = (contactId) => {
		fetch('https://assets.breatheco.de/apis/fake/contact/' + contactId, {
			method: 'DELETE',
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(resp => {			
			console.log(resp.ok);
			console.log(resp.status);
			return resp.json();
		})
		.then(data => {
			alert ('You are deleting the user!!!')
			console.log(data);			
			fetchContacts();
			alert('You have successfully deleted the contact');
		})
		.catch(error => {
			console.log(error);
			alert('Sorry there was an error' + error);
		})
	}

	const showContacts = () => {

		const profilePhoto = "https://picsum.photos/id/129/100";

		return contactList.map((item, index)=> {
			return(
				<li
					key={index}
					className="list-group-item d-flex contact-item"
					>						
						<div className="profile-photo">						
							<img className="fakePhoto"src={profilePhoto}/>								
						</div>
						
						<div className="contact-info">
							<div className="info">
								<div>
									<Link to={'/single-contact/' + item.id}><h5>{item.full_name}</h5></Link>
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
						<div className="icons">
							<i className="fas fa-pencil-alt" id="pencil" onClick={() => navigate("/contact-edit/" + item.id)}></i>
							<i className="fas fa-trash" id="trash" onClick={() => deleteContact(item.id, item.full_name)}></i>							
						</div>												
				</li>
								
			)
		})
	}

	return(
		<div>
			<div className="container-fluid">			
				<div className="d-grid justify-content-end" id="newcontact">
					<button className="btn btn-primary" onClick={() => navigate("/add-contact")} type="button">Add new contact</button>				
				</div>
			</div>			
			<div className="mainTitle">
				<h1>Contact list</h1>
				<div className="d-grid justify-content-center" id="logout">
					{store.isLoggedIn ? 
						<p>Welcome to the private view    <button onClick={()=> actions.logout()}>Log me out</button></p>
						:
						<Navigate to={"/login"} />
					}
				</div>				
			</div>			
			<ul className="list-group mt-4">
				{showContacts()}
			</ul>					
		</div>
	);
}

export default Home