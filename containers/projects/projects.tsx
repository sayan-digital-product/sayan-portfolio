import React from "react";
import { projects } from "@/core/portfolio";
import ProjectCard from "@/components/project-card/project-card";

import styles from '@/styles/Home.module.css'
import { Typography } from "@mui/material";

export default function Experience() {
	return projects && (
				<section className="section section-lg">
						<div className="d-flex p-4">
							<div>
								<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
									<i className="ni ni-briefcase-24 text-info" />
								</div>
							</div>
							<div className={`pl-4 ${styles.wrapHeading}`}>
								<Typography variant="h5" className={`display-3 text-info ${styles.pageHeading}`}><span className={styles.brightBlue}>03.</span> Projects</Typography>
							</div>
						</div>
						<section className="grid grid-cols-3 full-height">
									{projects.map((data, i) => {
										return <ProjectCard key={i} {...data} />;
									})}
						</section>
				</section>
	);
};
