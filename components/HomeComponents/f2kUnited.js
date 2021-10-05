import React, { Component } from 'react'

import styles from '../../styles/Home.module.css'
import Slider from "react-slick";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faStar, faUserAlt, faClock } from "@fortawesome/free-solid-svg-icons"

var settings = {
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplay: true,
    autoplaySpeed: 5000,
    rows: 1,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

export default class f2kUnited extends Component {

    constructor() {
        super();
        this.state = {
            startProgressBar: false
        };
    }

    handleProgressBar = ( value ) => {
        this.setState({ startProgressBar : value })
    }

    render() {
        return(

        <section className={styles.f2k_united_section} id='f2kUnited' >
            <div className={styles.f2k_united_wrapper}>
                <div className={styles.f2k_united_left}>
                    <div className={styles.f2k_united_dark_area}></div>
                    <div className={styles.f2k_united_slick_progressBar}>
                        <div

                            className={styles.f2k_united_slick_progress} 
                            style={this.state.startProgressBar ? {animation: 'progress 4s linear', animationName: 'progress'} : {animation: 'none'}}

                        >

                        </div>
                    </div>
                    <h1>F2K UNITED</h1>

                    <Slider 
                        {...settings}
                        onInit = { (e) => this.handleProgressBar(true) }
                        beforeChange = { (e) => this.handleProgressBar(false) }
                        afterChange = { (e) => this.handleProgressBar(true) }
                        onSwipe = { (e) => this.handleProgressBar(true) }
                    >

                        <div className={`${styles.f2k_united_slide_content} ${styles.f2k_united_slide_1}`}>

                            <p>
                                The "F2K United MTG Invitational" was the first tournament run by F2K,
                                partnered with Twitch and Wizards of the Coast,
                                around showcasing the diverse nature of the gaming space
                                with a tournament for players of all walks of life and fame.
                            </p>

                        </div>

                        <div className={`${styles.f2k_united_slide_content} ${styles.f2k_united_slide_2}`}>

                            <h3>Broadcast Metrics</h3>

                            <p><FontAwesomeIcon icon={faEye} /> Average Viewership <span>880</span></p>
                            <p><FontAwesomeIcon icon={faStar} /> Impressions <span>600K</span></p>
                            <p><FontAwesomeIcon icon={faUserAlt} /> Unique Viewers <span>12K</span></p>
                            <p><FontAwesomeIcon icon={faClock} /> Broadcast Duration <span>11h</span></p>
                        
                        </div>

                        <div className={`${styles.f2k_united_slide_content} ${styles.f2k_united_slide_3}`}>
                                
                            <p><span>5M</span> Impressions on <span>42</span> Broadcasts from participants streaming F2K United</p>
                        
                            <p><span>330K</span> Impressions from <span>17</span> tweets across one month prior to the tournament</p>
                        
                            <p><span>4.6K</span> Gleam Campaign Giveaway participants</p>
                        
                        </div>

                        <div className={`${styles.f2k_united_slide_content} ${styles.f2k_united_slide_4}`}>

                            <div className={styles.f2k_united_quote_wrapper}>
                                <div className={styles.f2k_united_quote_text_wrapper}>
                                    <p className="f2k_united_quote" >"F2K United is a realistic look at the future of esports and video gaming where everyone, no matter their identity or background, can have an equal opportunity to showcase their abilities in a competitive format that’s also fun and exciting."</p>
                                    <span> - Zabracus</span>
                                </div>
                                <img src='/images/streamers/zabracus.jpg' alt="F2K Zabracus Streamer"/>
                            </div>

                            <div className={styles.f2k_united_quote_wrapper}>
                                <div className={styles.f2k_united_quote_text_wrapper}>
                                    <p className="f2k_united_quote" >"F2K United had a big range of players from all over the community and was a blast to compete in. I can’t wait to see more tournaments like this in the future."</p>
                                    <span> - TheAsianAvenger</span>
                                </div>
                                <img src='/images/streamers/theasianavenger.jpg' alt="F2K The Asian Avenger Streamer"/>
                            </div>

                        </div>

                    </Slider>
                </div>
                <div className={styles.f2k_united_right}>
                    <img src='/images/f2k_united_logo.png' alt='F2K United Logo' />
                </div>
            </div>
        </section>
    )}
}