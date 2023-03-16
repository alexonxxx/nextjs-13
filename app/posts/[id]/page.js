import Link from 'next/Link'

const links = [{
    label: "Home",
    route: "/"
},
{
    label: "About",
    route: "/about"
}]
export default function Post({ params }) {
    const { id } = params;
    return (<div>
        <h1>Post {id}</h1>
    </div>);
}