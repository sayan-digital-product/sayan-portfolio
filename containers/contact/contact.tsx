import * as React from 'react';
import { skills } from "@/core/portfolio";

import styles from '@/styles/Home.module.css'
import { Typography } from "@mui/material";
import ContactCard from '@/components/contact/contact-card';
import CodingLottie from '@/components/lottie/coding';

export default function Contact() {

    return (
        <section className="section section-lg">
				<section className="d-flex p-4">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
							<i className="ni ni-briefcase-24 text-info" />
						</div>
					</div>
					<div className={`pl-4 ${styles.wrapHeading}`}>
						<Typography variant="h5" className={`display-3 text-info ${styles.pageHeading}`}>CONTACT</Typography>
					</div>
				</section>
                <section className="grid grid-cols-1 mt-10">
					{/* <section className="grid grid-cols-1">
                  		<CodingLottie animationPath="/lottie/waiting.json" />
                	</section> */}
					<section className={`grid grid-cols-1 ${styles.justifyCenter}`}>
						<ContactCard />
					</section>
                </section>
        </section>
        
    )

}