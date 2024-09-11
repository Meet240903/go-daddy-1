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
			question: "What is GoDaddy Professional Email?",
			answer:
				"Our Professional Email helps you stay on customers' minds with an email address that matches your domain and promotes your businesses with every message you send. Professional Email comes with easy-to-use features like calendar, contacts, and tasks as well as a webmail portal you can customize. Plus, you can also use your favorite email client, like Microsoft Outlook or Apple Mail. Professional Email works great on any device, including your mobile phone, and automatically syncs across all of your devices. That means your email is always up to date. Rest assured knowing that we offer 24/7 expert support, 256-bit encryption, and strong virus, spam, and fraud protection to keep your inbox safe and clean.",
		},
		{
			question: "Does GoDaddy's Professional Email include a spam filter?",
			answer:
				"Yes! We stop spam in its tracks to keep your inbox clean. Our industry-leading spam and anti-virus filters block over 300 million unwanted, potentially dangerous emails every day, every hour.",
		},
		{
			question:
				"What are the benefits of having a domain-based business email address?",
			answer:
				"Customers are 9x more likely to choose a business with a professional email address. With a domain-based email, you promote your business every time you send a message. Plus, it's a cost-effective way to make your business look more professional.",
		},
		{
			question: "How can I be sure that my business email is secure?",
			answer:
				"GoDaddy helps your business stay safe with industry-leading spam and virus filters, 256-bit encryption, plus best-in-class security. We utilize the most comprehensive email and messaging security solution that combines advanced data analytics, automated threat monitoring and a team of messaging-abuse experts to provide the highest level of real-time security.",
		},
	];

	return (
		<div className="faq-container">
			{/* FAQ Header */}
			<h1 className="faq-header">
				Professional Email Frequently Asked Questions
			</h1>

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
