import React, { Component } from 'react'
import styles from '../../styles/Home.module.css'
import Title from '../title'

import Card from './whatWeDoCard'

import VisibilitySensor from '../visibilitySensor'
import { Spring } from 'react-spring/renderprops.cjs'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRocket, faHandshake, faFilm, faLaptopCode, faUsers } from "@fortawesome/free-solid-svg-icons"
library.add( faRocket, faHandshake, faFilm, faLaptopCode, faUsers )

export default class whatWeDo extends Component {

    constructor() {
        super();
        this.state = {
            outline_1_width: '100%',
            outline_2_width: '0',
            outline_3_width: '0',
            outline_4_width: '0',
            outline_5_width: '0',

            cards : [
                {
                    svg: <img src='/images/whatWeDo/talent-management-2.png' />,
                    title: 'Talent Management',
                    content: 'We’re here to empower our talent. What’s best for you? Where do you want to go? How do you want to grow? Our partnership goes further than a handshake and a contract.'
                },
                {
                    svg: <img src='/images/whatWeDo/partnership.png' />,
                    title: 'Branding And Partnership Opportunities',
                    content: 'We are uniquely positioned to offer dynamic marketing solutions to brands. With our segmented approach you can work with specific creators that fit your needs, building trustworthy relationships along the way.'
                },
                {
                    svg: <img src='/images/whatWeDo/owned-content.png' />,
                    title: 'Owned Content',
                    content: 'We’re delivering owned and operated content through authentic stories. We want to pioneer meaningful narratives that spark conversation and resonate with the audience.'
                },
                {
                    svg: <img src='/images/whatWeDo/karmatrack.png' />,
                    title: 'Karmatrack',
                    content: 'Advancement is key. With our in-house, one-of-a-kind growth predicting algorithm we can be more precise than ever before when it comes to uncovering new and talented creators.'
                },
                {
                    svg: <img src='/images/whatWeDo/community.png' />,
                    title: 'Community network',
                    content: 'No one gets to the top alone. We’re elevating and accelerating the entertainment careers of hundreds of creators through our community network -- and everyone can join, learn, and cross-promote with any talent in our network.'
                },
            ]
        };
    }

    handleItemHover = ( value ) => {
        switch(value) {
            case '1':
                this.setState({ outline_1_width : '100%', outline_2_width : '0', outline_3_width : '0', outline_4_width : '0', outline_5_width : '0' });
                break;
            case '2':
                this.setState({ outline_1_width : '0', outline_2_width : '100%', outline_3_width : '0', outline_4_width : '0', outline_5_width : '0' });
                break;
            case '3':
                this.setState({ outline_1_width : '0', outline_2_width : '0', outline_3_width : '100%', outline_4_width : '0', outline_5_width : '0' });
                break;
            case '4':
                this.setState({ outline_1_width : '0', outline_2_width : '0', outline_3_width : '0', outline_4_width : '100%', outline_5_width : '0' });
                break;
            case '5':
                this.setState({ outline_1_width : '0', outline_2_width : '0', outline_3_width : '0', outline_4_width : '0', outline_5_width : '100%' });
                break;
          }
        
    }

    handleItemHoverOut = ( value ) => {
        this.setState({ outline_1_width : '0', outline_2_width : '0', outline_3_width : '0', outline_4_width : '0', outline_5_width : '0' });
    }

