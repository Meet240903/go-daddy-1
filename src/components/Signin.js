import React from "react";
import "../assets/style/signin.css"; // Assuming CSS is in SignIn.css file
import { Link } from "react-router-dom";

const SignIn = () => {
	return (
		<div className="signin-container">
			{/* Left Side - Quick Links */}
			<div className="left-content">
				<div>
					<h2>Quick Links</h2>
					<h3>Control Panel Links:</h3>
					<ul>
						<li>Manage Domains</li>
						<li>Manage Website Builder</li>
						<li>Manage Hosting</li>
						<li>Manage SSL Certificates</li>
						<li>Manage Email</li>
					</ul>
				</div>
				<div>
					<h3>Inbox Links:</h3>
					<ul>
						<li>Office 365 Email Login</li>
						<li>GoDaddy Webmail Login</li>
					</ul>
				</div>
			</div>
			<hr />
			<div className="new-customer">
				<h3>New Customer?</h3>
				<p>New to GoDaddy? Create an account to get started today.</p>
				<Link to="/createaccount">
					{" "}
					<button className="create-account-button">Create My Account</button>
				</Link>
			</div>
			<hr />
			{/* Right Side - Registered Users */}
			<div className="right-content">
				<h2>Registered Users</h2>
				<p>Have an account? Sign in now.</p>
				<Link to="/sign_in">
					<button type="submit" className="signin-button">
						Sign In
					</button>
				</Link>
			</div>
		</div>
	);
};

export default SignIn;
