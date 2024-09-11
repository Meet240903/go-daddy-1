import React from "react";
import "../../assets/style/homefiles/homewhywork.css";
import img1 from "../../assets/images/godaday_work_img1.webp"; // You can use inline styles if you prefer
import img2 from "../../assets/images/godady-work-img2.jpg";
import img3 from "../../assets/images/godaday_work_img3.webp";
import img4 from "../../assets/images/godaday_work_img5.jfif";
import img5 from "../../assets/images/godaday_work_img4.webp";
const HomeWhyWorkSection = () => {
	return (
		<div className="why-work-container">
			<h1>Why work with GoDaddy?</h1>
			<p>
				84+ million domains, 22 million customers, millions of websites, email
				and security — we help grow businesses.
			</p>
			<div className="image-grid">
				<img src={img1} />
				<img src={img2} />
				<img src={img3} />
				<img src={img4} />
				<img src={img5} className="last-child" />
			</div>
		</div>
	);
};

export default HomeWhyWorkSection;
