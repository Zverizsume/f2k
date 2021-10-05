import Title from '../components/title'
import Footer from './footer'
import VisibilitySensor from './visibilitySensor'
import { Spring } from 'react-spring/renderprops.cjs'

export default function contact() {
    return (
        <section className='contact_section' id='contact' >
            <img src='/images/f2k_color_outlined_logo.png' id='contact_logo'/>
            <div className='contact_wrapper container'>
                <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                        <Spring
                            delay={300}
                            to={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? "translateX(0)" : "translateX(200px)"
                                }}
                        >
                            {props => <div style={{ ...props }}><Title title='get in touch' /></div>}
                        </ Spring>
                    )}
                </VisibilitySensor>

                <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                        <Spring
                            delay={700}
                            to={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? "translateX(0)" : "translateX(-300px)"
                                }}
                        >
                            {props => <div style={{ ...props }}>
                                
                            <h3> We would love to hear from you </h3>
                            <div className="contact_social">

                                <a href="https://www.facebook.com/Fade2Karma/" className='facebook_link' target="_blank" rel="noopener noreferrer">
                                    <img src='/images/social/facebook.svg' />
                                </a>
                                <a href="https://twitter.com/fade2karma/" className='twitter_link' target="_blank" rel="noopener noreferrer">
                                    <img src='/images/social/twitter.svg' />
                                </a>
                                <a href="https://www.linkedin.com/company/f2k-gaming/" className='linkedIn_link' target="_blank" rel="noopener noreferrer">
                                    <img src='/images/social/linkedin.svg' />
                                </a>
                                <a href="https://www.instagram.com/f2kgaming/" className='instagram_link' target="_blank" rel="noopener noreferrer">
                                    <img src='/images/social/instagram.svg' />
                                </a>
                                <a href="https://www.twitch.tv/team/fade2karma" className='twitch_link' target="_blank" rel="noopener noreferrer">
                                    <img src='/images/social/twitch.png' />
                                </a>

                            </div>

                            <form
                                method="post"
                                action="https://getform.io/f/54b62e3c-2a58-430f-9b96-7e395cc1f439"
                            >
                                <div className='input_wrapper'>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        name="Name"
                                        required
                                    />
                                    <div className='form_input_line_wrapper'><div className='form_input_line'></div></div>
                                </div>
                                <div className='input_wrapper'>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="Email"
                                        required
                                    />
                                    <div className='form_input_line_wrapper'><div className='form_input_line'></div></div>
                                </div>
                                <div className='input_wrapper'>
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        name="Subject"
                                        required
                                    />
                                    <div className='form_input_line_wrapper'><div className='form_input_line'></div></div>
                                </div>
                                <div className='input_wrapper'>
                                    <textarea
                                        placeholder="Message"
                                        name="Message"
                                        required
                                    />
                                    <div className='form_input_line_wrapper'><div className='form_input_line'></div></div>
                                </div>
                                <div className='submit_div'>
                                    <input
                                        type="submit"
                                        name="submit"
                                        value="SEND"
                                    />
                                </div>
                            </form>  
                            <Footer />
                            </div>}
                        </ Spring>
                    )}
                </VisibilitySensor>

                
            </div>
        </section>
    )
}