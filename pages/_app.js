import '../styles/globals.scss'
import Layout from "../Components/Layout";
import Image from "next/image";
import Pagonia from "../public/pagonia.jpg"
import Head from "next/head";

const MyApp = ({Component, pageProps}) => {
    return (
        <Layout>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Source+Code+Pro:ital,wght@1,300&display=swap" rel="stylesheet"/>
             </Head>
            <main>
                <Component {...pageProps} />
            </main>
            <Image src={Pagonia}
                   height={650}
                   width={500}
                   alt="pagonia"
                   placeholder="blur"
            />
        </Layout>
    )
}

export default MyApp
