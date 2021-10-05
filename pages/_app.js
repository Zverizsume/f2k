import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'swiper/swiper-bundle.min.css';
import { AnimatePresence, motion } from "framer-motion"

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial = {{ opacity: 0 }}
        animate = {{ opacity: 1 }}
        exit = {{ opacity: 0 }}
        transition = {{ duration: 1 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
