import Head from 'next/head'

interface Props {
    title: string;
    description: string;
    url: string;
}

export default ({ title, description, url }: Props): JSX.Element => {
    return (
        <Head>
            <title>{title} | {description}【CloudBase】</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />
            <meta property="og:title" content={title}/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={url}/>
            <meta property="og:site_name" content="CloudBase"/>
            <meta property="og:image" content={"https://cloudbase.host/img/ogp.png"}/>
            <meta property="og:description" content={description}/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="msapplication-TileColor" content="#66ff99"/>
            <meta name="theme-color" content="#66ff99"/>
        </Head>
    )
}
