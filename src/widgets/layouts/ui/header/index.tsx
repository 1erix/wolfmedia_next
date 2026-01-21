import Image from "next/image";
import Link from "next/link";
import css from './index.module.css'

export default function Header() {
    return (
        <header className={css.header}>
            <div className={css.navigation}>
                <div className="logo">
                    <Link href={'/'}><Image src='/header/wolfmedia_logo.svg' alt="" width={286} height={70} /></Link>
                </div>

                <nav className={css.nav}>
                    <Link href={'/pages/about_us'} >О НАС </Link>
                    <Link href={'/portfolio'} >ПОРТФОЛИО </Link>
                    <Link href={'/services'} >УСЛУГИ </Link>
                    <Link href={'/contacts'} >КОНТАКТЫ</Link>
                </nav>
            </div>

            <div className={css.contacts} >
                <div className={css.social_networks}>
                    <Image src='/header/vkontakte.svg' alt="" width={24} height={24} />
                    <Image src='/header/odnoklassniki.svg' alt="" width={24} height={24} />
                    <Image src='/header/facebook.svg' alt="" width={24} height={24} />
                    <Image src='/header/twitter.svg' alt="" width={24} height={24} />
                </div>

                <div className={css.phone}>
                    <Image src='/header/phone-call.svg' alt="" width={24} height={24} />
                    <p>+7 495 257 55 65</p>
                </div>

                <button className="border-2 px-[16px] py-[7px] text-[#FFFFFF]">НАПИСАТЬ НАМ</button>
            </div>
        </header>
    )
}