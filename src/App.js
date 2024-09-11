import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Email from "./components/Email";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Help from "./components/Help";
import SignIn from "./components/Signin";
import CreateAccount from "./components/CreateAccount";
import Sign_In from "./components/Sign_in";
// Adjust the path according to your file structure

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/email" element={<Email />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/help" element={<Help />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/createaccount" element={<CreateAccount />} />
					<Route path="/sign_in" element={<Sign_In />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
