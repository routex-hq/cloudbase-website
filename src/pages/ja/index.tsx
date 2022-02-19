import * as React from "react"

import {useEffect, useRef, useState} from "react"
import Link from "next/link"
import Head from "next/head"
import EditHead from "../../components/Head"

import styles from "../../styles/home.module.scss"
import Header from "../../components/Header"

import YouTube from 'react-youtube'

const Page = () => {
    const appName = process.env.serviceName
    const appDesc = process.env.serviceDescription
    return (
        <div>
            <EditHead
            title={appName}
            description={appDesc}
            url={"https://cloudbase.host/jp"} />
            <Header />
            <main className={styles.main}>
                <div className={styles.container_top}>
                <div className={styles.container_left}>
                <h1 className={styles.title + ' ' + styles.back_green}>Devdevdev With CloudBase</h1>
                <p className={styles.subtitle + ' ' + styles.back_green}>プロジェクトの管理を気にする必要がなくなり<br/>開発に集中できるようになります</p>
                <div className={styles.buttons}>
                    <Link href="/soon"><a><button className={styles.button_black}><span>Let's get right in<span><img src="https://s2.svgbox.net/hero-outline.svg?ic=arrow-right&color=fff" alt="" className={styles.arrow}/></span></span></button></a></Link>
                    <Link href="/docs"><a><button className={styles.button_yellow}><span><img src="https://s2.svgbox.net/octicons.svg?ic=book&color=1A1A1A" className={styles.book}/></span><span>Documentation</span></button></a></Link>
                </div>
                </div>
                <div className={styles.container_right}>
                    <div className={styles.video_box}>
                        <YouTube videoId="dBOSUER_5T4" className={styles.video} />
                    </div>
                </div>
                </div>
                <div className={styles.how_to_start_box}>
                    <div className={styles.how_to_start_wrap}>
                    <h2 className={styles.title + ' ' + styles.back_green}>始め方</h2>
                        <div className={styles.step_list}>
                            <div className={styles.how_to_start_steps}>
                                <h3 className={styles.back_green}>Googleでログイン/登録</h3>
                                <p className={styles.back_green}>Googleアカウントでログインすることが可能です</p>
                            </div>
                            <div className={styles.how_to_start_steps}>
                                <h3 className={styles.back_green}>個人/団体を選択</h3>
                                <p className={styles.back_green}>プロジェクトを管理する個人/団体を作成します</p>
                            </div>
                            <div className={styles.how_to_start_steps}>
                                <h3 className={styles.back_green}>プロジェクトを作成</h3>
                                <p className={styles.back_green}>プロジェクトを作成し管理を開始します</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.how_to_start_box}>
                    <div className={styles.how_to_start_wrap}>
                    <h2 className={styles.title + ' ' + styles.back_green}>何ができる？</h2>
                    <p className={styles.subtitle + ' ' + styles.back_green}>一言でいうと「開発者のためのプロジェクト管理ツール」です。<br/>CloudBaseを使用することでプロジェクトのSNSアカウント、APIKEY、<br/>デプロイ状況、ステータスなどを管理することができます。<br/>プロジェクト管理はCloudBaseにお任せください！完全無料です。</p>
                    </div>
                </div>
                <div className={styles.how_to_start_box}>
                    <div className={styles.how_to_start_wrap}>
                    <h2 className={styles.title + ' ' + styles.back_green}>投資家</h2>
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