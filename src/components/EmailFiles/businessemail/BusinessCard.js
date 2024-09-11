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
			}}
		>
			{/* Card 1 */}
			<div className="email-plan-card">
				<h2>Individual</h2>
				<p>
					Domain-based email that helps build your brand and shows the world you
					mean business.
				</p>
				<p className="save-discount">Save 42%</p>
				<span className="old-price">₹ 59.00</span>
				<p className="pricing">
					{" "}
					<span className="new-price">₹ 34.00</span> per user/mo
				</p>
				<p>With a 1-yr term. You pay ₹ 408.00 today. Renews at ₹ 708.00</p>
				<button className="add-to-cart">Add to Cart</button>

				<p>
					<FontAwesomeIcon
						icon={faEnvelope}
						size="1x"
						style={{ marginRight: "10px" }}
					/>
					{"     "}
					10 GB storage for email, contacts, and calendars
				</p>
				<p>
					<FontAwesomeIcon
						icon={faGlobe}
						size="1x"
						style={{ marginRight: "10px" }}
					/>
					{"     "}
					Use your domain name for your email address, like you@yourdomain.com
				</p>
				<div className="microsoft-icons">
					<i className="fas fa-file-word fa-2x"></i>
					<i className="fas fa-file-excel fa-2x"></i>
					<i className="fas fa-file-powerpoint fa-2x"></i>
					<i className="fab fa-microsoft fa-2x"></i> {/* Microsoft */}
				</div>
			</div>

			{/* Card 2 */}
			<div className="email-plan-card">
				<h2>Team</h2>
				<p>Great for collaboration with everyone on your team.</p>
				<p className="save-discount">Save 25%</p>{" "}
				<span className="old-price">₹ 119.00</span>{" "}
				<p className="pricing">
					<span className="new-price">₹ 89.00</span> per user/mo
				</p>
				<p>With a 1-yr term. You pay ₹ 1,068.00 today. Renews at ₹ 1,428.00</p>
				<button className="add-to-cart">Add to Cart</button>
				<p>
					{" "}
					<FontAwesomeIcon
						icon={faEnvelope}
						size="1x"
						style={{ marginRight: "10px" }}
					/>
					{"     "}
					30 GB storage for email, contacts, and calendars{"      "}
				</p>
				<p>
					<FontAwesomeIcon
						icon={faAddressBook}
						size="1x"
						style={{ marginRight: "10px" }}
					/>
					{"      "}
					Share calendar and contacts with your team
				</p>
				<p>
					{" "}
					<FontAwesomeIcon
						icon={faUser}
						size="1x"
						style={{ marginRight: "10px" }}
					/>
					Assign tasks to your team members
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
