import styles from '../../styles/Post.module.css'
import Moment from 'react-moment'

const host = 'https://blog.f2k.gg'

export default function postHeader({postHeader}) {
    return (
        <section className = {styles.post_header_section} style={{backgroundImage : `url(${host}/static/images/${postHeader.image})`}}>
            <div className = {styles.post_header_filter}></div>
            <div className = {styles.post_header_wrapper} >
                <h1>{postHeader.title}</h1>
                <span><Moment format="ddd MMM D YYYY">{postHeader.created_at}</Moment></span>
            </div>
        </section>
    )
}