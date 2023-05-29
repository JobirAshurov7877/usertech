import React from 'react'
import { HomeBanner, HomeConsultation, HomeCustomers, HomeForm, HomeMain, HomeOurPreferences, HomeOurStudio, HomeOurSuggestions, HomePRresources, HomePartners, HomeServices, HomeTextSection } from '../../components'

const Home = () => {
  return (
    <div className='home'>
       <HomeMain />
       <HomePartners />
       <HomeServices />
       <HomeBanner />
       <HomeCustomers />
       <HomePRresources />
       <HomeOurPreferences />
       <HomeForm />
       <HomeOurStudio />
       <HomeOurSuggestions />
       {/* <HomeConsultation /> */}
       <HomeTextSection />
    </div>
  )
}

export default Home