import * as React from 'react';
import { skills } from '@/core/portfolio';

import styles from '@/styles/Home.module.css'
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import style from "./skills.module.css";

import AngularIcon from "@/brand-icons/angular/angular-icon";
import DynamicComponent from '@/components/dynamic-component/dynamic-component';



export default function Skills() {

	const components = {
		AngularIcon
	}

    return skills && (
		<>
			<section className="section section-lg pageStyle">
				<div className="d-flex p-4">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
							<i className="ni ni-briefcase-24 text-info" />
						</div>
					</div>
					<div className={`pl-4 ${styles.wrapHeading}`}>
						<Typography variant="h5" className={`display-3 text-info ${styles.pageHeading}`}><span className={styles.brightBlue}>02. </span>Skills</Typography>
					</div>
				</div>
			</section>
			<section className="mx-4 my-4">
				<Paper elevation={2} className="grid grid-cols-3 gap-3 full-height card-background">
					<section className="col-span-2">
						<section className={`full-height ${style.appFontColor}`}>
							<div className="grid justify-center my-2">
									<Typography variant='h5'>
											{skills.software?.title}
									</Typography>
							</div>
						</section>
					</section>
					<section>
							<div className="grid justify-center my-2">
								<Typography variant='h5'className={style.appFontColor}>
										{skills.software?.title}
								</Typography>
							</div>
							<div className="grid grid-cols-6 p-4">
								<DynamicComponent data={skills.software.data} />
							</div>
					</section>
				</Paper>
			</section>
		</>
    )

}