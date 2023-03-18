import './globals.css'
import Navigation from '../components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import { languages } from '../settings'

export const metadata = {
  title: 'Next 13 js App',
  description: 'Next 13 js App description',
}



export default function RootLayout({ children, params: { lang } }) {
  return (
    <html lang={lang}>
      <head>
        <link rel="shortcut icon" href="favicon.ico" />
      </head>
      <body>
        <header>
          <Navigation lang={lang} />
        </header>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  )
}
