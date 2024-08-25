import * as React from 'react';
import styles from "@/styles/Home.module.css";
import style from "./menu.module.css";
import { Link } from 'react-scroll';

export default function Menu() {
  return (
    <header className="header-global">
      <section className="navbar-main navbar-transparent navbar-light headroom" id="navbar-main">
        <div className="grid-rows-4 gap-4">
          <ul className={`align-items-lg-center ml-lg-auto ${style.menuContainer}`}>
            <li className={style.menuItem}>
              <Link to="aboutme" spy={true} smooth={true} duration={500} className={`display-3 text-info ${style.calibreFont} ${style.menuLink}`}>
                <span className={styles.brightBlue}>01.</span> About Me
              </Link>
            </li>
            <li className={style.menuItem}>
              <Link to="skills" spy={true} smooth={true} duration={500} className={`display-3 text-info ${style.calibreFont} ${style.menuLink}`}>
                <span className={styles.brightBlue}>02.</span> Skills
              </Link>
            </li>
            <li className={style.menuItem}>
              <Link to="projects" spy={true} smooth={true} duration={500} className={`display-3 text-info ${style.calibreFont} ${style.menuLink}`}>
                <span className={styles.brightBlue}>03.</span> Projects
              </Link>
            </li>
			      <li className={style.menuItem}>
              <Link to="experience" spy={true} smooth={true} duration={500} className={`display-3 text-info ${style.calibreFont} ${style.menuLink}`}>
                <span className={styles.brightBlue}>04.</span> Experience
              </Link>
            </li>
			
			      <li className={style.menuItem}>
              <Link to="contact" spy={true} smooth={true} duration={500} className={`display-3 text-info ${style.calibreFont} ${style.menuLink}`}>
                <span className={styles.brightBlue}>05.</span> Contact
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
}


// export default function Menu(){
//     return(
//         <header className="header-global">
// 				<section className="navbar-main navbar-transparent navbar-light headroom" id="navbar-main">
//                         <div className="grid-rows-4 gap-4">
//                             <ul	className={`align-items-lg-center ml-lg-auto ${style.menuContainer}`}>
// 								<li className={`${style.menuItem}`}>
// 									<a className={`display-3 text-info ${style.calibreFont} ${style.menuLink}`} href="#aboutme"><span className={styles.brightBlue}>01.</span> About Me</a>
// 								</li>
// 								<li className={`${style.menuItem}`}>
// 									<a className={`display-3 text-info ${style.calibreFont} ${style.menuLink}`} href="#skills"><span className={styles.brightBlue}>02.</span> Skills</a>
// 								</li>
// 								<li className={`${style.menuItem}`}>
// 									<a className={`display-3 text-info ${style.calibreFont} ${style.menuLink}`} href="#experience"><span className={styles.brightBlue}>03.</span> Experience</a>
// 								</li>
// 								<li className={`${style.menuItem}`}>
// 									<a className={`display-3 text-info ${style.calibreFont} ${style.menuLink}`} href="#projects"><span className={styles.brightBlue}>04.</span> Projects</a>
// 								</li>
// 								<li className={`${style.menuItem}`}>
// 									<a className={`display-3 text-info ${style.calibreFont} ${style.menuLink}`} href="#contact"><span className={styles.brightBlue}>05.</span> Contact</a>
// 								</li>
// 							</ul>
//                         </div>
// 				</section>
// 			</header>
//     )
// }