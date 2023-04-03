
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
		<section className="mx-4 my-2">
			{/* <Fade bottom duration={2000}> */}
                <Card variant="outlined" elevation={0}>
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                        }
                        title={item.role}
                        subheader={item.date}
                    />
                    <CardContent>

                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {item.desc}
                        </Typography>
                            <div>
                                <ul>
                                    {item.descBullets
                                        ? item.descBullets.map((desc) => {
                                                return <li key={desc}>{desc}</li>;
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

