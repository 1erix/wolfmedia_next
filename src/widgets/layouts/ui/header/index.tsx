'use client'

import Image from "next/image";
import css from './index.module.css'
import { Navigation } from "./navigation";
import { Networks } from "@/shared/ui/social_networks_icons";
import BurgerMenu from "../burger_menu";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }


    return (
        <>
            <header className={css.header}>
                <div className={css.navigation}>

                    <div className={css.burger_menu} onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <Image src='/header/close.svg' alt="" width={16} height={16} />
                        ) : (
                            <Image src='/header/burger-menu.svg' alt="" width={24} height={16} />
                        )}
                    </div>

                    <div className={css.logo}>
                        <Image src='/header/wolfmedia_logo.svg' alt="" width={286} height={70} />
                    </div>

                    <div className={css.logo2}>
                        <Image src='/header/logo2.svg' alt="" width={40} height={40} />
                    </div>


                    <div className={css.navLinks}>
                        <Navigation />
                    </div>
                </div>

                <div className={css.contacts} >

                    <div className={css.networks}>
                        <Networks />
                    </div>

                    <div className={css.phone}>
                        <Image src='/header/phone-call.svg' alt="" width={24} height={24} />
                        <p>+7 495 257 55 65</p>
                    </div>

                    <button className={css.button}>НАПИСАТЬ НАМ</button>
                </div>
            </header>

            <BurgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    )
}