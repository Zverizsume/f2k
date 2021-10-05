import Layout from '../components/layout'
import Moment from 'react-moment'
import Link from 'next/link'

import Title from '../components/title'

import styles from "../styles/Policy.module.css"

import PostHeader from "../components/PostComponents/postHeader"
import PostBody from "../components/PostComponents/postBody"

import axios from 'axios'
import useSWR from 'swr'

import { useRouter } from 'next/router'

const fetcher = url => axios.get(url).then(res => res.data)

const page = {
  title : 'Press',
  desc : 'Catch up on all the F2K press posts here.',
  canonical: 'https://f2k.gg/press'
}

const host = 'https://blog.f2k.gg'

export default function Press() {

    const router = useRouter()
    const { slug } = router.query
    console.log(slug)

    if (slug)
    {
        const { data, error } = useSWR(host + `/backend/get_posts.php?singlePosts=true&post-slug=${slug}` ,fetcher(host + `/backend/get_posts.php?singlePosts=true&post-slug=${slug}`))

        if(error)
            return (
                <Layout page = {page} scrolled = {'disabled'}>
                    <div className = 'posts_wrapper container'>
                    <h1>Error loading posts</h1>
                    </div>
                </Layout>
            )

        if(!data)
            return (
                <Layout page = {page} scrolled = {'disabled'}>
                    <div className = 'posts_wrapper container'>
                        <img src='images/spinner.gif' alt='spinner' />
                    </div>
                </Layout>
            )

        return (
            <Layout page = {page} scrolled = {'disabled'} >
                <PostHeader postHeader = { data ? data : '' } />
                <PostBody postBody = { data ? data.body : '' } />
            </Layout>
        )
    }

    else
    {

        const { data, error } = useSWR( host + '/backend/get_posts.php?allPosts=true&post_type=press' ,fetcher(host + '/backend/get_posts.php?allPosts=true&post_type=press'))

        if(error)
            return (
                <Layout page = {page} scrolled = {'disabled'}>
                    <div className={styles.title}>
                        <Title title = {'f2k press'} />
                    </div>
                    <div className = 'posts_wrapper container'>
                    <h1>Error loading posts</h1>
                    </div>
                </Layout>
            )

        if(!data)
            return (
                <Layout page = {page} scrolled = {'disabled'}>
                    <div className={styles.title}>
                        <Title title = {'f2k press'} />
                    </div>
                    <div className = 'posts_wrapper container'>
                        <img src='images/spinner.gif' alt='spinner' />
                    </div>
                </Layout>
            )

        return (
            <Layout page = {page} scrolled = {'disabled'}>
                <div className={styles.title}>
                    <Title title = {'f2k press'} />
                </div>
                <div className = 'posts_wrapper container'>
                    <ul>
                    {data ? data.sort((a,b) => new Date(b.created_at) - new Date(a.created_at)).map((post, index) => 
                    
                            <Link key={index} href={`/press?slug=${post.slug}`} >
                                <a>
                                    <li key={index} style={{ backgroundImage : `url(${host}/static/images/${post.image})`}}>
                                    <div className='post_filter'></div>
                                    <h1>{post.title}</h1>
                                    <span><Moment format="ddd MMM D YYYY">{post.created_at}</Moment></span>
                                    </li>
                                </a>
                            </Link>

                    ) : ''}
                    </ul>
                </div>
            </Layout>
        )
    }
}