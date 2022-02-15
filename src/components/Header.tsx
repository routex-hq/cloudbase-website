import * as React from "react"
import Link from 'next/link'
import Head from "next/head"
import { CSSProperties, FunctionComponent } from 'react'

import styles from "../styles/components/Header.module.scss"


const Footer: FunctionComponent = () => {
    return (
    <div>
    <Head>
        <link href="https://fonts.cdnfonts.com/css/product-sans" rel="stylesheet"/>
        <link rel="stylesheet" href="https://use.typekit.net/suh1soi.css"/>
    </Head>
    <header className={styles.header}>
        <Link href="/"><a>
            <div><span className={styles.logo}><img className={styles.logo_img} src="/img/logo-mark.svg"/></span></div>
        </a></Link>
        <div className={styles.links}>
            <Link href="/price"><a>Price</a></Link>
            <Link href="/docs"><a>Docs</a></Link>
        </div>
    </header>
    </div>
  )
}
export default Footer