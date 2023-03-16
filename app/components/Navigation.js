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
    label: "Posts",
    route: "/posts"
}]
export default function Navigation() {
    return (<nav className="nav">
        <ul>
            {links.map(link => (
                <li className="nav-item" key={link.route}>
                    <Link href={link.route}>
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>);
}