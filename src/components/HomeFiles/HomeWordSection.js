import React from "react";
import "../../assets/style/homefiles/homeword.css";
import backgroundImage from "../../assets/images/website_builder_img.jfif";
import bottomRightImage from "../../assets/images/website_builder_inside.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGlobe,
	faStore,
	faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

const HomeWordSection = () => {
	return (
		<div className="full-width-container">
			{/* Full-width background image */}
			<img
				src={backgroundImage}
				alt="Background"
				className="background-image"
			/>

			{/* Content box on the left side */}
			<div className="content-box">
				<h1>
					GoDaddy's Website Builder is super-convenient for somebody who has an
					idea of what they're trying to create, but might not have any
					technical skills.
				</h1>
				<div className="content-bottom">
					<ul className="products-list">
						<li>
							<FontAwesomeIcon icon={faGlobe} /> Domain
						</li>

						<li>
							<FontAwesomeIcon icon={faStore} /> Online Store
						</li>
						<li>
							<FontAwesomeIcon icon={faShieldAlt} /> SSL Certificates
						</li>
					</ul>
					<img
						src={bottomRightImage}
						alt="Roletape"
						className="bottom-right-image"
					/>
				</div>
			</div>
		</div>
	);
};

export default HomeWordSection;
