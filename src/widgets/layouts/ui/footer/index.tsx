import Image from 'next/image'
import css from './index.module.css'
import { Networks } from '@/shared/ui/social_networks_icons'

export default function Footer() {
    return (
        <footer className={css.footer}>
            <div className={css.logo}>
                <Image src='/footer/logo.svg' alt='' width={208} height={51} />
            </div>

            <div className={css.logo2}>
                <Image src='/footer/footer_logo2.svg' alt='' width={51} height={51} />
            </div>

            <div className={css.p}>
                <p>Copyright 2019 (c) All rights reserved.</p>
            </div>

            <div className={css.right_part}>
                <Networks />

                <div className={css.phone}>
                    <Image src='/footer/phone-call.svg' alt='' width={24} height={24} />
                    <p>+7 495 257 55 65</p>
                </div>
            </div>
        </footer>
    )
}