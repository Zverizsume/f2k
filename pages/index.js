import Layout from '../components/layout'
import HeaderVideo from '../components/HomeComponents/headerVideo'
import AboutUs from '../components/HomeComponents/aboutUs'
import Brands from '../components/HomeComponents/brands'
import Streamers from '../components/HomeComponents/streamers'
import WhatWeDo from '../components/HomeComponents/whatWeDo'
import F2KUnited from '../components/HomeComponents/f2kUnited'
import Contact from '../components/contact'
import PageSectionNav from '../components/pageSectionNav'

const page = {
    title : 'Home',
    desc : 'Gaming, esports, entertainment, and media network.',
    canonical: 'https://f2k.gg'
}

export default function Home() {
  return (
        <Layout page = {page} scrolled = {false}>
          <PageSectionNav />
          <HeaderVideo />
          <AboutUs />
          <Brands />
          <Streamers />
          <WhatWeDo />
          <F2KUnited />
          <Contact />
        </Layout>
  )
}
