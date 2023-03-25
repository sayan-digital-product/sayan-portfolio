import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navigation from '@/components/navigation/navigation'
import SEO from '@/components/seo/seo'
import Landing from '@/containers/landing/landing'
import Experience from '@/containers/experience/experience'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        {/* <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1> */}
          <SEO />
          <main className={styles.main}>
              <Navigation />
              <section className={`grid grid-cols-2 ${styles.home}`} >
                <div className='grid grid-cols-1'>
                  <Landing />
                </div>
                <div className='grid grid-cols-4'>
                  <section className="grid grid-cols-1">

                  </section>
                  <section className="grid grid-cols-3">
                    Hello
                  </section>
                 
                </div>
              </section>
              <section className={styles.page}>
                <Experience />
              </section>
          </main>
    </>
  )
}
