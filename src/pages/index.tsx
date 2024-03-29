import * as React from "react"

import {useEffect, useRef, useState} from "react"
import Link from "next/link"
import Head from "next/head"
import EditHead from "../components/Head"

import styles from "../styles/home.module.scss"
import Header from "../components/Header"

import YouTube from 'react-youtube'

const Page = () => {
    const appName = process.env.serviceName
    const appDesc = process.env.serviceDescription
    return (
        <div>
            <EditHead
            title={appName}
            description={appDesc}
            url={"https://cloudbase.host"} />
            <Header />
            <main className={styles.main}>
                <div className={styles.container_top}>
                <div className={styles.container_left}>
                <h1 className={styles.title + ' ' + styles.back_green}>Devdevdev With CloudBase</h1>
                <p className={styles.subtitle + ' ' + styles.back_green}>You don't have to worry about managing<br/>the project anymore and can focus on development.</p>
                <div className={styles.buttons}>
                    <Link href="/soon"><a><button className={styles.button_black}><span>Let's get right in<span><img src="https://s2.svgbox.net/hero-outline.svg?ic=arrow-right&color=fff" alt="" className={styles.arrow}/></span></span></button></a></Link>
                    <Link href="/docs"><a><button className={styles.button_yellow}><span><img src="https://s2.svgbox.net/octicons.svg?ic=book&color=1A1A1A" className={styles.book}/></span><span>Documentation</span></button></a></Link>
                </div>
                </div>
                <div className={styles.container_right}>
                    <div className={styles.video_box}>
                    </div>
                </div>
                </div>
                <div className={styles.how_to_start_box}>
                    <div className={styles.how_to_start_wrap}>
                    <h2 className={styles.title + ' ' + styles.back_green}>How to Start</h2>
                        <div className={styles.step_list}>
                            <div className={styles.how_to_start_steps}>
                                <h3 className={styles.back_green}>Register/Login with Google</h3>
                                <p className={styles.back_green}>Register for CloudBase with a Google account.</p>
                            </div>
                            <div className={styles.how_to_start_steps}>
                                <h3 className={styles.back_green}>Select an individual or group</h3>
                                <p className={styles.back_green}>You can also create a group later.</p>
                            </div>
                            <div className={styles.how_to_start_steps}>
                                <h3 className={styles.back_green}>Create a project</h3>
                                <p className={styles.back_green}>Create one project per app.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.how_to_start_box}>
                    <div className={styles.how_to_start_wrap}>
                    <h2 className={styles.title + ' ' + styles.back_green}>What can do</h2>
                    <p className={styles.subtitle + ' ' + styles.back_green}>CloudBase is a project management app for developers<br/>that allows you to manage your APIKEY, SNS accounts, deployment status, and status.<br/>Leave the project management to us!</p>
                    </div>
                </div>
                <div className={styles.how_to_start_box}>
                    <div className={styles.how_to_start_wrap}>
                    <h2 className={styles.title + ' ' + styles.back_green}>Investor</h2>
                        <div className={styles.step_list}>
                            <div className={styles.how_to_start_steps}>
                                <h3 className={styles.back_green}>None</h3>
                                <p className={styles.back_green}>Please contact us <a href="mailto:contact@routex.jp">contact@routex.jp</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}


export default Page