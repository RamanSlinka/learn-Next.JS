import { FC } from "react";

// type headingProps = {
//     tag: any || string
//     text: string
// }

const Heading:FC<any> = ({tag, text}) => {
    const Tag = tag || 'h1';
    return (
        <Tag>{text}</Tag>
    );
};

export default Heading;