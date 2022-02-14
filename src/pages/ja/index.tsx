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
            </main>
        </div>
    )
}


export default Page