
import Head from "next/head";
import ContactInfo from "../../Components/ContactInfo";

const Id = ({contact}) => {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
        <ContactInfo contact={contact}/>
        </>
            );
};

export default Id;