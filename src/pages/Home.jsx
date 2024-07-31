import React from 'react'
import App from '../App'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import RecentWorks from '../components/RecentWorks'
import Counter from '../components/Counter'
import Team from '../components/Team'
import Banner from '../components/Banner'
import Process from '../components/Process'
import FAQ from '../components/FAQ'
import Testimonial from '../components/Testimonial'
import Message from '../components/Message'
import Blogs from '../components/Blogs'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <RecentWorks />
      <Counter />
      <Team />
      <Banner />
      <Process />
      <FAQ />
      <Testimonial />
      <Message />
      <Blogs />
    </div>
  )
}

export default Home