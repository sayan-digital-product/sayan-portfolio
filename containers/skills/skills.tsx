import * as React from 'react';
import { skills } from '@/core/portfolio';

import styles from '@/styles/Home.module.css'
import { Typography } from "@mui/material";
import style from "./skills.module.css";

import AngularIcon from "@/brand-icons/angular/angular-icon";
import DynamicComponent from '@/components/dynamic-component/dynamic-component';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


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
					<div className="pl-4 md:wrapHeading justify-flex-center">
						<Typography variant="h5" className={`display-3 text-info ${styles.pageHeading}`}>Skills</Typography>
					</div>
				</div>
			</section>
			<section className="mx-4 my-4 md:grid md:grid-cols-4 md:gap-3 md:full-height">
				{/* <Paper elevation={2} className="grid grid-cols-3 gap-3 full-height card-background"> */}
					<section className="md:col-span-3 md:p-4">
						<section className={style.appFontColor}>
								{skills.software.items.map((item: string, index: number) => {
									return <div key={index} className='grid grid-cols-12 pb-4'> <SettingsOutlinedIcon className={`col-span-1 ${style.brightFont}`}/><span className='col-span-11'>{item}</span></div>
								})}
						</section>
					</section>
					<section>
						<div className="hidden md:grid md:grid-cols-4 md:p-4">
							<DynamicComponent data={skills.software.data} />
						</div>
					</section>
				{/* </Paper> */}
			</section>
		</>
    )

}