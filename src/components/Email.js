import React, { useState } from "react";
import BusinessEmail from "./EmailFiles/BusinessEmail";
import Emailoption from "./EmailFiles/Emailoption";
import Microsoft365 from "./EmailFiles/Microsoft365";

import "../assets/style/email.css"; // Create this file to style the tabs if needed

const Email = () => {
	// State to track the active tab
	const [activeTab, setActiveTab] = useState("Emailoption");

	// Function to render the appropriate component based on the active tab
	const renderComponent = () => {
		switch (activeTab) {
			case "Emailoption":
				return <Emailoption />;
			case "BusinessEmail":
				return <BusinessEmail />;
			case "Microsoft365":
				return <Microsoft365 />;
			default:
				return null;
		}
	};

	return (
		<>
			<div className="email-tabs-container">
				{/* Tabs */}
				<div className="tabs">
					<button
						className={`tab-button ${
							activeTab === "Emailoption" ? "active" : ""
						}`}
						onClick={() => setActiveTab("Emailoption")}
					>
						Email Option
					</button>
					<button
						className={`tab-button ${
							activeTab === "BusinessEmail" ? "active" : ""
						}`}
						onClick={() => setActiveTab("BusinessEmail")}
					>
						Business Email
					</button>
					<button
						className={`tab-button ${
							activeTab === "Microsoft365" ? "active" : ""
						}`}
						onClick={() => setActiveTab("Microsoft365")}
					>
						Microsoft 365
					</button>
				</div>

				{/* Component Display */}
				<div className="tab-content">{renderComponent()}</div>
			</div>
		</>
	);
};

export default Email;
