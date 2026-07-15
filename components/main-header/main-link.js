"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./main-link.module.css";

export default function MainLink({ href, children }) {
  const path = usePathname();
  console.log(path);
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.active} ${classes.link}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
