import * as React from 'react';
import { skills } from "@/core/portfolio";

import styles from '@/styles/Home.module.css'
import { Typography } from "@mui/material";

export default function Skills() {

    return skills && (
        <section className="section section-lg">
				<div className="d-flex p-4">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
							<i className="ni ni-briefcase-24 text-info" />
						</div>
					</div>
					<div className={`pl-4 ${styles.wrapHeading}`}>
						<Typography variant="h5" className={`display-3 text-info ${styles.pageHeading}`}>SKILLS</Typography>
					</div>
				</div>
        </section>
        
    )

}