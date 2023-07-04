import React, { useContext, useState} from "react"
import "../../styles/login.css";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext";

const FakeLogIn = () =>{

    const { actions, store } = useContext (Context);
    const logo4geeks = "https://avatars.githubusercontent.com/u/16607406?s=280&v=4"

    return(
        <div className="mainContainer">
            <div className="container-fluid">
                <h1>Welcome to Your SuperDruper 4Geeks Contact Agenda</h1>
            </div>
            <div className="pagePicture d-flex justify-content-center">
                <img id="logo4geeks" src={logo4geeks} />
            </div>
            
            <div className="body">                
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"><strong>Email address</strong></label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label"><strong>Password</strong></label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>                
                <button type="submit" onClick={() => actions.login()} className="btn btn-primary"> Fake Submit</button>
                {store.isLoggedIn ? <Navigate to={"/home"}></Navigate> : <p>(🦄 You are <strong>not</strong> logged in )</p>}
            </div>
        </div>
    )
}

export default FakeLogIn