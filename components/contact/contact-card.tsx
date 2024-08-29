import * as React from 'react';

import Typography from '@mui/material/Typography';
import style from './contact.module.css';
import Button from '@mui/material/Button';

export default function ContactCard(){
	return (
        <>
            <section className="mx-4 md:mx-12 md:grid md:grid-cols-4">
                <div className="col-span-1">

                </div>
                <div className="col-span-2">
                    <Typography variant="h6" className={style.tagLine}>
                        <span>Want to connect? Let us chat! I am always open to hearing from you and sharing ideas. Do not hesitate to reach out and start the conversation.</span>
                    </Typography>
                </div>
            </section>
            <section>
                <Button size="medium" variant="outlined" className={`${style.buttonStyle}`}>
                    <a className="email-link" href="mailto:sayan.official87@gmail.com" rel="noopener noreferrer" target="_blank">Get in touch</a>
                </Button>
            </section>
        </>
    )
}