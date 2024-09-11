import React, { useState } from "react";
import "../../assets/style/homefiles/homewebsite_hosting.css";
import img1 from "../../assets/images/website_hosting_1.webp";
import img2 from "../../assets/images/website_hosting_2.png";
import img3 from "../../assets/images/website_hosting_3.png";
const HomeHosting_marketing = () => {
	const [hoveredColumn, setHoveredColumn] = useState(1);

	return (
		<div className="home-hosting-marketing">
			<h1>Grow your brand with Websites + Marketing</h1>

			{/* Main image section */}
			<div className="main-image-section">
				<img
					src={hoveredColumn === 1 ? img1 : hoveredColumn === 2 ? img2 : img3}
					alt="Marketing"
					className="main-image"
				/>
			</div>

			{/* Columns below the image */}
			<div className="columns-section">
				{/* Column 1 */}
				<div
					className="column"
					onMouseEnter={() => setHoveredColumn(1)}
					onMouseLeave={() => setHoveredColumn(null)}
				>
					<h2>Get online fast. No design skills needed.</h2>
					<p>
						Build your site in minutes. Choose from 100s of beautiful,
						mobile-friendly templates with our Website Builder, many with
						ecommerce features.
					</p>
				</div>

				{/* Column 2 */}
				<div
					className="column"
					onMouseEnter={() => setHoveredColumn(2)}
					onMouseLeave={() => setHoveredColumn(null)}
				>
					<h2>Customize easily with intuitive tools.</h2>
					<p>
						Tailor your website's design with easy-to-use editing tools and
						drag-and-drop functionality.
					</p>
				</div>

				{/* Column 3 */}
				<div
					className="column"
					onMouseEnter={() => setHoveredColumn(3)}
					onMouseLeave={() => setHoveredColumn(null)}
				>
					<h2>Boost your online presence with marketing.</h2>
					<p>
						Utilize integrated marketing tools to drive traffic and grow your
						audience.
					</p>
				</div>
			</div>
			<button className="try-domain-button">
				Start For Free <span className="arrow-icon">→</span>
			</button>
		</div>
	);
};

export default HomeHosting_marketing;
