import '../styles/globals.scss'
import Layout from "../Components/Layout";
import Image from "next/image";
import Pagonia from "../public/pagonia.jpg"
import Head from "next/head";
import {AppProps} from "next/app";

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <Layout>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Source+Code+Pro:ital,wght@1,300&display=swap" rel="stylesheet"/>
             </Head>
            <main>
                <Component {...pageProps} />
            </main>
            <Image src={Pagonia}
                   height={250}
                   width={500}
                   alt="pagonia"
                   placeholder="blur"
            />
        </Layout>
    )
}

export default MyApp
