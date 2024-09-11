import React, { useState } from "react";
import "../../../assets/style/emailfiles/bussinessemail/faq.css"; // Import CSS file

const FAQ = () => {
	// State to manage the open/closed state of each answer
	const [openIndex, setOpenIndex] = useState(null);

	// Handle the toggling of answers
	const toggleAnswer = (index) => {
		setOpenIndex(openIndex === index ? null : index); // Toggle the answer
	};

	// Questions and answers data
	const faqData = [
		{
			question: "What is included with Microsoft 365?",
			answer:
				"Microsoft 365 includes best-in-class Office apps, like Word, Excel, and Teams and more, plus intelligent cloud services, and Outlook, the industry-leading secure email.",
		},
		{
			question: "What happened to Office 365 plans?",
			answer:
				"Office 365 plans are now Microsoft 365 business plans. Microsoft 365 includes everything you know in Office 365, including best-in-class Office apps, intelligent cloud services, and advanced security. There are no price or feature changes, only an updated name.",
		},
		{
			question:
				"My business has an existing Office 365 business subscription. What does the change to Microsoft 365 mean for me?",
			answer:
				"No action is needed from you. Your Office 365 subscription will automatically be renamed to Microsoft 365. You will see the name of your subscription update to the new name across your Admin Portal and monthly billing statements..",
		},
		{
			question:
				"Why should I buy Microsoft 365 from GoDaddy if I already have Office apps on my desktop?",
			answer:
				"If you purchase our Business Professional plan, you'll get the latest Office apps, featuring the latest versions of the desktop applications you know and love — Excel, Word, Outlook, PowerPoint, Access (PC only), OneNote and Publisher. And whenever Office apps are updated, you will automatically receive the latest upgrade at no additional charge so that you always have the current version of Office apps.",
		},
		{
			question:
				"With the Business Professional plan, can I download the 5 installs of Office on my employees' computers?",
			answer:
				"The desktop Office app licenses that come with the Business Professional plan is associated with an individual user's account, including that individual's sign in and password information. Downloading a copy onto an employee's computer would give them access to your documents. ",
		},
		{
			question:
				"Will the Excel, PowerPoint and Word programs I already have installed on my computer work with my cloud storage and Office Online?",
			answer:
				"If you purchase our Business Professional plan, you'll get the latest Office apps, featuring the latest versions of the desktop applications you know and love — Excel, Word, Outlook, PowerPoint, Access (PC only), OneNote and Publisher. And whenever Office apps are updated, you will automatically receive the latest upgrade at no additional charge so that you always have the current version of Office apps.",
		},
	];

	return (
		<div className="faq-container">
			{/* FAQ Header */}
			<h1 className="faq-header">Create and connect with Microsoft 365.</h1>

			{/* FAQ Section */}
			<div className="faq-section">
				{faqData.map((faq, index) => (
					<div key={index} className="faq-item">
						<h3 className="faq-question" onClick={() => toggleAnswer(index)}>
							{faq.question}
						</h3>
						{/* Show answer only if the question is clicked */}
						{openIndex === index && <p className="faq-answer">{faq.answer}</p>}
						<hr />
					</div>
				))}
			</div>
		</div>
	);
};

export default FAQ;
