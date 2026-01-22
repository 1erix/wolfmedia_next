import Image from "next/image";
import Link from "next/link";
import css from './index.module.css'
import { Navigation } from "./navigation";
import { Networks } from "@/shared/ui/social_networks_icons";

export default function Header() {
    return (
        <header className={css.header}>
            <div className={css.navigation}>
                <div className="logo">
                    <Link href={'/'}><Image src='/header/wolfmedia_logo.svg' alt="" width={286} height={70} /></Link>
                </div>
                <Navigation />
            </div>

            <div className={css.contacts} >
                <Networks />

                <div className={css.phone}>
                    <Image src='/header/phone-call.svg' alt="" width={24} height={24} />
                    <p>+7 495 257 55 65</p>
                </div>

                <button className={css.button}>НАПИСАТЬ НАМ</button>
            </div>
        </header>
    )
}