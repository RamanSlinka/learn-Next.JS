
import Heading from "../Components/Heading";
import styles from "../styles/Home.module.scss"
import {useRouter} from "next/router";
import {useEffect} from "react";


const Error = () => {
    const router = useRouter();
    useEffect  (() => {
       setTimeout(() => {
       router.push('/');
       }, 3000
       )
    },[router])

    return (
        <div className={styles.wrapper}>
            <Heading text={"404"}/>
            <Heading tag="h2" text={"Something is going wrong :("}/>
        </div>
    );
};

export default Error;