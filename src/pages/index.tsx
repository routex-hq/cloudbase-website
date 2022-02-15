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
            url={"https://cloudbase.host/"} />
            <Header />
            <main className={styles.main}>
                <div className={styles.container_top}>
                <div className={styles.container_left}>
                <h1 className={styles.title}>Focus With CloudBase</h1>
                <p className={styles.subtitle}>you no longer have to worry about managing projects<br/>and can focus on dev.</p>
                <div className={styles.buttons}>
                    <Link href="/start"><a><button className={styles.button_black}><span>Let's get right in<span><img src="https://s2.svgbox.net/hero-outline.svg?ic=arrow-right&color=fff" alt="" className={styles.arrow}/></span></span></button></a></Link>
                    <Link href="/docs"><a><button className={styles.button_yellow}><span><img src="https://s2.svgbox.net/octicons.svg?ic=book&color=1A1A1A" className={styles.book}/></span><span>Documentation</span></button></a></Link>
                </div>
                <h2 className={styles.used_by}>used by</h2>
                <div className={styles.used_by_logos}>
                    <img src="/img/socialdog_inc_logo_white.svg" className={styles.social_dog} alt="socialdog"/>
                    <img src="/img/zenn-logo.png" className={styles.zenn} alt="zenn"/>
                    <img src="/img/Discord-Logo_Wordmark-Black.svg" className={styles.discord} alt="discord"/>
                </div>
                </div>
                <div className={styles.container_right}>
                <YouTube videoId="X-RWqWfzTKM" />
                </div>
                </div>
            </main>
        </div>
    )
}


export default Page