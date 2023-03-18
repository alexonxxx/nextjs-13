import Link from 'next/Link'
import Comments from '/app/components/Comments'
const fetchPosts = (id) => {
    return fetch("https://jsonplaceholder.typicode.com/posts/" + id, { next: { revalidate: 60 } }).then(res => res.json());
}

export default async function Post({ children, params: { id } }) {
    const post = await fetchPosts(id);
    return (<div>
        <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <h3> Comments </h3>
            <Comments post={post.id} />
        </article>
    </div >);
}