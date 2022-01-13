import {GetStaticProps} from "next";
import Heading from "../Components/Heading";
import Head from "next/head";
import styles from "../styles/Home.module.scss"
import Socials from "../Components/Socials";
import {socialsType} from "../types";
import {FC} from "react";


export const getStaticProps: GetStaticProps = async () => {

    const response = await fetch(`${process.env.API_HOST}/socials/`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {socials: data},
    }
}

export type homeTypeProps = {
    socials: Array<socialsType>
}


const Home:FC<homeTypeProps> = ({socials}) => {
    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Home</title>
            </Head>
            <Heading text="Hello world! This is my first Next.js application :)"/>
            <Socials socials={socials}/>
        </div>
    )
}
export default Home;
