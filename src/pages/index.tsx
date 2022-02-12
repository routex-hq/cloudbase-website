import * as React from "react"

import Link from "next/link"
import Head from "next/head"
import EditHead from "../components/Head"

import styles from "../styles/home.module.scss"

const Page = () => {
    const appName = process.env.serviceName
    const appDesc = process.env.serviceDescription
    return (
        <div>
            <EditHead
            title={appName}
            description={appDesc}
            url={"https://cloudbase.host/"} />
            <main className={styles.main}>
                <h1>Hello Future users!</h1>
                <p>With CloudBase, you no longer have to worry about managing projects and can focus on dev.</p>
                <p>It is currently under development and is scheduled to be released at the beginning of 2023.</p>
                <p>If you are a company or VC who is interested in this service, please send a message to contact@routex.jp</p>
                <p>If you are a developer interested in this service, please send a message to hi@kan.run. Let's work together</p>
                <h2>Why CloudBase???</h2>
                <p>It is a SaaS that allows you to collectively manage and check the various APIKeys, deployment information, AWS instance status, official project accounts, and various other things for the project you are developing.</p>
            </main>
        </div>
    )
}


export default Page