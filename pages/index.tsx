import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navigation from '@/components/navigation/navigation'
import SEO from '@/components/seo/seo'
import Landing from '@/containers/landing/landing'
import Experience from '@/containers/experience/experience'
import Skills from '@/containers/skills/skills'
import Contact from '@/containers/contact/contact'
import CodingLottie from '@/components/lottie/coding'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        {/* <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1> */}
          <SEO />
          <main className={styles.main}>
              {/* <Navigation /> */}
              <section className={`grid grid-cols-2 ${styles.home}`} >
                <div className='grid grid-cols-1'>
                  <Landing />
                </div>
                <div className='grid grid-cols-1'>
                  <section className="grid grid-cols-1">
                  </section>
                  <section>
                    <div className={`grid grid-cols-1 ${styles.nameFont}`}>
                      SAYAN BANERJEE
                    </div>
                    <div>
                      <Navigation />
                    </div>
                  </section>
                </div>
              </section>
              <section className={styles.page}>
                <Experience />
              </section>
              <section className={styles.pageDark}>
                <Skills />
              </section>
              <section className={`grid grid-cols-1 ${styles.page}`}>
                <section className="grid grid-cols-1">
                  <Contact />
                </section>
              </section>
          </main>
    </>
  )
}
