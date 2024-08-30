import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../assets/style/homefiles/hometop.css";

const HomeTop = () => {
	return (
		<div className="home-top-container">
			<div className="search-container">
				<div className="search-bar-container">
					<FontAwesomeIcon icon={faSearch} className="search-icon" />
					<input
						type="text"
						className="search-bar"
						placeholder="Type the domain you want."
					/>
					<button className="search-button">Search Domain</button>
				</div>
				<div className="search-info">
					<input
						type="text"
						className="additional-input"
						placeholder="₹ 251.26* / 1st yr."
					/>
					<p>Explore possibilities with .world</p>
				</div>
			</div>
		</div>
	);
};

export default HomeTop;
