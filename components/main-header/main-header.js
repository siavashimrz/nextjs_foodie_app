import Link from "next/link";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import MainLink from "./main-link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header-style.module.css";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />

      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A table with dishes of food" priority />
          <p>NextLevel Food</p>
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <MainLink href="/meals">Browse Meals</MainLink>
            </li>
            <li>
              <MainLink href="/community">Foodies Community</MainLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
