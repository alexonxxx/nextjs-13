import { languages, fallbackLng } from './app/settings'
import { NextResponse } from 'next/server'

export function middleware(request) {
    // Check if there is any supported locale in the pathname
    const pathname = request.nextUrl.pathname
    const pathnameIsMissingLocale = languages.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )
    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = fallbackLng;
        return NextResponse.redirect(
            new URL(`/${locale}/${pathname}`, request.url)
        )
    }


}

export const config = {
    matcher: ['/((?!solid|api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
}