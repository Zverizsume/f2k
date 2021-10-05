import React, { Component } from 'react'
import Link from 'next/link'
import Title from '../title'

import CountUp from 'react-countup'
import VisibilitySensor from '../visibilitySensor';
import { Spring } from 'react-spring/renderprops.cjs'

import styles from '../../styles/Home.module.css'

export default class AboutUs extends Component {

    constructor() {
        super();
        this.state = {
            didViewCountUp: true
        };
    }

    onVisibilityChange = isVisible => {
        if (isVisible) {
          this.setState({ didViewCountUp: true })
        }
    }

    setState = () => {

    }

    render() {
        return (
        
            <section className="about-section"  id="about">
                
                <div className="about-section-wrapper">
                    <div className="section_wrapper">
                        <VisibilitySensor partialVisibility>
                            {({ isVisible }) => (
                                <Spring
                                    delay={300}
                                    to={{
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible ? "translateX(0)" : "translateX(200px)"
                                      }}
                                >
                                    {props => <div style={{ ...props }}><Title title='who we are' /></div>}
                                </ Spring>
                            )}
                        </VisibilitySensor>
                        
                        <div className={styles.about_metrics_wrapper + " section_content container"}>

                        <VisibilitySensor partialVisibility>
                            {({ isVisible }) => (
                                <Spring
                                    delay={500}
                                    config={{ duration : 1000 }}
                                    to={{
                                        opacity: isVisible ? 1 : 0,
                                      }}
                                >
                                    {props => <div style={{ ...props }}>        
                                        <div className={styles.about_metric_wrapper}>
                                            <div className={styles.about_metric_paralelogram_wrapper}>
                                                <div className={styles.about_metric_top_wrapper}></div>
                                                <div className={styles.about_metric_middle_wrapper}></div>
                                                <div className={styles.about_metric_bottom_wrapper}></div>
                                                <span className={styles.about_metric_image_wrapper}>
                                                    <img src='images/whoWeAre/streamer.svg' className={styles.about_metric_icon} />
                                                </span>
                                            </div>
                                            <CountUp
                                                start={0}
                                                end={isVisible ? 70 : 0}
                                                duration={5}
                                                separator=" "
                                                decimals={0}
                                                decimal=","
                                                prefix=""
                                                suffix="+"
                                                className={styles.about_metric_count}
                                            />
                                            <span className={styles.about_metric_desc}>Exclusive content creators</span>
                                        </div>
                                    </div>}
                                </ Spring>
                            )}
                        </VisibilitySensor>

                        <VisibilitySensor partialVisibility>
                            {({ isVisible }) => (
                                <Spring
                                    delay={500}
                                    config={{ duration : 1000 }}
                                    to={{
                                        opacity: isVisible ? 1 : 0,
                                      }}
                                >
                                    {props => <div style={{ ...props }}>
                            
                                        <div className={styles.about_metric_wrapper}>
                                            <div className={styles.about_metric_paralelogram_wrapper}>
                                                <div className={styles.about_metric_top_wrapper}></div>
                                                <div className={styles.about_metric_middle_wrapper}></div>
                                                <div className={styles.about_metric_bottom_wrapper}></div>
                                                <span className={styles.about_metric_image_wrapper}>
                                                <img src='images/whoWeAre/impression-rate.svg' className={styles.about_metric_icon} />
                                                </span>
                                            </div>
                                            <CountUp 
                                                start={0}
                                                end={isVisible ? 700 : 0}
                                                duration={5}
                                                separator=" "
                                                decimals={0}
                                                decimal=","
                                                prefix=""
                                                suffix="M+"
                                                className={styles.about_metric_count}
                                            />
                                            <span className={styles.about_metric_desc}>Impressions on Twitch per month</span>
                                            
                                        </div> 

                            </div>}
                                </ Spring>
                            )}
                        </VisibilitySensor>

                        <VisibilitySensor partialVisibility>
                            {({ isVisible }) => (
                                <Spring
                                    delay={500}
                                    config={{ duration : 1000 }}
                                    to={{
                                        opacity: isVisible ? 1 : 0,
                                      }}
                                >
                                    {props => <div style={{ ...props }}>
                            
                                        <div className={styles.about_metric_wrapper}>
                                            <div className={styles.about_metric_paralelogram_wrapper}>
                                                <div className={styles.about_metric_top_wrapper}></div>
                                                <div className={styles.about_metric_middle_wrapper}></div>
                                                <div className={styles.about_metric_bottom_wrapper}></div>
                                                <span className={styles.about_metric_image_wrapper}>
                                                <img src='images/whoWeAre/twitch.svg' className={styles.about_metric_icon} />
                                                </span>
                                            </div>
                                            <CountUp
                                                    start={0}
                                                    end={isVisible ? 1 : 0}
                                                    duration={5}
                                                    separator=" "
                                                    decimals={0}
                                                    decimal=""
                                                    prefix=""
                                                    suffix="%"
                                                    className={styles.about_metric_count}
                                                />
                                            <span className={styles.about_metric_desc}>of Twitch's entire viewership</span>
                                        </div> 

                            </div>}
                                </ Spring>
                            )}
                        </VisibilitySensor>

                        <VisibilitySensor partialVisibility>
                            {({ isVisible }) => (
                                <Spring
                                    delay={500}
                                    config={{ duration : 1000 }}
                                    to={{
                                        opacity: isVisible ? 1 : 0,
                                      }}
                                >
                                    {props => <div style={{ ...props }}>
                            
                                        <div className={styles.about_metric_wrapper}>
                                            <div className={styles.about_metric_paralelogram_wrapper}>
                                                <div className={styles.about_metric_top_wrapper}></div>
                                                <div className={styles.about_metric_middle_wrapper}></div>
                                                <div className={styles.about_metric_bottom_wrapper}></div>
                                                <span className={styles.about_metric_image_wrapper}>
                                                <img src='images/whoWeAre/growth.svg' className={styles.about_metric_icon} />
                                                </span>
                                            </div>
                                            
                                            <CountUp
                                                start={0}
                                                end={isVisible ? 7 : 0}
                                                duration={5}
                                                separator=" "
                                                decimals={0}
                                                decimal=","
                                                prefix=""
                                                suffix="M+"
                                                className={styles.about_metric_count}
                                            />
                                            <span className={styles.about_metric_desc}>Total reach</span>
                                        </div> 

                            </div>}
                                </ Spring>
                            )}
                        </VisibilitySensor>

                            <div className="container">
                            <VisibilitySensor partialVisibility>
                            {({ isVisible }) => (
                                <Spring
                                    delay={300}
                                    to={{
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible ? "translateX(0)" : "translateX(-200px)"
                                      }}
                                >
                                    {props => <div style={{ ...props }}>

                                    <div className={styles.about_read_more_wrapper}>
                                        <div className={styles.about_read_more_bottom}></div>
                                        <div className={styles.about_read_more_middle}></div>
                                            <Link href="/about">
                                                <a className={styles.about_read_more_button}>
                                                    <div className={styles.about_read_more_top}>READ MORE</div>
                                                </a>
                                            </Link>
                                        </div>

                                    </div>}
                                </ Spring>
                            )}
                        </VisibilitySensor>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </section>
    )}
}