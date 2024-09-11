import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faStar as faStarSolid,
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../../assets/style/homefiles/homeslider.css"; // Import the CSS file
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import star_icon from "../../assets/images/star_icon.webp";

const cards = [
	{
		title: "THE SUPPORT PERSON HAVE GOOD KNOWLEDGE..",
		description:
			".co is a top-level domain extension and it’s the acronym for company or corporation. .co domain names are easy to recognize.",
	},
	{
		title: "10 ON 10 CUSTOMER SUPPORT",
		description:
			"When you want something modern (and even a little edgy), dot co is at least a letter or two shorter than most domain names, signaling your business is on the cutting edge. .",
	},
	{
		title: "GOOD COMMUNICATION SKILL BY SUPPORT ASSISTANT",
		description:
			" .co is the perfect blend of edgy and established. So why register .co? There are a lot of reasons:",
	},
	{
		title: "GO DADDY CUSTOMER SUPPORT IS 100%..",
		description:
			"There are lots of domains specialized for a specific use or region.. but dot co is like that all-star player on a championship team. ",
	},
	{
		title: "84+ MILLIONS DOMAIN, 22 MILLION CUSTOMER...",
		description:
			"It didn’t take long to discover people were willing to pay top dollar opened to the whole world in 2010, an auction of the highly desirable e.co brought in ₹ 68,06,722.69. ",
	},
	{
		title: "LOREM IPSUM  DOLOR SIT AMATE, CONSEQUENCE AKNOWLEDGE ELIT..",
		description:
			"More than 2 million .co domains have been snapped up worldwide. (Obviously, there’s something about it people love.) The appeal of .co domain names reaches far beyond companies, corporations and commerce. It can give anyone a head start on building an exciting brand. The next time inspiration strikes, harness the potential for viral popularity with your own .co domain. ",
	},
	{
		title: "THE SUPPORT PERSON HAVE GOOD KNOWLEDGE..",
		description:
			"Back in 2010 when .co launched, there weren’t as many options for standing out with your domain name. And while there are hundreds of new domain extensions to choose from today, .co is the perfect blend of edgy and established. So why register .co? There are a lot of reasons:",
	},
	{
		title: "10 ON 10 CUSTOMER SUPPORT",
		description:
			"It didn’t take long to discover people were willing to pay top dollar for this short and catchy domain extension. When registrations opened to the whole world in 2010, an auction of the highly desirable e.co brought in ₹ 68,06,722.69. It wasn’t long before the .co domain was sparking interest and adoption by some of the most well-known businesses worldwide. Today, you can big names taking advantage of .co, including",
	},
	{
		title: "GOOD COMMUNICATION SKILL BY SUPPORT ASSISTANT",
		description:
			"More than 2 million .co domains have been snapped up worldwide. (Obviously, there’s something about it people love.) The appeal of .co domain names reaches far beyond companies, corporations and commerce. It can give anyone a head start on building an exciting brand. The next time inspiration strikes, harness the potential for viral popularity with your own .co domain. ",
	},
	{
		title: "GO DADDY CUSTOMER SUPPORT IS 100%..",
		description:
			"Back in 2010 when .co launched, there weren’t as many options for standing out with your domain name. And while there are hundreds of new domain extensions to choose from today, .co is the perfect blend of edgy and established. So why register .co? There are a lot of reasons:",
	},
];

const CardSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? cards.length - 5 : prevIndex - 1
		);
	};

	const goToNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === cards.length - 5 ? 0 : prevIndex + 1
		);
	};

	return (
		<div className="home_card-slider">
			<h1>Trusted by 20+ million customers around the world.</h1>
			<div className="home_slider-wrapper">
				<button className="home_arrow_left" onClick={goToPrev}>
					<FontAwesomeIcon icon={faChevronLeft} />
				</button>
				<div className="home_cards-container">
					{cards.slice(currentIndex, currentIndex + 5).map((card, index) => (
						<div className="home_card" key={index}>
							<h1>{card.title}</h1>
							<p>{card.description}</p>
							<div className="home_stars">
								{[...Array(5)].map((_, i) => (
									<FontAwesomeIcon
										key={i}
										icon={faStarSolid}
										className="home_star"
									/>
								))}
							</div>
						</div>
					))}
				</div>
				<button className="home_arrow_right" onClick={goToNext}>
					<FontAwesomeIcon icon={faChevronRight} />
				</button>
			</div>
			<img
				src={star_icon}
				style={{ width: "10%", marginTop: "20px" }}
				alt="GoDaddy Logo"
			/>
			<p>
				4.6 out of 5 stars based on 104,834 reviews | Showing our 4 and 5 stars
				reviews.
			</p>
		</div>
	);
};

export default CardSlider;
