
import ContentPage from './content-page';

const fetchPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts", { next: { revalidate: 60 } }).then(res => res.json());
}

export default async function Page() {
    // Fetch data directly in a Server Component
    const posts = await fetchPosts();
    // Forward fetched data to your Client Component
    return <ContentPage posts={posts} />;
}