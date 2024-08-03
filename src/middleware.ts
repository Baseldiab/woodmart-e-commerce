// import createMiddleware from "next-intl/middleware";

// export default createMiddleware({
//   locales: ["ar", "en"],
//   defaultLocale: "en",
// });

// export const config = {
//   // Skip all paths that should not be internationalized. This example skips the
//   // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
//   matcher: ["/((?!api|_next|.*\\..*).*)"],
// };

import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ar'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher:["/((?!api|_next|.*\\..*).*)"]
};