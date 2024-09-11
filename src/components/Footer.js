import React from "react";
import "../assets/style/footer.css";
import logo from "../assets/images/godaddy-logo.svg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-top">
				<div className="footer-column">
					<h4>About GoDaddy</h4>
					<ul>
						<li>About Us</li>
						<li>Annual Returns</li>
						<li>Careers</li>
						<li>Contact Us</li>
						<li>Corporate Social Responsibility</li>
						<li>GoDaddy Blog</li>
						<li>Investor Relations</li>
						<li>Legal</li>
						<li>Newsroom</li>
						<li>Trust Center</li>
					</ul>
				</div>
				<div className="footer-column">
					<h4>Support</h4>
					<ul>
						<li>Product Support</li>
						<li>Report Abuse</li>
						<li>Resources</li>
					</ul>
				</div>
				<div className="footer-column">
					<h4>Resources</h4>
					<ul>
						<li>Webmail</li>
						<li>WHOIS</li>
						<li>ICANN Confirmation</li>
						<li>Designers & Developers</li>
						<li>Redeem Code</li>
						<li>Product Catalog</li>
						<li>Customer Testimonials</li>
						<li>Business Name Generator</li>
					</ul>
				</div>
				<div className="footer-column">
					<h4>Account</h4>
					<ul>
						<li>My Products</li>
						<li>Renewals & Billing</li>
						<li>Create Account</li>
					</ul>
				</div>
				<div className="footer-column">
					<h4>Shopping</h4>
					<ul>
						<li>Buy a Domain</li>
						<li>Websites</li>
						<li>Business Email</li>
						<li>WordPress</li>
						<li>Hosting</li>
						<li>Web Security</li>
						<li>Logo Generator</li>
					</ul>
				</div>
			</div>

			<div className="footer-bottom">
				<div className="footer-socials">
					<img src={logo} alt="GoDaddy Logo" className="footer-logo" />
					<div className="social-icons">
						<FaFacebookF />
						<FaInstagram />
						<FaYoutube />
					</div>
				</div>

				<hr />

				<div className="footer-copyright">
					<p>
						Copyright © 1999 - 2024 GoDaddy Operating Company, LLC. All Rights
						Reserved. The GoDaddy word mark is a registered trademark of GoDaddy
						Operating Company, LLC in the US and other countries. The “GO” logo
						is a registered trademark of GoDaddy.com, LLC in the US.
					</p>
					<p>
						Use of this Site is subject to express terms of use. By using this
						site, you signify that you agree to be bound by these Universal
						Terms of Service.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
