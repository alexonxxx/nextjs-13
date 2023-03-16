import Link from 'next/Link'


export default function Post({ params }) {
    const { id } = params;
    return (<div>
        <h1>Post {id}</h1>
    </div>);
}