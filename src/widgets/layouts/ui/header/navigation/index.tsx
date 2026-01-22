'use client'

import Link from "next/link"
import { NAVIGATION_LINKS, NavigationLinksType } from "./models"
import css from './index.module.css'
import clsx from "clsx"

export const Navigation = () => {
    return (
        <nav className={clsx(css.nav)}>
            {NAVIGATION_LINKS.map((item: NavigationLinksType, index) => (
                <Link href={item.href} className={css.navLink} key={index}>{item.title}</Link>
            ))}
        </nav>
    )
}