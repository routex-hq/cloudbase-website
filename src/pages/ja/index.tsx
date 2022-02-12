import * as React from "react"

import Link from "next/link"
import Head from "next/head"
import EditHead from "../../components/Head"

import styles from "../../styles/home.module.scss"

const Page = () => {
    const appName = process.env.serviceName
    const appDesc = process.env.serviceDescription
    return (
        <div>
            <EditHead
            title={appName}
            description={appDesc}
            url={"https://cloudbase.host/ja/"} />
            <main className={styles.main}>
                <header className={styles.header}><Link href="/"><a><p className={styles.logo}>CloudBase</p></a></Link></header>
                <h2 className={styles.stressfree}>GoStress<br/>freeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</h2>
                <Link href="/home"><a><button className={styles.start_button}><span>Start</span></button></a></Link>
                <p className={styles.descripton}>CloudBaseを使えば、プロジェクトの管理に悩まされることなく、開発に集中することができます。</p>
            </main>
        </div>
    )
}


export default Page