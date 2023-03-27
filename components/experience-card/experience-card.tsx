
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Fade } from "react-reveal";
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';



export default function ExperienceCard({data}){
	return (
		<section className="mx-12 my-2">
			<Fade bottom duration={2000}>
                <Card variant="outlined">
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                        }
                        title={data.role}
                        subheader={data.date}
                    />
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                        </Typography>
                        <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {data.desc}
                        </Typography>
                            <div>
                                <ul>
                                    {data.descBullets
                                        ? data.descBullets.map((desc) => {
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
			</Fade>
		</section>
	);
};

