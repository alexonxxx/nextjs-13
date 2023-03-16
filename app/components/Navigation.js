import Link from 'next/Link'

const links = [{
    label: "Home",
    route: "/"
},
{
    label: "About",
    route: "/about"
},
{
    label: "Post 1",
    route: "/posts/post-1"
}]
export default function Navigation() {
    return (<nav>
        <ul>
            {links.map(link => (
                <li key={link.route}>
                    <Link href={link.route}>
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>);
}