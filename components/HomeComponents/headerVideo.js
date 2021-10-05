import ReactPlayer from 'react-player'
import styles from '../../styles/Home.module.css'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll'

export default function HeaderVideo() {
    return (
        <section className={styles.headerVideoSection}>
            
            <div className={styles.headerVideoFilter}></div>
            <span className={styles.headerVideoSpan + " container"}>
                <img src='/images/f2k_logo.png' width='110px' alt='f2k_logo' />
                <br/>
                the fastest <br/> growing media <br/> network <br/><span > in the gaming industry</span>
                <br/>
                <Link to='about' spy={true} smooth={true} offset={-160} duration={500} ><FontAwesomeIcon icon={faChevronDown} size={'2x'}/></Link>
            </span>
            <div className={styles.headerVideoWatermark}>
                        </div>
            <div className={styles.headerVideoDiv}>
                        </div>
            <ReactPlayer
                className={styles.headerVideo} 
                playsinline
                url={'https://s3.amazonaws.com/f2k.website.assets/header_video.mp4'}
                playing={true}
                loop={true}
                muted={true}
                style={{marginLeft : 'auto'}}
                width='57%'
                height='100%'
            />
        </section>
    )
}