// import { notFound } from "next/navigation";
// import { getRequestConfig } from "next-intl/server";

// // Can be imported from a shared config
// const locales = ["en", "ar"];

// export default getRequestConfig(async ({ locale }) => {
//   // Validate that the incoming `locale` parameter is valid
//   if (!locales.includes(locale as any)) notFound();

//   return {
//     messages: (await import(`../locale/${locale}.json`)).default,
//   };
// });

// noinspection TypeScriptCheckImport
// noinspection TypeScriptCheckImport

// import { getRequestConfig } from "next-intl/server";

// export const get_messages = async (locale: string) =>
//   (await import(`../locale/${locale}.json`)).default;
// export default getRequestConfig(async ({ locale }) => ({
//   messages: await get_messages(locale),
// }));

import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
const locales = ['en', 'ar'];
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
