import React from "react";
import "../assets/style/CreactAccount.css";
import backgroundImage from "../assets/images/create-acc.jpg"; // Make sure the image file path is correct
import { Link } from "react-router-dom";

const CreateAccount = () => {
	return (
		<div className="container">
			<div className="content">
				<h1>Create an Account</h1>
				<p>Already have an account?</p>
				<Link to="/sign_in">
					<a href="/sign_in" className="signin-link">
						Sign In
					</a>
				</Link>
				<div className="social-buttons">
					<button className="social-btn facebook">
						<i className="fab fa-facebook-f"></i> Continue with Facebook
					</button>
					<button className="social-btn google">
						<i className="fab fa-google"></i> Continue with Google
					</button>
					<button className="social-btn email">
						<i className="fas fa-envelope"></i> Continue with Email
					</button>
				</div>

				<p className="terms">
					By creating an account, you agree to GoDaddy's{" "}
					<a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.
				</p>
			</div>
		</div>
	);
};

export default CreateAccount;
