import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import { Fade } from "react-reveal";
import CardHeader from '@mui/material/CardHeader';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle  from '@mui/icons-material/AccountCircle';
import Email  from '@mui/icons-material/Email';
import TextareaAutosize from '@mui/base/TextareaAutosize';

export default function ContactCard(){
	return (
		<section className="mx-12 my-2">
			{/* <Fade right duration={2000}> */}
                <Card variant="outlined">
                    <CardHeader
                        title="Want to connect with me?"
                        subheader="Please feel free to reach out"
                    />
                    <CardContent className="grid grid-cols-1">
                        <FormControl variant="outlined" className="mb-6">
                            <div>
                                <InputLabel htmlFor="outline-adornment-name">Your Name</InputLabel>
                                <OutlinedInput
                                    id="outline-adornment-name"
                                    startAdornment={<InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                    'aria-label': 'name',
                                    }}
                                    label="Your Name"
                                />
                            </div>
                        </FormControl>
                        <FormControl variant="outlined" className="mb-6">
                                <div>
                                    <InputLabel htmlFor="outline-adornment-email">Email</InputLabel>
                                    <OutlinedInput
                                        id="outline-adornment-email"
                                        startAdornment={<InputAdornment position="start">
                                            <Email />
                                        </InputAdornment>}
                                        aria-describedby="outlined-weight-helper-text"
                                        inputProps={{
                                        'aria-label': 'email',
                                        }}
                                        label="Email"
                                    />
                            </div>
                        </FormControl>
                        <FormControl variant="outlined" className="mb-6">
                                <div>
                                <TextareaAutosize
                                    aria-label="Message"
                                    placeholder="Message"
                                    />
                                </div>
                        </FormControl>
                        <FormControl>
                            <Button variant="contained" size="large" className="bg-blue-500 hover: bg-blue-700">
                                Submit
                            </Button>
                        </FormControl>
                    </CardContent>
                </Card>
            {/* </Fade> */}
        </section>
    )
}