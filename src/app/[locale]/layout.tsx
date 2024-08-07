import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { TLocale } from "../components/interfaces/global.interfaces";
import MainNavbar from "../components/navbar/MainNavbar";
import ToTopButton from "../components/buttons/ToTopButton";

const inter = Inter({ subsets: ["latin"] });

export interface LocaleParams {
  locale: TLocale;
}

export async function build_meta_data(locale: TLocale, routes: string[] = []): Promise<Metadata> {
  const t = await getTranslations();
  // const t = await useTranslations();

  routes.unshift(t("app.name"));
  return {
    title: routes.join(" | "),
    description: t("app.description"),
    keywords: "",
  };
}

interface ParamsType extends LocaleParams {}

export async function generateMetadata({
  params: { locale },
}: {
  params: ParamsType;
}): Promise<Metadata> {
  return await build_meta_data(locale);
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: ParamsType;
}) {
  const messages = await getMessages({ locale: "en" });

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <MainNavbar
          // params={{
          //   locale: locale,
          // }}
          />
          <main className="main_content my-6 h-[3000px]">
            {children}

            <ToTopButton />
          </main>
          {/* <Footer
          params={{
            locale: locale,
          }}
        /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
