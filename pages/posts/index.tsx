import {GetStaticProps} from "next";
import Heading from "../../Components/Heading";
import Head from "next/head";
import Link from "next/link";
import {postType} from "../../types";
import {FC} from "react";

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    if(!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {posts: data},
    }
};


type postsTypeProps = {
    posts: Array<postType>
}
const Posts:FC<postsTypeProps> = ({posts}) => {

    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <Heading text={"Posts list:"}/>
            <ul>
                {posts && posts.map(({id, title}) => (
                    <li key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Posts;