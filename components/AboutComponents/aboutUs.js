import styles from '../../styles/About.module.css'
import Title from '../title'

export default function aboutUs() {
    return (
        <section className={styles.aboutUs_section} >
            <Title title = 'we are f2k' />
            <div className={styles.aboutUs_section_wrapper + ' section_content'}>
                <div className={styles.aboutUs_first + ' container'}>
                    <div className={styles.aboutUs_filter_first}></div>
                    <div className={styles.aboutUs_text_div}>
                        <p>F2K is the leading esports and gaming media company with a full service talent management house. We develop elevated narratives through meaningful digital IP, help creators, from streamers to athletes, develop high-quality and diverse revenue streams, and command an audience whose collective action can make a difference in business.</p>
                    </div>
                    <div className={styles.aboutUs_image_div}>
                        <img
                            src="/images/about/about_image_1.png"
                            alt="about section image 1"
                            width={600}
                            height={350}
                            objectFit="scale-down"
                        />
                    </div>
                </div>
                <div className={styles.aboutUs_second  + ' container'}>
                    <div className={styles.aboutUs_filter_second}></div>
                    <div className={styles.aboutUs_text_div}>
                        <p>We have championed inclusivity since our inception. Diversity is not a PR piece for us - having the most individuals that identify as women, POC, and LGBTQ+, we have access to the most diverse audience. At F2K we aggregate streamers into our network enabling their content to be monetized using their reach as an engine to drive our owned and operated products.</p>
                    </div>
                    <div className={styles.aboutUs_image_div}>
                        <img 
                            src="/images/about/about_image_2.png"
                            alt="about section image 2"
                            width={600}
                            height={350}
                            objectFit="scale-down"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}