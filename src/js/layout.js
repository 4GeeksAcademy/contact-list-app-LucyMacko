import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./views/home";
import injectContext from "./store/appContext";
import AddContact from "./views/addcontact";
import ContactEdit from "./views/contactedit";
import NoPage from "./views/nopage";
import SingleContact from "./views/singlecontact";
import FakeLogIn from "./views/login";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>					
				<Routes>
					<Route path="/login" element={<FakeLogIn />} />
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/single-contact/:id" element={<SingleContact />} />
					<Route path="/contact-edit/:id" element={<ContactEdit />} />										
					<Route path="/add-contact" element={<AddContact />} />
					<Route path="*" element={<NoPage />} />
				</Routes>				
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
