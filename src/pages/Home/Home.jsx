import React from 'react'
import { HomeBanner, HomeCustomers, HomeMain, HomePartners, HomeServices } from '../../components'

const Home = () => {
  return (
    <div className='home'>
       <HomeMain />
       <HomePartners />
       <HomeServices />
       <HomeBanner />
       <HomeCustomers />
    </div>
  )
}

export default Home