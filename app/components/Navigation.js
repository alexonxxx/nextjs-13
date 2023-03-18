"use client";
import { usePathname } from 'next/navigation';
import { languages } from '../settings'
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

const redirectedPathName = (locale, pathname) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
}

export default function Navigation({ lang }) {
    const pathname = usePathname();

    return (<nav className="nav">
        <ul>
            {links.map(link => (
                <li className="nav-item" key={link.route}>
                    <Link href={`/${lang}${link.route}`}>
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
        <ul>
            {languages.map(locale => (
                <li key={"lang_" + locale}>
                    <Link href={redirectedPathName(locale, pathname)}>
                        {locale}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>);
}