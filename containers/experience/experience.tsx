import React from "react";
import { experience } from "@/core/portfolio";
import ExperienceCard from "@/components/experience-card/experience-card";
import styles from '@/styles/Home.module.css'
import { Typography } from "@mui/material";

export default function Experience() {
	return experience && (
				<section className="section section-lg">
						<div className="d-flex p-4">
							<div>
								<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
									<i className="ni ni-briefcase-24 text-info" />
								</div>
							</div>
							<div className={`pl-4 ${styles.wrapHeading}`}>
								<Typography variant="h5" className={`display-3 text-info ${styles.pageHeading}`}><span className={styles.brightBlue}>04.</span> Experience</Typography>
							</div>
						</div>
						<section className="grid grid-cols-3 full-height">
									{experience.map((data, i) => {
										return <ExperienceCard key={i} {...data} />;
									})}
						</section>
				</section>
	);
};
