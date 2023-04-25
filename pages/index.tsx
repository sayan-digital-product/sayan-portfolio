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
import TextAnimation from '@/components/text-animation/text-animation'
import Typography from '@mui/material/Typography'
import AboutMe from '@/containers/about-me/about-me'
import Menu from '@/components/menu/menu'
import Projects from '@/containers/projects/projects'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        {/* <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1> */}
          <SEO />
          <main className="grid grid-cols-12 gap-4">
              <section className="grid justify-items-center col-span-1">
                <div className={styles.leftNavBar}>
                  <Navigation />
                </div>
              </section>
              <section className="col-span-9">
                    <section className={`grid grid-cols-2 gap-4 ${styles.home}`} >
                      <div className='grid grid-cols-1'>
                        <Landing />
                      </div>
                      <div className='grid grid-cols-1 content-center'>
                          <div className="">
                            <Typography variant="h2">
                              <span className={styles.nameFont}>Sayan Banerjee.</span>
                            </Typography>
                            <Typography variant='h6'>
                              <p><span className={styles.tagFont}>I develop applications for Web and Mobile.</span></p><br />
                            </Typography>
                              <p><span>I specialize in architecting and developing intuitive interfaces for complex systems. </span>
                                <span>Through my work, I am creating digital experiences that are as delightful and effective.</span>
                              </p>
                          </div>
                      </div>
                    </section>
                    <section id="aboutme" className={styles.page}>
                      <AboutMe />
                    </section>
                    <section id="skills" className={styles.page}>
                      <Skills />
                    </section>
                    <section id="experience" className={styles.page}>
                      <Experience />
                    </section>
                    <section id="projects" className={styles.page}>
                      <Projects />
                    </section>
                    <section id="contact" className={`grid grid-cols-1 ${styles.page}`}>
                      <section className="grid grid-cols-1">
                        <Contact />
                      </section>
                    </section>
              </section>
              <section className="grid justify-items-center col-span-2">
                <div className={styles.rightNavBar}>
                  <Menu />
                </div>
              </section>
          </main>
    </>
  )
}
