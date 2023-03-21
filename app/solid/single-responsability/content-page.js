'use client';
// has access to state and effects just like Page components
// in the `pages` directory.
export default function HomePage({ posts }) {
    return (
        <div>
            {posts.slice(0, 10).map(post => (
                <article key={`${post.id}`}>
                    < h2 > {post.title}</h2>
                    <p>{post.body}</p>
                </article>
            ))}
        </div>
    );
}