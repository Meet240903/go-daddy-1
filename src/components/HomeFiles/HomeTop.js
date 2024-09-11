import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../assets/style/homefiles/hometop.css";

const HomeTop = () => {
	return (
		<div className="home-top-container">
			<div className="home-top-search-container">
				<div className="home-top-search-bar-container">
					<FontAwesomeIcon icon={faSearch} className="home-top-search-icon" />
					<input
						type="text"
						className="home-top-search-bar"
						placeholder="Type the domain you want."
					/>
					<button className="home-top-search-button">Search Domain</button>
				</div>
				<div className="home-top-search-info">
					<input
						type="text"
						className="home-top-additional-input"
						placeholder="₹ 251.26* / 1st yr."
					/>
					<p>Explore possibilities with .world</p>
				</div>
			</div>
		</div>
	);
};

export default HomeTop;
