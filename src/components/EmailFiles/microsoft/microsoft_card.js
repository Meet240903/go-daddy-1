import React from "react";
import "../../../assets/style/emailfiles/emailoptionpages/emailcard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAddressBook,
	faEnvelope,
	faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";

const EmailPlans = () => {
	return (
		<div
			className="email-plans-container"
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				marginTop: "100px",
				marginBottom: "80px",
			}}
		>
			{/* Card 3 */}
			<div className="email-plan-card">
				<h2>Microsoft 365 Email Essentials</h2>
				<p>
					Domain-based email that helps build your brand and shows the world you
					mean business.
				</p>
				<p className="save-discount">Save (71%)</p>
				<p className="pricing">
					<span className="new-price">₹ 99.00</span>
				</p>
				<p>
					per user/mo With a 1-yr term. You pay ₹ 1,188.00 today Renews at ₹
					4,188.00
				</p>
				<button className="add-to-cart">Add to Cart</button>
				<p>
					<FontAwesomeIcon
						icon={faEnvelope}
						size="1x"
						style={{ marginRight: "10px" }}
					/>
					{"     "}10 GB email storage (approx 50,000 emails)
				</p>
				<p>
					<FontAwesomeIcon
						icon={faGlobe}
						size="1x"
						style={{ marginRight: "10px" }}
					/>{" "}
					Use your domain name for your email address, like you@yourdomain.com
				</p>
				{/* Microsoft icons using Font Awesome */}
				<div className="microsoft-icons">
					<i className="fas fa-file-word fa-2x"></i>
					<i className="fas fa-file-excel fa-2x"></i>
					<i className="fas fa-file-powerpoint fa-2x"></i>
					<i className="fab fa-microsoft fa-2x"></i> {/* Microsoft */}
				</div>
			</div>

			{/* Card 4 (same as Card 3) */}
			<div
				className="email-plan-card"
				style={{
					borderTop: "30px solid #0ce1f0",
					borderRight: "3px solid #0ce1f0",
					borderBottom: "3px solid #0ce1f0",
					borderLeft: "3px solid #0ce1f0",
					borderRadius: "8px",
					position: "relative",
					padding: "20px",
				}}
			>
				{/* Recommended content - acts as the ::before pseudo-element */}
				<div
					style={{
						position: "absolute",
						top: "-30px",
						left: "50%",
						transform: "translateX(-50%)",

						padding: "5px 10px",
						fontWeight: "bold",
						color: "black",
						borderRadius: "5px",
					}}
				>
					Recommended
				</div>
				<h2>Microsoft 365 Online Business Essentials</h2>
				<p>
					Pair Professional Email with trusted Microsoft 365 web apps like Word,
					Excel, and PowerPoint.
				</p>
				<p className="save-discount">Save 67%</p>
				<p className="pricing">
					<span className="new-price">₹ 129.00</span>
				</p>
				<p>
					per user/mo With a 1-yr term. You pay ₹ 1,548.00 today Renews at ₹
					4,788.00
				</p>
				<button className="add-to-cart">Add to Cart</button>
				<p>
					{" "}
					<FontAwesomeIcon
						icon={faEnvelope}
						size="1x"
						style={{ marginRight: "10px" }}
					/>
					{"     "}Microsoft 365 Online: get popular web apps like Word, Excel,
					and PowerPoint
				</p>
				<p>
					{" "}
					<FontAwesomeIcon
						icon={faMicrosoft}
						size="1x"
						style={{ marginRight: "10px" }}
					/>
					Meet, chat and collaborate with your team, customers, or suppliers
					with Microsoft Teams
				</p>
				<p>
					{" "}
					<FontAwesomeIcon
						icon={faUser}
						size="1x"
						style={{ marginRight: "10px" }}
					/>
					50 GB email storage (approx 2,50,000 emails)
				</p>

				<div className="microsoft-icons">
					{/* OneDrive (using cloud icon as a placeholder) */}
					<i className="fas fa-network-wired fa-2x"></i>{" "}
					{/* SharePoint (using network icon) */}
					<i className="fas fa-comments fa-2x"></i>{" "}
					{/* Microsoft Teams (using comments icon as a placeholder) */}
					<i className="fas fa-users fa-2x"></i> {/* Teams or User groups */}
				</div>
			</div>
			<div className="email-plan-card">
				<h2>Microsoft 365 Business Professional</h2>
				<p>
					Do more anywhere with Office apps on 5 devices, plus get web apps and
					collaborative tools.
				</p>
				<p className="save-discount">Save (25%)</p>
				<p className="pricing">
					<span className="new-price">₹ 749.00</span>
				</p>
				<p>
					per user/mo With a 1-yr term. You pay ₹ 8,988.00 today Renews at ₹
					11,988.00
				</p>
				<button className="add-to-cart">Add to Cart</button>
				<p>
					{" "}
					<FontAwesomeIcon
						icon={faEnvelope}
						size="1x"
						style={{ marginRight: "10px" }}
					/>
					{"     "}Microsoft 365 Desktop: Download Office apps like Word, Excel,
					and PowerPoint to 5 devices
				</p>

				<p>
					{" "}
					<FontAwesomeIcon
						icon={faUser}
						size="1x"
						style={{ marginRight: "10px" }}
					/>
					50 GB email storage (approx 2,50,000 emails)
				</p>

				<div className="microsoft-icons">
					{/* OneDrive (using cloud icon as a placeholder) */}
					<i className="fas fa-network-wired fa-2x"></i>{" "}
					{/* SharePoint (using network icon) */}
					<i className="fas fa-comments fa-2x"></i>{" "}
					{/* Microsoft Teams (using comments icon as a placeholder) */}
					<i className="fas fa-users fa-2x"></i> {/* Teams or User groups */}
				</div>
			</div>
		</div>
	);
};

export default EmailPlans;
