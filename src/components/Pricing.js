import React, { useState } from "react";
import "../assets/style/pricing.css"; // Import custom CSS file for styling
import busines_wordpress from "../assets/images/busines_wordpress_left.webp";
import busines_wordpress_email from "../assets/images//busines_recomanded_right_two.jpeg";
import business_center_email from "../assets/images/bussiness_center_img1.webp";
import hosting from "../assets/images/business_top.webp";
const PricingPage = () => {
	const [selectedCategory, setSelectedCategory] = useState("Domains");

	const categories = [
		{ name: "Domains", icon: "🌐" },
		{ name: "Websites", icon: "💻" },
		{ name: "Email", icon: "✉️" },
		{ name: "Hosting", icon: "🖥️" },
		{ name: "OnlineStore", icon: "🛒" },
		{ name: "WebSecurity", icon: "🔒" },
	];

	const filters = [
		"Buy Domains",
		"Best Value",
		"Transfer Domains",
		"Domain Investing",
		"Sell Domains",
		"Dedicated Support",
		"Domain Lookup",
	];

	// Cards for each category
	const cardData = {
		Domains: [
			{
				title: "Get Your Domain",
				subtitle: "Buy Domains",
				description:
					"Best for getting the perfect domain, plus free domain privacy forever.",
				details:
					"Best for getting the perfect domain, plus free domain privacy forever. GoDaddy is the world’s largest registrar, and 20+ million customers trust us with 84+ million domains. Prices starting from ₹ 1.00*/1st yr for .com, with a 3-year purchase required.",
				price: "₹ 1.00* /1st yr",
				img: null,
				button: "domain",
			},
			{
				// title: "Transfer Domains",
				// subtitle: "Best Value",
				// description: "Easily transfer your existing domain to GoDaddy.",
				// price: "₹ 199.00* /1st yr",
				img: busines_wordpress,
				button: "purchase",
			},
			{
				title: "Sell Your Domain",
				subtitle: "Domain Investing",
				description: "Sell your domains and earn profits easily.",
				details:
					"Sell your domains and earn profits easily. List your domain on the world’s largest domain marketplace, and get the exposure you need to sell your domain. Prices starting from ₹ 299.00* /1st yr.",
				price: "₹ 299.00* /1st yr",
				img: null,
				button: "transfer",
			},
			{
				title: "Domain Auctions",
				subtitle: "Sell Domains",
				description: "Sell your domains and earn profits easily.",
				details:
					"Best for buying and selling domains on the open market. GoDaddy charges less than other domain auction houses. Place bids and stay up to date on your auctions with our domain buying and monitoring tools.",
				price: "₹ 419.33/yr",
				img: null,
				button: "Learn More",
			},
			{
				title: "Sell Your Domain",
				subtitle: "Domain Broker Service",
				description: "Sell your domains and earn profits easily.",
				details:
					"Best for getting the perfect domain even if it's not available. Our expert domain brokers negotiate to get you the lowest price on the domain you want to propel your brand forward.**Explore Domain Broker Service",
				price: "₹ 9,959.00	per domain",
				img: null,
				button: "Learn More",
			},
			{
				title: "Find a Domain Owner (WHOIS)",
				subtitle: "Domain Lookup",
				description:
					"Best for finding information on domain registration and availability, as well as owner, administrator and contact information on the GoDaddy WHOIS.",
				details: null,
				price: null,
				img: null,
				button: "search domain",
			},
		],
		Websites: [
			{
				title: "GoDaddy Website Builder",
				subtitle: "Fast Build",
				description:
					"Fast BuildOnline QuicklyFlexibilityBest for getting online swiftly with a beautiful, secure website that includes design flexibility, marketing tools and online paymentsLearn more about Website Builder",
				price: "₹ 249.00/mo",
				img: null,
				button: "See Plans",
			},
			{
				title: "Managed WordPress",
				subtitle: "Best Value",
				description: "Get reliable hosting for your website with 24/7 support.",
				price: "₹ 149.00* /mo",
				img: busines_wordpress_email,
				button: "See Plans",
			},
			{
				title: "Managed WordPress",
				subtitle: "Fully Managed",
				description:
					"Best for faster load times to handle more visitors, plus 40 GB SSD storage, access to 59,000+ plugins, an ecommerce-ready site, 3 free Microsoft mailboxes, 1-click restore and more.",
				price: "₹ 279.00/mo",
				img: null,
				button: "Learn More",
			},
		],
		Email: [
			{
				title: "Microsoft 365 Email Essentials",
				subtitle: "Email Matches Domain",
				description:
					"Best for building trust — with an email address that matches your domain. Plus, get 10 GB email storage, world-class data security, and spam filtering.",
				price: "₹ 99.00 per user/mo",
				img: null,
				button: "See Plans",
			},
			{
				title: null,
				subtitle: null,
				description: null,
				price: null,
				img: business_center_email,
				button: "See Plans",
			},
			{
				title: "Managed WordPress",
				subtitle: "Best Value",
				description: "Get reliable hosting for your website with 24/7 support.",
				price: "₹ 149.00* /mo",
				img: null,
				button: "See Plans",
			},
			{
				title: "Professional Email",
				subtitle: "Email Matches Domain",
				description:
					"Best for building customer trust — with an email address that matches your domain. Plus, get 10 GB email storage, world-class data security, and spam filtering.",
				price: "₹ 34.00 per user/mo",
				img: null,
				button: "see plans",
			},
		],
		Hosting: [
			{
				title: "Managed WordPress",
				subtitle: "Fully Managed",
				description:
					"Best for faster load times to handle more visitors, plus 40 GB SSD storage, access to 59,000+ plugins, an ecommerce-ready site, 3 free Microsoft mailboxes, 1-click restore and more.",
				price: "₹ 279.00/mo",
				img: null,
				button: "See Plans",
			},
			{
				title: "Web Hosting",
				subtitle: "Cpanel/Linux",
				description:
					"GBest for cost-effectiveness and page performance. Get additional websites, 25 GB+ of storage and unlimited SSL to host multiple basic information sites, or a simple portfolio site with some photos.",
				price: "₹ 79.00/mo",
				img: null,
				button: "See Plans",
			},
			{
				title: null,
				subtitle: null,
				description: null,
				price: null,
				img: hosting,
				button: "See Plans",
			},
		],
		OnlineStore: [
			{
				title: "GoDaddy Website Builder: Ecommerce",
				subtitle: "Online Quickly",
				description:
					"Best for easily building a powerful online store to sell products or services, plus take payments with the lowest fees compared to other leading providers.* Choose from over 100 beautiful templates, sell on the top marketplaces in your region, and manage everything from one dashboard.",
				price: "₹ 999.00/mo",
				img: null,
				button: "See Plans",
			},
			{
				title: "Managed WordPress Ecommerce Hosting",
				subtitle: "Sell Online",
				description:
					"Best for selling fast — everything you need to build your ideal ecommerce site, with premium WooCommerce extensions that help you easily process payments, customize your cart and checkout, and merchandise to showcase your products.",
				price: "₹ 1,499.00/mo",
				img: null,
				button: "See Plans",
			},
		],
		WebSecurity: [
			{
				title: "Managed WordPress",
				subtitle: "Best Value",
				description: "Get reliable hosting for your website with 24/7 support.",
				price: "₹ 149.00* /mo",
				img: busines_wordpress_email,
				button: "See Plans",
			},
		],
	};

	// Function to handle category change
	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
	};

	return (
		<div className="pricing-page-container">
			{/* Left Sidebar */}
			<div className="sidebar">
				<h1>Explore GoDaddy plans and pricing.</h1>
				<h2>Categories</h2>
				<ul className="categories-list">
					{categories.map((cat) => (
						<li
							key={cat.name}
							className={`category-item ${
								selectedCategory === cat.name ? "active" : ""
							}`}
							onClick={() => handleCategoryChange(cat.name)}
						>
							{cat.icon} {cat.name}
						</li>
					))}
				</ul>

				<h2>Filters/Features</h2>
				<div className="filters-list">
					{filters.map((filter, index) => (
						<button key={index} className="filter-btn">
							{filter}
						</button>
					))}
				</div>
			</div>

			{/* Main Content (Right Side) */}
			<div className="main-content">
				<div className="cards-container">
					{cardData[selectedCategory]?.map((card, index) => (
						<div key={index} className="card">
							{card.img && (
								<img src={card.img} alt={card.title} className="card-img" />
							)}
							<h2>{card.title}</h2>
							<h3>{card.subtitle}</h3>
							<p>{card.description}</p>
							<p>{card.details}</p>
							<span className="price">{card.price}</span>
							<button className="card-btn">{card.button}</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PricingPage;
