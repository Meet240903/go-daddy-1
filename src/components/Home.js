import React from "react";
import HomeTop from "./HomeFiles/HomeTop";
import HomeDomainAiSection from "./HomeFiles/HomeDomainAiSection";
import HomeBusinesSection from "./HomeFiles/HomeBusinesSection";
import HomeHosting_marketing from "./HomeFiles/HomeHosting_marketing";
import HomeImageCarousel from "./HomeFiles/HomeImageCarousel";
import HomeWordSection from "./HomeFiles/HomeWordSection";
import HomeSliderSection from "./HomeFiles/HomeSliderSection";
import HomeWhyWorkSection from "./HomeFiles/HomeWhyWorkSection";
import HomeDomainSearch from "./HomeFiles/HomeDomainSerach";
import HomeFAQ from "./HomeFiles/HomeFAQ";
const Home = () => {
	return (
		<div>
			<HomeTop />
			<HomeDomainAiSection />
			<HomeBusinesSection />
			<HomeHosting_marketing />
			<HomeImageCarousel />
			<HomeWordSection />
			<HomeSliderSection />
			<HomeWhyWorkSection />
			<HomeDomainSearch />
			<HomeFAQ />
		</div>
	);
};

export default Home;
