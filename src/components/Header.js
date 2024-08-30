import React, { useState } from "react";
import "../assets/style/header.css"; // Importing the CSS file for styling
import logo from "../assets/images/godaddy-logo.svg";
import domain_img from "../assets/images/domain-img.jpeg";
import web_hosting from "../assets/images/web-hosting.jpeg";
import security from "../assets/images/security.jpeg"; // Importing the logo image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSearch,
	faGavel,
	faTools,
	faArrowRight,
	faBeer,
	faHouseDamage,
	faDollarSign,
	faHandHoldingDollar,
	faCube,
	faUser,
	faChevronUp,
	faLaptopCode,
	faStore,
	faCog,
	faServer,
	faGlobe,
	faCertificate,
	faLock,
	faBullhorn,
	faPencilRuler,
	faImages,
} from "@fortawesome/free-solid-svg-icons";
import FadeComponent from "./FadeAnimation"; // Ensure the path is correct

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false); // State to manage the nav visibility
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false); // State to manage the submenu visibility

	// Function to toggle navigation visibility
	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	// Function to toggle submenu visibility
	const toggleSubmenu = () => {
		setIsSubmenuOpen(!isSubmenuOpen);
	};

	return (
		<header className="header">
			<div className="logo">
				<img src={logo} alt="GoDaddy Logo" className="logo-image" />
			</div>
			<button className="nav-toggle" onClick={toggleNav}>
				{isNavOpen ? "✖" : "☰"}
			</button>
			<div className={`nav-container ${isNavOpen ? "open" : ""}`}>
				<nav className="nav">
					<ul className="nav-list">
						<li className="nav-item" onClick={toggleSubmenu}>
							Domains{" "}
							<FontAwesomeIcon icon={faChevronUp} className="submenu-toggle" />
							{isSubmenuOpen && (
								<FadeComponent duration={1000} delay={0} direction={"left"}>
									<div className="submenu">
										<div className="submenu-content">
											<div className="submenu-col">
												<h3>Find a Domain name</h3>
												<div className="submenu-item">
													<FontAwesomeIcon
														icon={faSearch}
														className="submenu-icon"
													/>
													<h4>Search for Domain Names</h4>
												</div>
												<div className="submenu-item">
													<FontAwesomeIcon
														icon={faBeer}
														className="submenu-icon"
													/>
													<h4>Transfer Domain Names</h4>
												</div>
												<div className="submenu-item">
													<FontAwesomeIcon
														icon={faHouseDamage}
														className="submenu-icon"
													/>
													<h4>Browse Domain Name Options</h4>
												</div>
											</div>
											<div className="submenu-col">
												<h3>Auctions for Domains</h3>
												<div className="submenu-item">
													<FontAwesomeIcon
														icon={faGavel}
														className="submenu-icon"
													/>
													<h4>Auctions for Domain Names</h4>
												</div>
												<div className="submenu-item">
													<FontAwesomeIcon
														icon={faDollarSign}
														className="submenu-icon"
													/>
													<h4>Appraise Domain Name Value</h4>
												</div>
												<div className="submenu-item">
													<FontAwesomeIcon
														icon={faHandHoldingDollar}
														className="submenu-icon"
													/>
													<h4>Investing in Domain Names</h4>
												</div>
											</div>
											<div className="submenu-col">
												<h4>Domain Tools and Services</h4>
												<div className="submenu-item">
													<FontAwesomeIcon
														icon={faTools}
														className="submenu-icon"
													/>
													<h4>Domain Tools and Services</h4>
												</div>
												<div className="submenu-item">
													<FontAwesomeIcon
														icon={faUser}
														className="submenu-icon"
													/>
													<h4>Generate Domain Names</h4>
												</div>
												<div className="submenu-item">
													<FontAwesomeIcon
														icon={faCube}
														className="submenu-icon"
													/>
													<h4>Find a Domain Owner (WHOIS)</h4>
												</div>
											</div>
										</div>
										<div className="submenu-image">
											<img src={domain_img} alt="Domain Image" />
											<a href="#">Register Your Domain Now</a>
										</div>
									</div>
								</FadeComponent>
							)}
						</li>
						<li className="nav-item" onClick={toggleSubmenu}>
							Website & Hosting{" "}
							<FontAwesomeIcon icon={faChevronUp} className="submenu-toggle" />
							{isSubmenuOpen && (
								<FadeComponent duration={1000} delay={0} direction={"left"}>
									<div className="submenu">
										<div className="submenu-content">
											<div className="submenu-col">
												<h3>Website</h3>
												<div className="submenu-item">
													<FontAwesomeIcon
														icon={faLaptopCode}
														className="submenu-icon"
													/>
													<h4>Website Builder Free Trial</h4>
												</div>
												<div className="submenu-item">
													<FontAwesomeIcon
														icon={faStore}
														className="submenu-icon"
													/>
													<h4>Online Store</h4>
												</div>
												<div className="submenu-item">
													<FontAwesomeIcon
														icon={faArrowRight}
														className="submenu-icon"
													/>
													<h4>All Website Options</h4>
												</div>
											</div>
											<div className="submenu-col">
												<h3>Hosting</h3>
												<div className="submenu-item">
													<FontAwesomeIcon
														icon={faServer}
														className="submenu-icon"
													/>
													<h4>Web Hosting</h4>
												</div>
												<div className="submenu-item">
													<FontAwesomeIcon
														icon={faServer}
														className="submenu-icon"
													/>
													<h4>WordPress Hosting</h4>
												</div>
												<div className="submenu-item">
													<FontAwesomeIcon
														icon={faServer}
														className="submenu-icon"
													/>
													<h4>VPS Hosting</h4>
												</div>
												<div className="submenu-item">
													<FontAwesomeIcon
														icon={faArrowRight}
														className="submenu-icon"
													/>
													<h4>All Hosting Options</h4>
												</div>
											</div>
											<div className="submenu-col">
												<h4>GoDaddy Pro</h4>
												<div className="submenu-item">
													<FontAwesomeIcon
														icon={faGlobe}
														className="submenu-icon"
													/>
													<h4>Tools for Web Professionals</h4>
												</div>
											</div>
										</div>
										<div className="submenu-image">
											<img src={web_hosting} alt="Domain Image" />
											<a href="#">
												Sell Online With WordPress Ecommerce Hosting
											</a>
										</div>
									</div>
								</FadeComponent>
							)}
						</li>
						<li className="nav-item">Email</li>
						<li className="nav-item" onClick={toggleSubmenu}>
							Security{" "}
							<FontAwesomeIcon icon={faChevronUp} className="submenu-toggle" />
							{isSubmenuOpen && (
								<FadeComponent duration={1000} delay={0} direction={"left"}>
									<div className="submenu" style={{ width: "1200px" }}>
										<div className="submenu-content">
											<div className="submenu-col">
												<h3>SSL Certificates</h3>
												<div className="submenu-item">
													<FontAwesomeIcon
														icon={faCertificate}
														className="submenu-icon"
													/>
													<h4>SSL Certificates</h4>
												</div>
												<div className="submenu-item">
													<FontAwesomeIcon
														icon={faCertificate}
														className="submenu-icon"
													/>
													<h4>Managed SSL Certificate</h4>
												</div>
											</div>
											<div className="submenu-col">
												<h3>Web Security</h3>
												<div className="submenu-item">
													<FontAwesomeIcon
														icon={faLock}
														className="submenu-icon"
													/>
													<h4>Website Security</h4>
												</div>
												<div div className="submenu-item">
													<FontAwesomeIcon
														icon={faArrowRight}
														className="submenu-icon"
													/>
													<h4>All Web Security Options</h4>
												</div>
											</div>
										</div>
										<div className="submenu-image">
											<img src={security} alt="Domain Image" />
											<a href="#">
												Sell Online With WordPress Ecommerce Hosting
											</a>
										</div>
									</div>
								</FadeComponent>
							)}
						</li>

						<li className="nav-item" onClick={toggleSubmenu}>
							Marketing{" "}
							<FontAwesomeIcon icon={faChevronUp} className="submenu-toggle" />
							{isSubmenuOpen && (
								<FadeComponent duration={1000} delay={0} direction={"left"}>
									<div className="submenu" style={{ width: "1200px" }}>
										<div
											className="submenu-content"
											style={{
												// width: "60vh",
												gap: 0,
												display: "flex",
											}}
										>
											<div className="submenu-col">
												<h3>Marketing Tools</h3>
												<div className="submenu-item">
													<FontAwesomeIcon
														icon={faBullhorn}
														className="submenu-icon"
													/>
													<h4>Digital Marketing Free Trial</h4>
												</div>
												<div className="submenu-item">
													<FontAwesomeIcon
														icon={faPencilRuler}
														className="submenu-icon"
													/>
													<h4>Logo Maker</h4>
												</div>
												<div className="submenu-item">
													<FontAwesomeIcon
														icon={faImages}
														className="submenu-icon"
													/>
													<h4>Content & Photo Creator</h4>
												</div>
											</div>
										</div>
										<div className="submenu-image">
											<img src={web_hosting} alt="Domain Image" />
											<a href="#">
												Sell Online With WordPress Ecommerce Hosting
											</a>
										</div>
									</div>
								</FadeComponent>
							)}
						</li>
						<li className="nav-item">Pricing</li>
					</ul>
				</nav>
				<div className="header-right">
					<span className="header-link">Contact Us</span>
					<span className="header-link">Help</span>
					<span className="header-link">Sign In</span>
					<span className="cart-icon">🛒</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
