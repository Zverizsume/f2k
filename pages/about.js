import Layout from '../components/layout'
import Contact from '../components/contact'
import AboutUs from '../components/AboutComponents/aboutUs'

const page = {
  title : 'About',
  desc : 'Read more about us and see our mission statement.',
  canonical: 'https://f2k.gg/about'
}

export default function About() {
  return (
      <Layout page = {page} scrolled = {'disabled'}>
        <AboutUs />
        <Contact />
      </Layout>
  )
}