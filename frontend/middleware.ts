import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i18n-config";

function parseAcceptLanguage(header?: string | null): string[] {
  if (!header) return [];
  return header
    .split(",")
    .map((part) => part.split(";")[0].trim())
    .filter(Boolean);
}

function getLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language");
  const languages = parseAcceptLanguage(header);

  // ensure locales array
  // @ts-ignore
  const locales: string[] = Array.isArray(i18n.locales)
    ? i18n.locales
    : [i18n.defaultLocale];

  for (const lang of languages) {
    // exact match
    if (locales.includes(lang)) return lang;
    // match primary subtag (e.g. "en-US" -> "en")
    const primary = lang.split("-")[0];
    const found = locales.find(
      (l) => l === primary || l.startsWith(primary)
    );
    if (found) return found;
  }

  return i18n.defaultLocale;
}

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const pathname = request.nextUrl.pathname;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const defaultLocale = i18n.defaultLocale; // 'bn'
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }

  if (!token && !request.nextUrl.pathname.startsWith("/")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/dashboard",
    "/dashboard/:path*",
    "/profile/:path*",
    "/((?!api|login|register|forget-password|blog|blog/:path*|terms-of-service|privacy-policy|about-us|contact-us|_next/static|_next/image|auth|favicon.ico|robots.txt|images|assets|$).*)",
  ],
};
