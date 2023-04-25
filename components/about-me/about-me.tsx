import * as React from 'react'

import style from "./about-me.module.css";

export default function AboutMeSection({data}: {data : string}) {
    return(
        <>
            <section className={style.aboutMeContainer}>
                <p>
                    {data}
                </p>
            </section>
        </>
    )
}