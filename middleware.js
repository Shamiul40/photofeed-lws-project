
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

let locales = ["en", "bn"];
let defaultLocale = "en";

export function getLocale(request) {
  const acceptLanguage = request.headers.get("accept-language") ?? undefined;
  const headers = { "accept-language": acceptLanguage };
  const languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
}

export async function middleware(request) {
  const pathName = request.nextUrl.pathname;

  const pathNameIsMissingInLocale = locales.every(
    (locale) =>
      !pathName.startsWith(`/${locale}/`) && !pathName.startsWith(`/${locale}`),
  );

  if (pathNameIsMissingInLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(`/${locale}/${pathName}`, request.url),
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|assets|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
