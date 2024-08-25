
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { motion } from 'framer-motion';
// import { Fade } from "react-reveal";
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { ProjectModel } from '@/interfaces/project-data';


export default function ProjectCard(item: ProjectModel){

    //const item:ExperinceItemModel = data.data;
	return (
		<section className={item.colspan ? `mx-4 my-2 col-span-${item.colspan}` : 'mx-4 my-2'}>
             <motion.div whileHover={{ scale:1.04}} className='full-height'>
			{/* <Fade bottom duration={2000}> */}
                <Card variant="outlined" elevation={0} className="full-height card-background">
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        </Avatar>
                        }
                        title={item.name}
                        subheader={<Typography sx={{color: '#c5c5c5', fontSize:'12px'}}>{item.summary}</Typography>}
                    />
                    <CardContent>
                            <div>
                                <ul>
                                    {item.desc
                                        ? item.desc.map((desc) => {
                                                return <li key={desc}><Typography sx={{ fontSize: '14px' }} gutterBottom>{desc}</Typography></li>;
                                        })
                                        : null}
                                </ul>
                            </div>
                    </CardContent>
                    <CardActions>
                        {/* <Button size="small">Learn More</Button> */}
                    </CardActions>
                </Card>
            </motion.div>
		</section>
	);
};

