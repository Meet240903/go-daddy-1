import React from "react";
import "../../../assets/style/emailfiles/emailoptionpages/emailcenter.css"; // Add this CSS file for styling

const Emailcenter = () => {
	return (
		<div className="email-center-section">
			<h1>For every business, a plan for success.</h1>
			<p>
				Build trust with domain-based email like you@yourdomain.com. You can
				choose a standard email plan or upgrade to a Microsoft 365 plan to get
				apps like Word, Excel, and Teams, plus up to 50 GB of email storage.
			</p>
			<div className="button-container">
				<button className="email-button">
					Professional Email <span className="arrow-icon">→</span>
				</button>
				<button className="email-button">
					Email + Microsoft 365 <span className="arrow-icon">→</span>
				</button>
			</div>
		</div>
	);
};

export default Emailcenter;
