import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore
  const locales: string[] = i18n.locales;

  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if no locale is found in the pathname
  // if (pathnameIsMissingLocale) {
  //   const locale = getLocale(request);

  //   return NextResponse.redirect(
  //     new URL(
  //       `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
  //       request.url
  //     )
  //   );
  // }

  if (pathnameIsMissingLocale) {
    const defaultLocale = i18n.defaultLocale; // 'bn'
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/dashboard",
    "/dashboard/:path*",
    "/((?!api|login|register|forget-password|blog|blog/:path*|terms-of-service|privacy-policy|about-us|contact-us|_next/static|_next/image|auth|favicon.ico|robots.txt|images|assets|$).*)",
  ],
};
