import * as React from "react"

import EditHead from "../components/Head"
import Link from "next/link"

import styles from "../styles/home.module.scss"

const Page = () => {
    const appName = process.env.serviceName
    const appDesc = process.env.serviceDescription
    return (
        <div>
            <EditHead
            title={appName}
            description={appDesc}
            url={"https://cloudbase.host/home/"} />
            <main className={styles.main}>
                <h1>DevDevDev</h1>
                <p>With CloudBase, you no longer have to worry about managing projects and can focus on dev.</p>
                <p>now developing...</p>
                <Link href="/"><a><span>Back</span></a></Link>
            </main>
        </div>
    )
}


export default Page