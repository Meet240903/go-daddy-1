import React from "react";
import EmailTop from "../../components/EmailFiles/emailoptionpages/Emailtop";
import Emailcenter from "./emailoptionpages/Emailcenter";
import EmailCard from "./emailoptionpages/EmailCard";
import EmailFooter from "./emailoptionpages/EmailFooter";
const Emailoption = () => {
	return (
		<div>
			<EmailTop />
			<Emailcenter />
			<EmailCard />
			<EmailFooter />
		</div>
	);
};

export default Emailoption;
