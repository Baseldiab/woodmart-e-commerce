import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations();
  return <div></div>;
}
