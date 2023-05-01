import * as React from 'react';

import Typography from '@mui/material/Typography';
import style from './contact.module.css';
import Button from '@mui/material/Button';

export default function ContactCard(){
	return (
        <>
            <section className="mx-12 grid grid-cols-4">
                <div className="col-span-1">

                </div>
                <div className="col-span-2">
                    <Typography variant="h6" className={style.tagLine}>
                        <span>Want to connect? Let us chat! I am always open to hearing from you and sharing ideas. Do not hesitate to reach out and start the conversation.</span>
                    </Typography>
                </div>
            </section>
            <section>
                <Button size="medium" variant="outlined" className={`mt-8 ${style.buttonStyle}`}>
                    <a className="email-link" href="mailto:sayan.official87@gmail.com" rel="noopener noreferrer" target="_blank">Get in touch</a>
                </Button>
            </section>
        </>
    )
}