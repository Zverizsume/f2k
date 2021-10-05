import React, { Component } from 'react'
import Head from 'next/head'
import Navbar from '../components/navbar'

import { initGA, logPageView } from '../utils/analytics'

export const siteTitle = 'F2K'
export const siteUrl = 'https://f2k.gg'
export const author = 'F2K'

export default class Layout extends Component {

  componentDidMount() {
    const ReactPixel =  require('react-facebook-pixel');
    ReactPixel.default.init('378718253304591');
    ReactPixel.default.pageView();

    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render() {
    return (
      <div>

          <Head>

              <title>{siteTitle + ' / ' + this.props.page.title}</title>

              <link rel="icon" href="/favicon.ico" />
              <link rel="canonical" href={this.props.page.canonical} />

              {/* <meta
                  name="description"
                  content={this.props.page.desc}
              />

              <meta
                  name="title"
                  content={this.props.page.title}
              />
              <meta
                  name="author"
                  content={author}
              />
              <meta
                  name="siteUrl"
                  content={siteUrl}
              /> */}
              
              {/* og meta tags */}
              <meta property="og:type" content={'website'}></meta>
              <meta name="title" property="og:title" content={this.props.page.title}></meta>
              <meta name="image" property="og:image" content={'https://f2k.gg/images/f2k_logo.png'}></meta>
              <meta name="description" property="og:description" content={this.props.page.desc}></meta>
              <meta name="author" content={author}></meta>
              
              <meta name="og:title" content={this.props.page.title} />
              <meta name="og:image" content={'https://f2k.gg/images/f2k_logo.png'} />
              <meta name="og:url" content={siteUrl} />
              <meta name="og:type" content={'website'} />
              <meta name="og:description" content={this.props.page.desc} />

              {/* twitter meta tags */}

              <meta name="twitter:card" content="summary" />
              <meta name="twitter:creator" content={author} />
              <meta name="twitter:title" content={this.props.page.title} />
              <meta name="twitter:description" content={this.props.page.desc} />
              <meta name="twitter:image" content={'https://f2k.gg/images/f2k_logo.png'} />

              <link
                rel="stylesheet"
                type="text/css"
                charset="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
              />

              <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
              />

          </Head>

          <Navbar scrolled = {this.props.scrolled} />

          <main>{this.props.children}</main>

      </div>
    )
  }
}