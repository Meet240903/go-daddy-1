import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlus,
	faSyncAlt,
	faCalendarAlt,
	faEnvelopeOpen,
	faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../../../assets/style/emailfiles/emailoptionpages/emailfooter.css"; // Import the CSS file

const Plans = () => {
	return (
		<div className="plans-container">
			{/* Header Section */}
			<div className="plans-header">
				<FontAwesomeIcon icon={faPlus} size="2x" className="plus-icon" />
				<h2>All plans include:</h2>
			</div>

			{/* Columns Section */}
			<div className="plans-features">
				{/* Column 1 */}
				<div className="feature">
					<FontAwesomeIcon icon={faSyncAlt} size="2x" className="icon" />
					<h3>Sync across devices</h3>
					<p>Instant access to your emails, contacts, and appointments.</p>
				</div>

				{/* Column 2 */}
				<div className="feature">
					<FontAwesomeIcon icon={faCalendarAlt} size="2x" className="icon" />
					<h3>Online calendars</h3>
					<p>Manage your calendar and quickly schedule meetings.</p>
				</div>

				{/* Column 3 */}
				<div className="feature">
					<FontAwesomeIcon icon={faEnvelopeOpen} size="2x" className="icon" />
					<h3>Works with any email app</h3>
					<p>Compatible with the email app of your choice.</p>
				</div>

				{/* Column 4 */}
				<div className="feature">
					<FontAwesomeIcon icon={faMobileAlt} size="2x" className="icon" />
					<h3>Mobile-friendly webmail</h3>
					<p>Easily access your email from anywhere.</p>
				</div>
			</div>
		</div>
	);
};

export default Plans;
