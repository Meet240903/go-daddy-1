import React from "react";
import BusinessEmailTop from "./businessemail/BusinessEmailTop";
import BusinessEmailCard from "./businessemail/BusinessCard";
import EmailFooter from "./emailoptionpages/EmailFooter";
import ProfessionalEmail from "./businessemail/ProfessionalEmail";
import WhyChooseGoDaddy from "./businessemail/WhyChooseGoDaddy";
import FAQ from "./businessemail/FAQ";
const BusinessEmail = () => {
	return (
		<div>
			<BusinessEmailTop />
			<BusinessEmailCard />

			<EmailFooter />
			<ProfessionalEmail />
			<WhyChooseGoDaddy />
			<FAQ />
		</div>
	);
};

export default BusinessEmail;
