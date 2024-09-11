import React, { useState } from "react";
import "../assets/style/sign_in.css";
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const SignIn = () => {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="Sign_In_container">
			<div className="sign-in-content">
				<h1>Sign in</h1>
				<p>New to GoDaddy?</p>
				<a href="#">Create an Account</a>

				<div className="form-group">
					<label htmlFor="username">Username or Customer #*</label>
					<input
						type="text"
						id="username"
						placeholder="Enter Username or Customer #"
					/>
				</div>

				<div className="form-group password-group">
					<label htmlFor="password">Password*</label>
					<input
						type={showPassword ? "text" : "password"}
						id="password"
						placeholder="Enter Password"
					/>
					<button
						type="button"
						className="toggle-password"
						onClick={togglePasswordVisibility}
					>
						{showPassword ? <MdVisibility /> : <MdVisibilityOff />}
					</button>
				</div>

				<div className="form-group">
					<input type="checkbox" id="keep-signed-in" />
					<label htmlFor="keep-signed-in">
						Keep me signed in on this device
					</label>
				</div>

				<button className="sign-in-btn">Sign In</button>

				<p>or sign in with</p>

				<div className="social-login">
					<button className="social-btn google">
						<FaGoogle /> Continue with Google
					</button>
					<button className="social-btn apple">
						<FaApple /> Continue with Apple
					</button>
					<button className="social-btn facebook">
						<FaFacebookF /> Continue with Facebook
					</button>
				</div>

				<div className="forgot-links">
					<a href="#">Need to find your username?</a>
					<a href="#">Need to reset your password?</a>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
