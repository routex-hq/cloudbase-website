import * as React from "react"
import Link from 'next/link'
import Head from "next/head"
import { CSSProperties, FunctionComponent } from 'react'

import styles from "../styles/components/Header.module.scss"


const Footer: FunctionComponent = () => {
    return (
    <div>
    <header className={styles.header}>
            <div><span className={styles.logo}>
        <Link href="/"><a><img className={styles.logo_img} src="/img/logo-mark-font.svg"/></a></Link></span></div>
        <div className={styles.links}>
            <Link href="/ja"><a>ja</a></Link>
            <Link href="/price"><a>Price</a></Link>
            <Link href="/docs"><a>Docs</a></Link>
        </div>
    </header>
    </div>
  )
}
export default Footer