    render() {
        return (

        <section className={styles.what_we_do_section} id='whatWeDo'>
            <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                    <Spring
                        delay={300}
                        to={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? "translateX(0)" : "translateX(200px)"
                            }}
                    >
                        {props => <div style={{ ...props }}><Title title='what we do' /></div>}
                    </ Spring>
                )}
            </VisibilitySensor>
            
            <div className={styles.what_we_do_section_wrapper + ' section_content'}>
                <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                        <Spring
                            delay={800}
                            to={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? "scale(1)" : "scale(0.2)"
                                }}
                        >
                            {props => <div style={{ ...props }}><Card card = {this.state.cards[0]} flipped = {true} /></div>}
                        </ Spring>
                    )}
                </VisibilitySensor>

                <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                        <Spring
                            delay={800}
                            to={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? "scale(1)" : "scale(0.2)"
                                }}
                        >
                            {props => <div style={{ ...props }}><Card card = {this.state.cards[1]} flipped = {false} /></div>}
                        </ Spring>
                    )}
                </VisibilitySensor>

                <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                        <Spring
                            delay={800}
                            to={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? "scale(1)" : "scale(0.2)"
                                }}
                        >
                            {props => <div style={{ ...props }}><Card card = {this.state.cards[2]} flipped = {false} /></div>}
                        </ Spring>
                    )}
                </VisibilitySensor>

                <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                        <Spring
                            delay={800}
                            to={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? "scale(1)" : "scale(0.2)"
                                }}
                        >
                            {props => <div style={{ ...props }}><Card card = {this.state.cards[3]} flipped = {false} /></div>}
                        </ Spring>
                    )}
                </VisibilitySensor>

                <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                        <Spring
                            delay={800}
                            to={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? "scale(1)" : "scale(0.2)"
                                }}
                        >
                            {props => <div style={{ ...props }}><Card card = {this.state.cards[4]} flipped = {false} /></div>}
                        </ Spring>
                    )}
                </VisibilitySensor>

                {/* <div className={styles.what_we_do_item_wrapper} onMouseEnter={(value) => this.handleItemHover('1')} onMouseLeave={(value) => this.handleItemHoverOut('1')}>
                    <div className={styles.what_we_do_outline} style={{ width : this.state.outline_1_width }}>
                        <div></div>
                    </div>
                    <FontAwesomeIcon icon={faRocket} />
                    <div className={styles.what_we_do_item_text} >
                        <h3>Talent Management</h3>
                        <p>We’re here to empower our talent. What’s best for you? Where do you want to go? How do you want to grow? Our partnership goes further than a handshake and a contract.</p>
                    </div>
                </div>
                <div className={styles.what_we_do_item_wrapper} onMouseEnter={(value) => this.handleItemHover('2')} onMouseLeave={(value) => this.handleItemHoverOut('2')}>
                    <div className={styles.what_we_do_outline} style={{ width : this.state.outline_2_width }}>
                        <div></div>
                    </div>
                    <FontAwesomeIcon icon={faHandshake} />
                    <div className={styles.what_we_do_item_text} >
                        <h3>Branding And Partnership Opportunities</h3>
                        <p>We are uniquely positioned to offer dynamic marketing solutions to brands. With our segmented approach you can work with specific creators that fit your needs, building trustworthy relationships along the way.</p>
                    </div>
                </div>
                <div className={styles.what_we_do_item_wrapper} onMouseEnter={(value) => this.handleItemHover('3')} onMouseLeave={(value) => this.handleItemHoverOut('3')}>
                    <div className={styles.what_we_do_outline} style={{ width : this.state.outline_3_width }}>
                        <div></div>
                    </div>
                    <FontAwesomeIcon icon={faFilm} />
                    <div className={styles.what_we_do_item_text} >
                        <h3>Owned Content</h3>
                        <p>We’re delivering owned and operated content through authentic stories. We want to pioneer meaningful narratives that spark conversation and resonate with the audience.</p>
                    </div>
                </div>
                <div className={styles.what_we_do_item_wrapper} onMouseEnter={(value) => this.handleItemHover('4')} onMouseLeave={(value) => this.handleItemHoverOut('4')}>
                    <div className={styles.what_we_do_outline} style={{ width : this.state.outline_4_width }}>
                        <div></div>
                    </div>
                    <FontAwesomeIcon icon={faLaptopCode} />
                    <div className={styles.what_we_do_item_text} >
                        <h3>Karmatrack</h3>
                        <p>Advancement is key. With our in-house, one-of-a-kind growth predicting algorithm we can be more precise than ever before when it comes to uncovering new and talented creators.</p>
                    </div>
                </div>
                <div className={styles.what_we_do_item_wrapper} onMouseEnter={(value) => this.handleItemHover('5')} onMouseLeave={(value) => this.handleItemHoverOut('5')}>
                    <div className={styles.what_we_do_outline} style={{ width : this.state.outline_5_width }}>
                        <div></div>
                    </div>
                    <FontAwesomeIcon icon={faUsers} />
                    <div className={styles.what_we_do_item_text} >
                        <h3>Community network</h3>
                        <p>No one gets to the top alone. We’re elevating and accelerating the entertainment careers of hundreds of creators through our community network -- and everyone can join, learn, and cross-promote with any talent in our network.</p>
                    </div>
                </div> */}
            </div>
        </section>
    )}
}