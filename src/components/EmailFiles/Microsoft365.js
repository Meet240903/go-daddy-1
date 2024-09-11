import React from "react";
import Microsoft365Section from "./microsoft/microsoft_Top";
import MicrosoftCard from "./microsoft/microsoft_card";
import MicrosoftFooter from "./emailoptionpages/EmailFooter";
import MicrosoftCompare from "./microsoft/microsoft_compare";
import MicrosoftProfessional from "./microsoft/microsoft_professional_Content";
import MicrosoftFAQ from "./microsoft/microsoft_faq";
const Microsoft365 = () => {
	return (
		<div>
			<Microsoft365Section />
			<MicrosoftCard />
			<MicrosoftFooter />
			<MicrosoftCompare />
			<MicrosoftProfessional />
			<MicrosoftFAQ />
		</div>
	);
};

export default Microsoft365;
