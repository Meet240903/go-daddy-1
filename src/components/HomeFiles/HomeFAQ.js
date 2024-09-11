import React, { useState } from "react";
import "../../assets/style/homefiles/homefaq.css";

const FAQPage = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const faqs = [
		{
			question: "How does GoDaddy help small business owners succeed?",
			answer:
				"GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional email helps you build a professional image, while our online marketing tools empower entrepreneurs to get online with an SEO-friendly website. GoDaddy is an all-in-one solution provider to get your idea online, backed with expert, personalized support from GoDaddy Guides.",
		},
		{
			question: "Why do I need a website for my business?",
			answer:
				"Even small local businesses that only serve their hometown need a site. That's because the web is the first place people go when looking for a product or service. A website helps every business: Promote and sell their products and services. Connect with new customers (and keep existing customers). Build credibility. Compete with bigger businesses. Control their brand and keep their marketing fresh and current. Best of all, a website is much easier and more affordable than you might think.",
		},
		{
			question: "Why do I need a professional email?",
			answer:
				"There are a lot of reasons to switch from your free email to a domain-based email, but here are the top 3: Customers are much more likely to trust a professional address like lily@lilysbikes.com than lilysbikestexas84@notmail.com. Professional Email provides world-class security with industry-leading spam and virus filters. Personalized email addresses promote your business more effectively.",
		},
		{
			question: "Why get a domain name from GoDaddy?",
			answer:
				"GoDaddy is the world’s largest and trusted domain registrar that empowers people like you with creative ideas to succeed online. Buying a domain name is easy with our domain search tool and domain name generator tools you can find the perfect website address for your business.",
		},
		{
			question: "Why use GoDaddy Website Builder?",
			answer:
				"It's a fast, simple way to create a website that you — and your customers — will love. GoDaddy Website Builder offers professionally designed templates. Add your own text and images, and you're good to go!",
		},
		{
			question: "Why use the GoDaddy Logo Maker?",
			answer:
				"With the GoDaddy Logo Maker it's easy to make a custom logo that'll help define your brand's personality and transform your business. There are hundreds of templates to choose from, or you can design your own in just minutes. No design skills needed.",
		},
	];

	const toggleAnswer = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className="faq-page">
			<h1>
				Millions of customers rely on our domains and web hosting to get their
				ideas online.
			</h1>
			<h4>Frequently Asked Questions</h4>

			{faqs.map((faq, index) => (
				<div key={index} className="faq-item">
					<div className="question" onClick={() => toggleAnswer(index)}>
						<h2>{faq.question}</h2>
						<span className="arrow">{activeIndex === index ? "↑" : "↓"}</span>
					</div>
					{activeIndex === index && <p>{faq.answer}</p>}
					<hr />
				</div>
			))}
		</div>
	);
};

export default FAQPage;
