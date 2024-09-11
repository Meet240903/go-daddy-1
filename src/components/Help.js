import React from "react";
import "../assets/style/help.css"; // Custom styles
import help from "../assets/images/help1.jpg";
import {
	MdAccountCircle,
	MdDomain,
	MdEmail,
	MdSecurity,
	MdBrush,
} from "react-icons/md"; // Material Icons
import { FaServer, FaWordpress } from "react-icons/fa"; // FontAwesome icons from React Icons

const Contact = () => {
	return (
		<>
			{/* Help Contact Section */}
			<div className="help-contact-container">
				<div className="help-contact-image-section">
					<img src={help} alt="GoDaddy Guides" className="help-contact-image" />
					<div className="help-contact-info">
						<h2>GoDaddy Guides</h2>
						<span>Help Center</span>
						<p>
							We're here with the help and advice you need to bring your idea to
							life. When you're ready to get online, we're prepped, trained, and
							ready to guide you from start to success.
						</p>
						<input
							type="text"
							placeholder="What can we help you with?"
							className="help-search-help"
						/>
						<button className="help-search-button">Search</button>
					</div>
				</div>
			</div>

			{/* Icon Section */}
			<div className="help-container">
				<div className="icon-grid">
					<div className="icon-card">
						<MdAccountCircle className="icon" />
						<p>Account Management</p>
					</div>
					<div className="icon-card">
						<MdDomain className="icon" />
						<p>Domains</p>
					</div>
					<div className="icon-card">
						<MdEmail className="icon" />
						<p>Microsoft 365 from GoDaddy</p>
					</div>
					<div className="icon-card">
						<FaServer className="icon" />
						<p>Websites + Marketing</p>
					</div>
					<div className="icon-card">
						<MdSecurity className="icon" />
						<p>SSL Certificates</p>
					</div>
					<div className="icon-card">
						<FaServer className="icon" />
						<p>Linux Hosting (cPanel)</p>
					</div>
					<div className="icon-card">
						<FaWordpress className="icon" />
						<p>Managed WordPress</p>
					</div>
					<div className="icon-card">
						<MdBrush className="icon" />
						<p>GoDaddy Studio</p>
					</div>
				</div>

				{/* Online Marketing Section */}
				<div className="section-container-main">
					<div className="section-container">
						<div className="section">
							<h4>Online Marketing</h4>
							<a href="#" className="link">
								Digital Marketing
							</a>
							<a href="#" className="link">
								Search Engine Visibility
							</a>
						</div>
						<div className="section">
							<h4>Productivity</h4>
							<a href="#" className="link">
								Professional Email
							</a>
						</div>
						<div className="section">
							<h4>Websites & Security</h4>
							<a href="#" className="link">
								Website Security and Backups
							</a>
						</div>
						<div className="section">
							<h4>Hosting & Servers</h4>
							<a href="#" className="link">
								Windows Hosting (Plesk)
							</a>
							<a href="#" className="link">
								Gen 4 VPS & Dedicated Servers
							</a>
							<a href="#" className="link">
								WordPress
							</a>
							<a href="#" className="link">
								Managed WordPress Ecommerce
							</a>
						</div>
						{/* Additional sections can go here */}

						<div className="section">
							<h4>Partner Programs</h4>
							<a href="#" className="link">
								API Reseller
							</a>
							<a href="#" className="link">
								Basic & Pro Reseller
							</a>
							<a href="#" className="link">
								The Hub by GoDaddy Pro
							</a>
							<a href="#" className="link">
								GoDaddy Pro
							</a>
						</div>
						<div className="section">
							<h4>Domain Aftermarket</h4>
							<a href="#" className="link">
								GoDaddy Auctions®
							</a>
							<a href="#" className="link">
								List for Sale
							</a>
							<a href="#" className="link">
								Domain Broker Service
							</a>
							<a href="#" className="link">
								CashParking®
							</a>
						</div>
						<div className="section">
							<h4>Legacy</h4>
							<a href="#" className="link">
								GoDaddy Email Marketing
							</a>
							<a href="#" className="link">
								Premium Online Store
							</a>
							<a href="#" className="link">
								Web & Classic Hosting
							</a>
							<a href="#" className="link">
								Website Builder 7
							</a>
						</div>

						{/* Additional sections can go here */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
