import React from "react";
import {
  BottomStickySection,
  HomeBanner,
  HomeConsultation,
  HomeCustomers,
  HomeForm,
  HomeMain,
  HomeOurPreferences,
  HomeOurStudio,
  HomeOurSuggestions,
  HomePRresources,
  HomePartners,
  HomePopularIndustries,
  HomeStudioServices,
} from "../../components";

const Home = () => {
  return (
    <div className="home">
      <HomeMain />
      <HomePartners />
      <HomePopularIndustries />
      <HomeStudioServices />
      <BottomStickySection />
      <HomeBanner />
      <HomeCustomers/>
      <HomePRresources />
      <HomeOurPreferences />
      <HomeForm />
      <HomeOurStudio />
      <HomeOurSuggestions />
      <HomeConsultation />
    </div>
  );
};

export default Home;
