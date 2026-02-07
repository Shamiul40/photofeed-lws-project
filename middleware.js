import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";


let locales = ["en", "bn"];
let defaultLocale = "en";

export function getLocale (request) {

    const acceptLanguage = request.headers.get("accept-language");
    const headers = {"accept-language" : acceptLanguage};
    const languages = new Negotiator({headers}).languages()

    return match(languages, locales, defaultLocale)

}



export async function middleware(request) {
    const pathName = request.nextUrl.pathName;

    const pathNameIsMissingInLocale =locales.every(locale=>
        !pathName.
    )
    
}