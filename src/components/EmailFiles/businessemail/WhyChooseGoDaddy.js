import React from "react";
import "../../../assets/style/emailfiles/bussinessemail/businesswhychoosegodaddy.css"; // Import the CSS file

const WhyChooseGoDaddy = () => {
	return (
		<div className="godaddy-container">
			{/* Header */}
			<h1 className="godday-container-header">
				Why choose GoDaddy for professional email?
			</h1>

			{/* Columns */}
			<div className="columns">
				{/* First column */}
				<div className="column">
					<h2>Customer confidence</h2>
					<p>
						Remember, customers are 9x more likely to choose your business if
						your email matches your domain name. When they see
						name@yourbusinessname.com in their inbox, it inspires confidence
						that you’re serious.
					</p>
				</div>

				{/* Second column */}
				<div className="column">
					<h2>Award-winning support</h2>
					<p>
						Our knowledgeable guides are here to help you with any questions,
						whether you’re a prospective customer with a small business or
						you’ve been working with us for years.
					</p>
				</div>

				{/* Third column */}
				<div className="column">
					<h2>World-class security</h2>
					<p>
						We’ll help you and your customers stay safe with industry-leading
						spam and virus filters and best-in-class security. We block over 300
						million unwanted, potentially dangerous emails every day.
					</p>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseGoDaddy;
