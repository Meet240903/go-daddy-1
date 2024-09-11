import React, { useState } from "react";
import "../../assets/style/homefiles/homebusiness.css";
import search from "../../assets/images/bussiness_search.jfif";
import business_top from "../../assets/images/business_top.webp";
import bottom from "../../assets/images/business_bottom.jpeg";
import recomanded_left from "../../assets/images/bussiness_recomanded_left.webp";
import recomanded_rightone from "../../assets/images/business_Recomanded_right-one.webp";
import recomanded_righttwo from "../../assets/images/busines_recomanded_right_two.jpeg";
import wordpress_left from "../../assets/images/busines_wordpress_left.webp";
import wordpress_right from "../../assets/images/business_wordpress_right.webp";

const HomeBusinesSection = () => {
	// Set default active button to "domains"
	const [activeButton, setActiveButton] = useState("domains");

	// Function to render boxes based on the active button
	const renderBoxes = () => {
		if (activeButton === "domains") {
			return (
				<div className="box-container">
					<div className="box light-blue">
						<div className="text-overlay">
							<img src={search} style={{ width: "170px" }} />
							<h1>Domains</h1>
							<p>
								Get started with the perfect domain, which comes with free
								domain privacy protection forever
							</p>
							<button>Search Domain</button>
						</div>
					</div>
					<div className="box-group">
						<div className="box light-gray">
							<div className="text-overlay_1">
								<div className="text-overlay_left">
									<h3>.co for ₹ 1.00 /1st year</h3>
									<p>
										Ensure your company stand out with a .co domain. 3-year .
										Additional year(s) ₹ 3,299.00 .
									</p>
									<button>Find Your Domain</button>
								</div>
								<div className="text-overlay_right">
									<img src={business_top} style={{ width: "170px" }} />
								</div>
							</div>
						</div>
						<div className="box light-pink">
							<div className="text-overlay_1">
								<div className="text-overlay_left">
									<h3>.in ₹ 1.00/1st yr</h3>
									<p>
										Boost your local impact with our localized top-level
										domains.
									</p>
									<button>Get Started</button>
								</div>
								<div className="text-overlay_right">
									<img src={bottom} style={{ width: "170px" }} />
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		} else if (activeButton === "recommended") {
			return (
				<div className="box-container">
					<div className="box light-blue">
						<div className="text-overlay" style={{ top: 10 }}>
							<img
								src={recomanded_left}
								style={{ width: "270px", borderRadius: "10px" }}
							/>
							<h1>Websites ₹ 249.00/mo</h1>
							<p>
								Start for free and quickly design a beautiful, mobile-friendly
								site.
							</p>
							<button>Create Your Site</button>
						</div>
					</div>
					<div className="box-group">
						<div className="box light-gray">
							<div className="text-overlay_1">
								<div className="text-overlay_left">
									<h3>Web Hosting ₹ 79.00/mo</h3>
									<p>Get fast load times and 99.9% uptime guaranteed.***</p>
									<button>View Plans and Pricing</button>
								</div>
								<div className="text-overlay_right">
									<img src={recomanded_rightone} style={{ width: "170px" }} />
								</div>
							</div>
						</div>
						<div className="box light-pink">
							<div className="text-overlay_1">
								<div className="text-overlay_left">
									<h3>.in ₹ 1.00/1st yr</h3>
									<p>
										Boost your local impact with our localized top-level
										domains.
									</p>
									<button>Get Started</button>
								</div>
								<div className="text-overlay_right">
									<img src={recomanded_righttwo} style={{ width: "170px" }} />
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		} else if (activeButton === "wordpress") {
			return (
				<div className="box-container">
					<div className="box light-blue">
						<div className="text-overlay" style={{ top: 10 }}>
							<img
								src={wordpress_left}
								style={{ width: "270px", borderRadius: "10px" }}
							/>
							<h1>WordPress ₹ 279.00/mo</h1>
							<p>
								Let AI quickly build a fully-managed website that's always up to
								date, with no worries.
							</p>
							<button>Explore WordPress Plans</button>
						</div>
					</div>
					<div className="box light-pink" style={{ height: "500px" }}>
						<div className="text-overlay" style={{ top: 10 }}>
							<img
								src={wordpress_right}
								style={{ width: "270px", borderRadius: "10px" }}
							/>
							<h1>SSL Certificates ₹ 2,999.00/yr</h1>
							<p>
								Help keep sensitive data secure on your site and boost search
								ranking with an SSL Certificate.
							</p>
							<button>Secure Your Data</button>
						</div>
					</div>
				</div>
			);
		}
		return null;
	};

	return (
		<div>
			<div className="business_title">
				<h1>What's first for your business?</h1>
				<div className="business_button">
					<button
						className="business_button1"
						onClick={() => setActiveButton("domains")}
					>
						Domains
					</button>
					<button
						className="business_button2"
						onClick={() => setActiveButton("recommended")}
					>
						Recommended
					</button>
					<button
						className="business_button3"
						onClick={() => setActiveButton("wordpress")}
					>
						WordPress and Security
					</button>
				</div>
			</div>
			{renderBoxes()}
		</div>
	);
};

export default HomeBusinesSection;
