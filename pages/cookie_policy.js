import Layout from '../components/layout'
import Title from '../components/title'

const page = {
    title : 'Cookie Policy',
    desc : 'Cookie Policy',
    canonical: 'https://f2k.gg/cookie_policy'
  }

export default function CookiePolicy() {
    return(
        <Layout page = {page} scrolled = {'disabled'}>

            <div className="container policy_wrapper">

                <Title title='cookie policy' />

                <div className='policy_header'>
                    <p>This is the Cookie Policy for Fade 2 Karma, accessible from https://f2k.gg</p>
                </div>
                
                <div className='policy_section_wrapper'>
                    <p><strong>What Are Cookies</strong></p>
                    <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</p>
                    <p>For more general information on cookies, please read <a href="https://www.cookieconsent.com/what-are-cookies/">"What Are Cookies"</a>.</p>
                </div>
                <div className='policy_section_wrapper'>
                    <p><strong>How We Use Cookies</strong></p>
                    <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
                </div>
                <div className='policy_section_wrapper'>
                    <p><strong>Disabling Cookies</strong></p>
                    <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.</p>
                </div>
                <div className='policy_section_wrapper'>
                    <p><strong>The Cookies We Set</strong></p>

                    <ul>
                        <li>
                            <p>Site preferences cookies</p>
                            <p>In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</p>
                        </li>
                    </ul>
                </div>
                <div className='policy_section_wrapper'>
                    <p><strong>Third Party Cookies</strong></p>

                    <p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>

                    <ul>

                    <li>
                        <p>This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</p>
                        <p>For more information on Google Analytics cookies, see the official Google Analytics page.</p>
                    </li>


                    <li>
                        <p>From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimisations our users appreciate the most.</p>
                    </li>

                    </ul>
                </div>
                <div className='policy_section_wrapper'>
                    <p><strong>More Information</strong></p>

                    <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site. This Cookies Policy was created with the help of the <a href="https://www.cookiepolicygenerator.com/cookie-policy-generator/">Cookies Policy Template Generator</a> and the <a href="https://www.privacypolicytemplate.net/">Privacy Policy Template Generator</a>.</p>

                    <p>However if you are still looking for more information then you can contact us through one of our preferred contact methods:</p>

                    <ul>
                    <li>Email: info@f2k.gg</li>

                    </ul>
                </div>
            </div>
        </Layout>
    )
}