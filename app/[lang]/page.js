import { notFound } from 'next/navigation';
const dictionary = {
    es: {
        title: "Inicio"
    },
    en: {
        title: "Home"
    }
}
export default function Home({ params: { lang } }) {
    const translations = dictionary[lang];
    return (<h1>{translations.title}</h1>);
}