import React from "react";
import "../../assets/style/homefiles/homedomainsearch.css";
import bgimg from "../../assets/images/godaddy-guide.webp";
const DomainSearch = () => {
	return (
		<div>
			<div className="domain-container-search">
				<div className="text-center-search">
					<h1>It all starts with a domain.</h1>
					<p>Make your idea real. Claim your space online with a domain.</p>
				</div>
				<div className="search-box-search">
					<input type="text" placeholder="Find your perfect domain" />
					<button>Search</button>
				</div>
			</div>

			<div className="image-container-search">
				<div className="content-right-search">
					{/* <img src={bgimg} /> */}
					<span>GoDaddy Guides </span>
					<h1>Why go with GoDaddy?</h1>
					<p>
						Because we know that even the best technology is only as good as the
						people behind it. That’s why we offer expert support, plus a lot
						more.
					</p>

					<button className="help-button-search">
						Get Help
						<span className="arrow-icon">→</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default DomainSearch;
