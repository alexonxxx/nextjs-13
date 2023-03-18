import Link from 'next/Link'

const fetchPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts", { next: { revalidate: 60 } }).then(res => res.json());
}

export default async function PostsPage({ params: { lang } }) {
    const posts = await fetchPosts();
    return (<div>
        {posts.slice(0, 10).map(post => (
            <article key={`${post.id}`}>
                <Link href={`/${lang}/posts/${post.id}`}>
                    < h2 > {post.title}</h2>
                </Link>
                <p>{post.body}</p>
            </article>
        ))}
    </div>);
}