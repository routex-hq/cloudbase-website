import * as React from "react"

import {useEffect, useRef, useState} from "react"
import Link from "next/link"
import Head from "next/head"
import EditHead from "../components/Head"

import styles from "../styles/home.module.scss"
import Header from "../components/Header"


const Page = () => {
    const appName = process.env.serviceName
    const appDesc = process.env.serviceDescription
    return (
        <div>
            <EditHead
            title={appName}
            description={appDesc}
            url={"https://cloudbase.host/soon"} />
            <Header />
            <main className={styles.main}>
                <div className={styles.container_top}>
                <div className={styles.container_left}>
                <h1 className={styles.title + ' ' + styles.back_green}>still a ways off</h1>
                <p className={styles.subtitle + ' ' + styles.back_green}>All the latest information on CloudBase will be posted on Twitter.</p>
                <div className={styles.buttons}>
                    <Link href="https://twitter.com/cloudbase_dev"><a><button className={styles.button_black}><span>Follow<span><img src="https://s2.svgbox.net/hero-outline.svg?ic=arrow-right&color=fff" alt="" className={styles.arrow}/></span></span></button></a></Link>
                </div>
                </div>
                <div className={styles.container_right}>
                    <div className={styles.video_box}>
                    </div>
                </div>
                </div>
                <div className={styles.how_to_start_box}>
                    <div className={styles.how_to_start_wrap}>
                    <h2 className={styles.title + ' ' + styles.back_green}>Roadmap</h2>
                        <div className={styles.step_list}>
                            <div className={styles.how_to_start_steps}>
                                <h3 className={styles.back_green}>Until Oct. 2022</h3>
                                <p className={styles.back_green}>devdevdev devdevdev devdevdev devdevdev devdevdev devdevdev </p>
                            </div>
                            <div className={styles.how_to_start_steps}>
                                <h3 className={styles.back_green}>Oct. 2022</h3>
                                <p className={styles.back_green}>Incorporated in Japan</p>
                            </div>
                            <div className={styles.how_to_start_steps}>
                                <h3 className={styles.back_green}>Nov. 2022</h3>
                                <p className={styles.back_green}>Launch CloudBase</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.how_to_start_box}>
                    <div className={styles.how_to_start_wrap}>
                    <h2 className={styles.title + ' ' + styles.back_green}>Investor</h2>
                        <div className={styles.step_list}>
                            <div className={styles.how_to_start_steps}>
                                <h3 className={styles.back_green}>None</h3>
                                <p className={styles.back_green}>We are currently recruiting. Please contact us at <a href="mailto:contact@routex.jp">contact@routex.jp</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}


export default Page