import * as React from 'react';
import { skills } from '@/core/portfolio';

import styles from '@/styles/Home.module.css'
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import "./skills.module.css";

import AngularIcon from "@/brand-icons/angular/angular-icon";
import DynamicContent from '@/components/dynamic-component/dynamic-component';
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
						<Typography variant="h5" className={`display-3 text-info ${styles.pageHeading}`}>SKILLS</Typography>
					</div>
				</div>
			</section>
			<section className="grid grid-cols-3 gap-3 mx-4 my-4">
				<section>
					<Paper className="">
						<div className="grid justify-center my-2">
							<Typography variant='h5'>
									{skills.software?.title}
							</Typography>
						</div>
						<div className="grid grid-cols-6 p-4">
							<DynamicComponent data={skills.software.data} />
						</div>
					</Paper>
				</section>
				{/* <section>	
					<Paper className="">
						<div className="grid justify-center my-2">
							<Typography variant='h5'>
								{skills.concepts?.title}
							</Typography>
						</div>
						<div className="grid grid-cols-6 p-4">
							{skills?.concepts?.data?.map((data, i) => {
								return <span key={i} className={`py-4 ${data.logos}`}></span>;
							})}
						</div>
					</Paper>
				</section>
				<section>
					<Paper className="">
						<div className="grid justify-center my-2">
							<Typography variant='h5'>
								{skills.tools?.title}
							</Typography>
						</div>
						<div className="grid grid-cols-6 p-4">
							{skills?.tools?.data?.map((data, i) => {
								return <i key={i} title={data.skillName} className={`py-4 ${data.logos}`}></i>;
							})}
						</div>
					</Paper>
				</section> */}
			</section>
		</>
    )

}