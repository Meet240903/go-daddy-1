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
import { Link } from "react-router-dom";
// Icons for up/down arrows

const Header = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [isNavOpen, setIsNavOpen] = useState(false); // State to manage the nav visibility
	const [isDomainSubmenuOpen, setIsDomainSubmenuOpen] = useState(false); // State to manage the submenu visibility
	const [iswebsiteHostingSubmenuOpen, setIswebsiteHostingDomainSubmenuOpen] =
		useState(false); // State to manage the submenu visibility
	const [isSecuritySubmenuOpen, setIsSecuritySubmenuOpen] = useState(false); // State to manage the submenu visibility
	const [isMarketingSubmenuOpen, setIsMarketingSubmenuOpen] = useState(false); // State to manage the submenu visibility
	const [isSigninSubmenuOpen, setIsSigninSubmenuOpen] = useState(false);
	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};
	const toggleContent = () => {
		setIsExpanded(!isExpanded);
	};
	return (
		<header className="header">
			<div className="logo">
				<Link to="/">
					<img src={logo} alt="GoDaddy Logo" className="logo-image" />
				</Link>
			</div>
			<button className="nav-toggle" onClick={toggleNav}>
				{isNavOpen ? "✖" : "☰"}
			</button>
			<div className={`nav-container ${isNavOpen ? "open" : ""}`}>
				<nav className="nav">
					<ul className="nav-list">
						<li
							className="nav-item"
							onClick={() => {
								setIsDomainSubmenuOpen(!isDomainSubmenuOpen);
								setIswebsiteHostingDomainSubmenuOpen(false);
								setIsSecuritySubmenuOpen(false);
								setIsMarketingSubmenuOpen(false);
								setIsSigninSubmenuOpen(false);
							}}
						>
							Domains{" "}
							<FontAwesomeIcon icon={faChevronUp} className="submenu-toggle" />
						</li>
						{isDomainSubmenuOpen && (
							<div className="domain-submenu">
								<div className="submenu-content">
									<div className="submenu-col">
										<FadeComponent duration={1000} delay={0} direction={"left"}>
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
										</FadeComponent>
									</div>
									<div className="submenu-col">
										<FadeComponent duration={1000} delay={0} direction={"left"}>
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
										</FadeComponent>
									</div>
									<div className="submenu-col">
										<FadeComponent duration={1000} delay={0} direction={"left"}>
											<h3>Domain Tools and Services</h3>
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
										</FadeComponent>
									</div>
								</div>
								<div className="submenu-image">
									<FadeComponent duration={1000} delay={0} direction={"left"}>
										<img src={domain_img} alt="Domain Image" />
									</FadeComponent>
									<FadeComponent duration={1000} delay={0} direction={"left"}>
										<a href="#">Register Your Domain Now</a>
									</FadeComponent>
								</div>
							</div>
						)}
						<li
							className="nav-item"
							onClick={() => {
								setIswebsiteHostingDomainSubmenuOpen(
									!iswebsiteHostingSubmenuOpen
								);
								setIsDomainSubmenuOpen(false);
								setIsSecuritySubmenuOpen(false);
								setIsMarketingSubmenuOpen(false);
								setIsSigninSubmenuOpen(false);
							}}
						>
							Website & Hosting{" "}
							<FontAwesomeIcon icon={faChevronUp} className="submenu-toggle" />
							{iswebsiteHostingSubmenuOpen && (
								<div className="website-hosting-submenu">
									<FadeComponent duration={1000} delay={0} direction={"left"}>
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
												<h3 style={{ marginTop: "2rem" }}>Hosting</h3>
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
												<h3>GoDaddy Pro</h3>
												<div className="submenu-item">
													<FontAwesomeIcon
														icon={faGlobe}
														className="submenu-icon"
													/>
													<h4>Tools for Web Professionals</h4>
												</div>
											</div>
										</div>
									</FadeComponent>
									<FadeComponent duration={1000} delay={0} direction={"left"}>
										<div className="submenu-image">
											<img src={web_hosting} alt="Domain Image" />
											<a href="#">Sell Online With WordPress Ecommerce</a>
										</div>
									</FadeComponent>
								</div>
							)}
						</li>
						<Link to="/email" className="router-link">
							<li className="nav-item">Email</li>
						</Link>
						<li
							className="nav-item"
							onClick={() => {
								setIsSecuritySubmenuOpen(!isSecuritySubmenuOpen);
								setIsDomainSubmenuOpen(false);
								setIswebsiteHostingDomainSubmenuOpen(false);
								setIsMarketingSubmenuOpen(false);
							}}
						>
							Security{" "}
							<FontAwesomeIcon icon={faChevronUp} className="submenu-toggle" />
							{isSecuritySubmenuOpen && (
								<div className="security-submenu">
									<FadeComponent duration={1000} delay={0} direction={"left"}>
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
									</FadeComponent>
									<FadeComponent duration={1000} delay={0} direction={"left"}>
										<div className="submenu-image">
											<img src={security} alt="Domain Image" />
											<a href="#">
												Sell Online With WordPress Ecommerce Hosting
											</a>
										</div>
									</FadeComponent>
								</div>
							)}
						</li>

						<li
							className="nav-item"
							onClick={() => {
								setIsMarketingSubmenuOpen(!isMarketingSubmenuOpen);
								setIsSecuritySubmenuOpen(false);
								setIsDomainSubmenuOpen(false);
								setIswebsiteHostingDomainSubmenuOpen(false);
								setIsSigninSubmenuOpen(false);
							}}
						>
							Marketing{" "}
							<FontAwesomeIcon icon={faChevronUp} className="submenu-toggle" />
							{isMarketingSubmenuOpen && (
								<div className="marketing-submenu">
									<FadeComponent duration={1000} delay={0} direction={"left"}>
										<div className="submenu-content">
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
									</FadeComponent>
									<FadeComponent duration={1000} delay={0} direction={"left"}>
										<div className="submenu-image">
											<img src={web_hosting} alt="Domain Image" />
											<a href="#">
												Sell Online With WordPress Ecommerce Hosting
											</a>
										</div>
									</FadeComponent>
								</div>
							)}
						</li>
						<Link to="/pricing" className="router-link">
							<li className="nav-item">Pricing</li>
						</Link>
					</ul>
				</nav>{" "}
				<div className="header-right">
					<Link to="/contact" className="router-link">
						<span className="header-link">Contact Us</span>
					</Link>
					<Link to="/help" className="router-link">
						<span className="header-link">Help</span>
					</Link>
					<Link to="/signin" className="router-link">
						<span className="header-link">Sign In</span>
					</Link>
					<span className="cart-icon">🛒</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
