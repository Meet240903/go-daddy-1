import React from "react";
import "../../../assets/style/emailfiles/emailoptionpages/emailtop.css";
import img from "../../../assets/images/alloption_image.webp";
import star_icon from "../../../assets/images/star_icon.webp";
const Emailoption = () => {
	return (
		<>
			<div className="email-option-section">
				<img
					src={img}
					alt="Business Productivity"
					className="email-option-img"
				/>
				<div className="email-option-content">
					<h1>Grow your business with powerful productivity tools</h1>
					<ul>
						<li>
							Send and receive emails from your domain with Professional Email.
						</li>
						<li>Accomplish more every day with Microsoft 365.</li>
						<li>Save by purchasing both together.</li>
					</ul>
					<button className="try-domain-button">
						See Plans and Pricing <span className="arrow-icon">→</span>
					</button>
				</div>
			</div>
			<div className="reviews-section">
				<p>Our customers say</p>
				<h6>Excellent</h6>
				<h6>| 4.6 out of 5 stars based on 104,958 reviews </h6>
				<img
					src={star_icon}
					alt="Trustpilot Logo"
					className="trustpilot-logo"
				/>
			</div>
		</>
	);
};

export default Emailoption;
