import {GetStaticProps} from "next";
import Heading from "../../Components/Heading";
import Head from "next/head";
import Link from "next/link";
import {contactType} from "../../types";
import {FC} from "react";


export const getStaticProps:GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    if(!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {contacts: data},
    }
};

type contactsTypeProps = {
    contacts: Array<contactType>
}

const Contacts:FC<contactsTypeProps> = ({contacts}) => {

    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <Heading text={"Contacts list:"}/>
            <ul>
                {contacts && contacts.map(({id, name, email}) => (
                    <li key={id}>
                        <Link href={`/contacts/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
        </>

    );
};

export default Contacts;