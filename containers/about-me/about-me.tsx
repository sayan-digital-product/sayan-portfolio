import Typography from '@mui/material/Typography';
import * as React from 'react';

import styles from '@/styles/Home.module.css'
import style from "./about-me.module.css";
import Paper from '@mui/material/Paper';
import  AboutMeSection from '@/components/about-me/about-me';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import {aboutMe } from "@/core/portfolio";

export default function AboutMe() {
    return(
        <>
            <section className="section section-lg">
						<div className="d-flex p-4">
							<div>
								<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
									<i className="ni ni-briefcase-24 text-info" />
								</div>
							</div>
							<div className="pl-4 md:wrapHeading justify-flex-center">
								<Typography variant="h5" className={`display-3 text-info ${styles.pageHeading}`}> About Me</Typography>
							</div>
						</div>
			</section>
            <section className="mx-4 md:my-4 grid grid-cols-1 gap-3 full-height">
				{/* <Paper elevation={2} className="grid grid-cols-3 gap-3 full-height card-background"> */}
					<section className="col-span-1">
						<section className={`full-height ${style.appFontColor}`}>
							<div className="grid justify-center my-2">
									{aboutMe.desc.map((data: string, index:number) => {
										return  <div key={index} className='grid grid-cols-12 pb-4'> <SettingsOutlinedIcon className={`col-span-1 ${style.brightFont}`} /><span className='col-span-11'><AboutMeSection key={index} data={data} /></span></div>
									})}
							</div>
						</section>
					</section>
					{/* <section>
							<div className="grid justify-center my-2">
								<Typography variant='h5'className={style.appFontColor}>
										
								</Typography>
							</div>
							<div className="grid grid-cols-6 p-4">
								
							</div>
					</section> */}
				{/* </Paper> */}
			</section>
        </>
    )
}