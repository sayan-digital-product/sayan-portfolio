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
							<div className="pl-4 md:wrapHeading justify-flex-center">
								<Typography variant="h5" className={`display-3 text-info ${styles.pageHeading}`}>Projects</Typography>
							</div>
						</div>
						<section className="md:grid md:grid-cols-3 md:full-height">
									{projects.map((data, i) => {
										return <ProjectCard key={i} {...data} />;
									})}
						</section>
				</section>
	);
};
