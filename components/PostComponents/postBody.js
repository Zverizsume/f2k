import styles from '../../styles/Post.module.css'
import he from 'he'
import parseHTML from 'html-react-parser'
import Head from 'next/head';

export default function postHeader({postBody}) {

    return (
        <>
            <Head>
                <script type="text/javascript" src="https://platform.twitter.com/widgets.js"></script>
            </Head>
            <section className = {styles.post_body_wrapper + ' container'}>
                <div className = {styles.post_body_content + ' ck-content'}>{parseHTML(he.decode(postBody))}</div>
            </section>
        </>
    )
}