import React from "react";
import "../../assets/style/homefiles/homedomain.css";
import domainai from "../../assets/images/go-daddy-domain.jpg";
import logo from "../../assets/images/godaddy-logo.svg";
const HomeDomainAiSection = () => {
	return (
		<div className="home-domain-ai-section">
			{/* Left side image and text */}
			<div className="image-container">
				<img src={domainai} />
				<div className="text-overlay">
					<button>NEW</button>
					<h2>GoDaddy Airo™</h2>
					<h1>Put your domain into action with AI.</h1>
					<p>
						Buy a new domain and get GoDaddy Airo™, our customizable, AI-powered
						solution that can easily deliver a website, logo, and more.
					</p>
					<button className="learn-more-button">Learn More</button>
				</div>
			</div>

			{/* Right side card */}
			<div className="card-container">
				<button>NEW</button>
				<p className="card-text">AI Suggested Domains</p>
				<p className="card-description">
					Find the perfect domain and business name with AI.
				</p>
				<button className="try-domain-button">
					Try All Domain Search <span className="arrow-icon">→</span>
				</button>
			</div>
		</div>
	);
};

export default HomeDomainAiSection;
