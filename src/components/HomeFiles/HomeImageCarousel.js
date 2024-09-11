import React, { useState } from "react";
import "../../assets/style/homefiles/homeImageCarousel.css";
import image1 from "../../assets/images/slider_img1.webp";
import image2 from "../../assets/images/slider_img_2.jpeg";
import image3 from "../../assets/images/slider_img7.jfif";
import image4 from "../../assets/images/slider_img4.webp";
import image5 from "../../assets/images/slider_img5.jfif";
import image6 from "../../assets/images/slider_img6.jfif";
import image7 from "../../assets/images/slider_img3.jfif";
import image8 from "../../assets/images/slider_img8.jfif";

const ImageSlider = () => {
	const [isPaused, setIsPaused] = useState(false);

	const images = [
		image1,
		image2,
		image3,
		image4,
		image5,
		image6,
		image7,
		image8,
	];

	const handleMouseEnter = () => {
		setIsPaused(true);
	};

	const handleMouseLeave = () => {
		setIsPaused(false);
	};

	return (
		<div className="slider-container">
			<h1>Templates designed to sell.</h1>
			<p>Choose from 100s of designs for every idea and industry.</p>
			<div
				className={`slider ${isPaused ? "paused" : ""}`}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className="slider-content">
					{images.map((src, index) => (
						<img
							key={index}
							src={src}
							alt={`Slide ${index + 1}`}
							className="slider-image"
						/>
					))}
				</div>
			</div>
			<button className="try-domain-button">
				Browse All Templates
				<span className="arrow-icon">→</span>
			</button>
		</div>
	);
};

export default ImageSlider;
