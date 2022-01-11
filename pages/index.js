import Heading from "../Components/Heading";
import Head from "next/head";
import styles from "../styles/Home.module.scss"

const Home = () => {
    return (
        <div className={styles.wrapper}>
        <Head>
            <title>Home</title>
        </Head>
        <Heading text="Hello world! This is my first Next.js application :)"/>
        </div>
    )
}
export default Home;
