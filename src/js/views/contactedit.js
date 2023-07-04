import React, {useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "../../styles/contactedit.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const ContactEdit = () => {

    const params = useParams();    

    const [fullName, setFullName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [address,setAddress] = useState(''); 
    const {store, actions} = useContext(Context);    

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
            setFullName(data.full_name);
            setEmail(data.email);
            setPhone(data.phone);
            setAddress(data.address);
            
		})
		.catch(error => {
			//error handling
			console.log(error);
    	});
    }
    
    const onSubmit = () => {
        if ( fullName === '') {
            alert ('Please enter your full name'); 
        } else if (!email.includes('@') || email === '') {
            alert ('Please use the full email address'); 
        } else if (phone === '') {
            alert ('Please enter your phone number');
        } else if (address === '') {
            alert ('Please provide an address with a number'); 
        } else {
            const contact = {
                "full_name": fullName,
                "email": email,
                "agenda_slug": store.agenda,
                "address": address,
                "phone": phone
            }
            fetch('https://assets.breatheco.de/apis/fake/contact/' + params.id, {
				method: "PUT",
				body: JSON.stringify(contact),
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
				setFullName('');
				setEmail('');
				setPhone('');
				setAddress('');
				alert('You have successfully updated the contact');
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
		}
	}

    return(
        <div className="container" id="newContact">
            <div className="text-center" id="titleNewContact">
                <h1>Add a New Contact</h1>
            </div>
            <div className="col-12">
                <label htmlFor="fullName" className="form-label"><strong>Full Name</strong></label>
                <input type="text" value={fullName} onChange={(e)=> setFullName(e.target.value)} className="form-control" id="fullName" placeholder="" />
            </div>
            <div className="col-12">
                <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control" id="email" placeholder="" />
            </div>
            <div className="col-12">
                <label htmlFor="phone" className="form-label"><strong>Phone</strong></label>
                <input type="text" value={phone} onChange={(e)=> setPhone(e.target.value)} className="form-control" id="phone" placeholder="" />
            </div>
            <div className="col-12">
                <label htmlFor="address" className="form-label"><strong>Address</strong></label>
                <input type="text" value={address} onChange={(e)=> setAddress(e.target.value)} className="form-control" id="address" placeholder="" />
            </div>
            <div className="d-grid">
                <button className="btn btn-primary mb-12 mt-4" onClick={onSubmit} > Update the Info</button>
            </div>
            <Link to="/"> or get back to contacts</Link>
        </div>
    )
}

export default ContactEdit