
import ContentPage from './content-page';

const fetchPosts = () => {
    //https://jsonplaceholder.typicode.com
    //
    return fetch("https://github.com/sponsors/typicodefsafsda", { next: { revalidate: 60 } }).then(res => res.json());
}

export default async function Page() {
    // Fetch data directly in a Server Component
    const posts = await fetchPosts();
    // Forward fetched data to your Client Component
    return <ContentPage posts={posts} />;

    // try {
    //     const posts = await fetchPosts();
    //     // Forward fetched data to your Client Component
    //     return <ContentPage posts={posts} />;
    // } catch (err) {
    //     return <div>Error component</div>;
    // }

}