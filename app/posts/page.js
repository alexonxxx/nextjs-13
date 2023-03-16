import Link from 'next/Link'

const fetchPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());
}

export default async function PostsPage() {
    const posts = await fetchPosts();
    console.log(posts);
    debugger;
    return (<div>
        {posts.slice(0, 10).map(post => (
            <article key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </article>
        ))}
    </div>);
}