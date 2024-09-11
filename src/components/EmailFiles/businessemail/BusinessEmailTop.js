import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowRight,
	faStar,
	faEnvelope,
	faBullhorn,
	faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../../../assets/style/emailfiles/bussinessemail/businessemailtop.css"; // Import the CSS file
import topimage from "../../../assets/images/bussiness_top_img.webp";
import EmailFooter from "../../../components/EmailFiles/emailoptionpages/EmailFooter";
const ProfessionalEmail = () => {
	return (
		<div className="email-container">
			{/* Left side image */}
			<div className="email-image">
				<img src={topimage} alt="Professional Email" />
			</div>
			{/* Right side content */}
			<div className="email-content">
				<h2>Professional Email</h2>
				<p>
					Your business will look better than ever. Earn your customers' trust
					with a professional email address that matches your business name.
				</p>
				{/* Icons and features */}
				<div className="features">
					<div className="feature-item">
						<FontAwesomeIcon icon={faEnvelope} className="feature-icon" />
						<p>
							Look professional with a custom email address that matches your
							domain.
						</p>
					</div>
					<div className="feature-item">
						<FontAwesomeIcon icon={faBullhorn} className="feature-icon" />
						<p>Promote your brand with every message you send.</p>
					</div>
					<div className="feature-item">
						<FontAwesomeIcon icon={faShieldAlt} className="feature-icon" />
						<p>Help protect your data against cyber attacks.</p>
					</div>
					<p>Call an expert now: 040-67607600</p>
					<br />
				</div>
				{/* See Plans and Pricing button */}
				<button className="pricing-button">
					See Plans and Pricing{" "}
					<FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />{" "}
				</button>

				{/* Star rating */}
				<div className="rating">
					{" "}
					{[...Array(4)].map((_, i) => (
						<FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
					))}
					<span className="rating-text">
						4.6 out of 5 stars based on 105,049 reviews
					</span>{" "}
					<a href="#reviews" className="view-all-link">
						View All
					</a>
				</div>
				{/* View All reviews */}
			</div>{" "}
		</div>
	);
};

export default ProfessionalEmail;
