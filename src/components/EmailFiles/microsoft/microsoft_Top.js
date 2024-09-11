import React from "react";
import "../../../assets/style/emailfiles/microsoft/microsoft_top.css"; // Import your styles
import top_img from "../../../assets/images/microsoft365_top.webp"; // Import your image

const Microsoft365Section = () => {
	return (
		<div className="microsoft365-container">
			{/* Left Image Section */}
			<div className="left-image">
				<img
					src={top_img} // Add your image URL here
					alt="Microsoft 365"
				/>
			</div>

			{/* Right Content Section */}
			<div className="right-content">
				<h1>MICROSOFT® 365</h1>
				<p>Collaborate, create, and connect with Microsoft 365.</p>

				{/* Features List with Icons */}
				<ul className="features-list">
					<li>
						<i className="fab fa-microsoft list-icon" /> Office 365 apps like
						Word, Excel, and Teams.
					</li>
					<li>
						<i className="fas fa-envelope list-icon" /> Email that matches your
						domain.
					</li>
					<li>
						<i className="fas fa-tools list-icon" /> Simple setup and expert
						customer support.
					</li>
				</ul>

				{/* Button */}
				<button className="pricing-button">
					See Plans and Pricing
					<i className="fas fa-arrow-right arrow-icon" />
				</button>

				{/* Star Rating and Reviews */}
				<div className="rating-section">
					<div className="stars">
						<i className="fas fa-star star-icon" />
						<i className="fas fa-star star-icon" />
						<i className="fas fa-star star-icon" />
						<i className="fas fa-star star-icon" />
						<i className="fas fa-star star-icon" />
					</div>
					<p>4.5/4.6 out of 5 stars based on 105,118 reviews</p>
				</div>

				{/* View All Link */}
				<a href="#" className="view-all-link">
					View All
				</a>
			</div>
		</div>
	);
};

export default Microsoft365Section;
