import React from 'react'
import styles from '../../styles/Home.module.css'
import Slider from "react-slick"
import Link from 'next/link'
import VisibilitySensor from '../visibilitySensor'
import { Spring } from 'react-spring/renderprops.cjs'

var settings = {
    autoplay: true,
    autoplaySpeed: 0,
    className: 'slickSlider',
    rows: 2,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 5000,
    cssEase: 'linear',
    slidesToShow: 2,
    slidesToScroll: 1
  };

export default function Brands() {
    return (
        <section className={styles.brands_section} id='brands' >
            <div className={styles.brands_section_left}>
                <img src="/images/f2k_outlined_logo.png" alt='f2k_outlined_logo' />
                <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                        <Spring
                            delay={300}
                            to={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? "translateX(0)" : "translateX(200px)"
                                }}
                        >
                            {props => <div style={{ ...props }}>
                                        <h1>ACTIVATED <br/> BRANDS</h1>
                                        {/* { <div className={styles.partnership_wrapper}>
                                            <div className={styles.partnership_bottom}></div>
                                            <div className={styles.partnership_middle}></div>
                                            <Link href="/partnership">
                                                <a className={styles.partnership_button}>
                                                    <div className={styles.partnership_top}>BECOME A PARTNER</div>
                                                </a>
                                            </Link>
                                        </div> } */}
                                      </div>}
                        </ Spring>
                    )}
                </VisibilitySensor>
            </div>
            <div className={styles.brands_section_right}>
                <style jsx global>{`
                    .brand_img {
                        filter: contrast(0) brightness(100);
                        padding-right: 20px !important;
                    }
                `}</style>
                <div className={styles.brands_section_slider_wrapper}>
                    <Slider {...settings}>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/aftershokz.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/ample.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/anchorfree.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/displate.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/evga.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/fourthfloor.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/goblinz.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/gog.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/gungho.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/honey.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/kinguin.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/nordvpn.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/opera.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/paradox.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/playfusion.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/rally.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/rogueenergy.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/shudder.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/softgiving.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/standdesk.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/streamelements.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/streamraiders.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/synapse.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/twitch.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/ubereats.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/victsing.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                        <div className='slider_item_wrapper'>
                            <img
                                src="/images/brands/wizards.png"
                                alt="brand"
                                loading="lazy"
                                width={200}
                                height={'auto'}
                                objectfit="scale-down"
                                className='brand_img'
                            />
                        </div>
                    </Slider>
                </div>
            </div>
            
        </section>
    )
}