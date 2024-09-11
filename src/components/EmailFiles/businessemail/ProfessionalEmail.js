import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../../../assets/style/emailfiles/bussinessemail/businessprofessionalimage.css"; // Import the CSS file
import Professional_img1 from "../../../assets/images/professional_img1.webp";
import Professional_img2 from "../../../assets/images/PRofessional_img2.webp";
import Professional_img3 from "../../../assets/images/Professional_img3.webp";
import Professional_img4 from "../../../assets/images/Professional_img4.webp";
const ProfessionalEmail = () => {
	return (
		<div className="professional_image_container">
			{/* First section */}
			<div className="professional_image_section">
				<div className="professional_image_left-content">
					<h2>Professional Email is good for business.</h2>
					<p>
						We’ve updated our Professional Email plans to make it simple,
						secure, and mobile-friendly. Now you can sync all your accounts
						across all devices, promote your business every time you send and
						receive emails, easily manage folders, and more. Plus, it’s
						cost-effective.
					</p>
				</div>
				<div className="professional_image_right-image">
					<img src={Professional_img1} alt="Professional Email" />
				</div>
			</div>

			{/* Second section */}
			<div className="professional_image_section reverse">
				<div className="professional_image_left-image">
					<img
						src={Professional_img2}
						alt="professional_image_Domain-based Email"
					/>
				</div>
				<div className="professional_image_right-content">
					<h2>Domain-based email builds trust.</h2>
					<p>
						Customers are 9x more likely to choose a business with a
						professional email address, and a domain-based email account
						promotes your company with every message. You can even create
						additional email addresses — like sales@ or info@ — that help serve
						customers better.
					</p>
					<button className="professional_image_pricing-button">
						See Plans{" "}
						<FontAwesomeIcon
							icon={faArrowRight}
							className="professional_image_arrow-icon"
						/>
					</button>
				</div>
			</div>

			{/* Third section */}
			<div className="professional_image_section">
				<div className="professional_image_left-content">
					<h2>Sync your info, wherever you are.</h2>
					<p>
						Professional Email works with Outlook, Apple Mail and other top
						programs to keep all your devices — from your laptop to your
						smartphone and tablet — up to date and in sync. Your latest emails,
						contacts, and appointments are at your fingertips, wherever you are.
					</p>
					<button className="professional_image_pricing-button">
						See Plans{" "}
						<FontAwesomeIcon
							icon={faArrowRight}
							className="professional_image_arrow-icon"
						/>
					</button>
				</div>
				<div className="professional_image_right-image">
					<img src={Professional_img3} alt="Sync Info" />
				</div>
			</div>

			{/* Fourth section */}
			<div className="professional_image_section reverse">
				<div className="professional_image_left-image">
					<img src={Professional_img4} alt="Shared Calendar" />
				</div>
				<div className="professional_image_right-content">
					<h2>Stay connected with a shared calendar.</h2>
					<p>
						Schedule appointments, transfer events from other calendar apps,
						send invites and get reminders on all your devices so you’re always
						in the loop.
					</p>
					<button className="professional_image_pricing-button">
						See Plans{" "}
						<FontAwesomeIcon
							icon={faArrowRight}
							className="professional_image_arrow-icon"
						/>
					</button>
				</div>
			</div>

			{/* Fifth section */}
			<div className="professional_image_section">
				<div className="professional_image_left-content">
					<h2>Keep more of what’s important.</h2>
					<p>
						Like any growing business, you get a lot of emails. Rest assureds
						that when you create a business email with us you’ll have ample
						space so all your emails are available, as well as your contacts and
						calendars.
					</p>
					<button className="professional_image_pricing-button">
						See Plans{" "}
						<FontAwesomeIcon
							icon={faArrowRight}
							className="professional_image_arrow-icon"
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProfessionalEmail;
