import { useTranslations } from "next-intl";
import Logo from "../svg/Logo";
import Link from "next/link";

export default function MainNavbar() {
  const t = useTranslations();
  return (
    <>
      <nav>
        <Link href={"/"}>
          <Logo />
        </Link>
      </nav>
    </>
  );
}
