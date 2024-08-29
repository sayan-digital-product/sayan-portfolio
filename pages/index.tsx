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
import { motion } from 'framer-motion';
import { ReactNode } from 'react'


interface SectionWrapperProps {
  children: ReactNode;  // Define children as ReactNode, which includes anything renderable
  id: string;           // Add other props as required
}


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2
    }
  };
  
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };
  

  const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id }) => (
    <motion.div
      key={id}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      id={id}
      className="md:py-16"
    >
      {children}
    </motion.div>
  );
  return (
    <>
        {/* <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1> */}
          <SEO />
          <main className="md:grid md:grid-cols-12 md:gap-4">
              <section className="hidden md:grid md:justify-items-center md:col-span-1">
                <div className={styles.leftNavBar}>
                  <Navigation />
                </div>
              </section>
              <section className="col-span-9">
                    <section className={`md:grid md:grid-cols-2 md:gap-4 ${styles.home}`} >
                      <div className='hidden md:grid md:grid-cols-1'>
                        <Landing />
                      </div>
                      <div className='grid grid-cols-1 content-center'>
                          <div className="mx-4 my-6 md:my2">
                              <span className="text-4xl md:text-6xl">Sayan Banerjee.</span><br />
                              <span className="text-2xl my-4 md:text-3xl">Crafting Digital Solutions Across Web, Mobile, and Beyond</span><br />
                              <p>
                                <span>I specialize in architecting and developing intuitive interfaces for complex systems, from frontend to backend. </span>
                                <span>With over a decade of experience, I create digital experiences that are not only delightful and effective but also scalable and secure. </span> 
                                <span className='hidden md:text-xl'>My passion extends across various aspects of technology, including performance optimization, DevOps, and AI, ensuring that every solution I build is comprehensive and future-ready.</span>
                              </p>
                          </div>
                      </div>
                    </section>
                    <SectionWrapper id="aboutme">
                      <AboutMe />
                    </SectionWrapper>
                    <SectionWrapper id="skills">
                      <Skills />
                    </SectionWrapper>
                    <SectionWrapper id="projects">
                      <Projects />
                    </SectionWrapper>
                    <SectionWrapper id="experience">
                      <Experience />
                    </SectionWrapper>
                    <section className={`grid grid-cols-1 ${styles.page}`}>
                      <SectionWrapper  id="contact">
                        <Contact />
                      </SectionWrapper>
                    </section>
              </section>
              <section className="hidden md:grid md:justify-items-center md:col-span-2">
                <div className={styles.rightNavBar}>
                  <Menu />
                </div>
              </section>
          </main>
    </>
  )
}
