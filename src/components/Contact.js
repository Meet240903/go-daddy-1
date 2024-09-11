import React from "react";
import "../assets/style/contact.css"; // Add this for custom styles
import contact from "../assets/images/godaddy_contact.jpg"; // Add this for custom images
const Contact = () => {
	return (
		<div className="contact-container">
			<div className="contact-image-section">
				<img src={contact} alt="GoDaddy Guides" className="contact-image" />
				<div className="contact-info">
					<h2>GoDaddy Guides</h2>
					<p>We're here to help 24/7</p>
					<p>
						Every guide is trained and excited to work with you, whether you
						need help with a password reset or you're looking for a team to
						build your complete web presence.
					</p>
				</div>
			</div>

			<div className="contact-box">
				<div className="contact-column">
					<h3>Call Us</h3>
					<p>Contact our award-winning support team</p>
					<p>040-67607600</p>
					<p>Everyday 9:00 am - 7:00 pm.</p>
					<p>
						<a href="#">Global Directory</a>
					</p>
				</div>
				<hr />
				<div className="contact-column">
					<h3>Chat Now</h3>
					<p>Chat for quick help on product issues, your account, and more.</p>
					<button className="chat-button">Start Chatting</button>
					<p>WhatsApp</p>
					<p>Hours: 24x7</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
