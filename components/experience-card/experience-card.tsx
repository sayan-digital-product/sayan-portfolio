
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
// import { Fade } from "react-reveal";
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { ExperienceModel } from '@/interfaces/experience-data';


export default function ExperienceCard(item: ExperienceModel){

    //const item:ExperinceItemModel = data.data;
	return (
		<section className={item.colspan ? `mx-4 my-2 col-span-${item.colspan}` : 'mx-4 my-2'}>
			{/* <Fade bottom duration={2000}> */}
                <Card variant="outlined" elevation={0} className="full-height card-background">
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            FIS
                        </Avatar>
                        }
                        title={item.role}
                        subheader={<Typography sx={{color: '#c5c5c5', fontSize:'12px'}}>{item.date}</Typography>}
                    />
                    <CardContent>

                        <Typography sx={{ fontSize: '14px' }} gutterBottom>
                            {item.desc}
                        </Typography>
                            <div>
                                <ul>
                                    {item.descBullets
                                        ? item.descBullets.map((desc) => {
                                                return <li key={desc}><Typography sx={{ fontSize: '14px' }} gutterBottom>{desc}</Typography></li>;
                                        })
                                        : null}
                                </ul>
                            </div>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
			{/* </Fade> */}
		</section>
	);
};

