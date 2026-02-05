'use client'

import { useEffect } from 'react'
import css from './index.module.css'
import { Navigation } from '../header/navigation'
import Image from 'next/image'

interface BurgerMenuProps {
    isOpen: boolean,
    onClose: () => void
}

export default function BurgerMenu({ isOpen, onClose }: BurgerMenuProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const handleClick = () => {
        onClose()
    }

    if (!isOpen) {
        return null
    }
    return (
        <div>
            {isOpen && (
                <div className={css.overlay} onClick={onClose}></div>
            )}

            <div className={` ${css.burger_menu} ${isOpen ? css.open : ''}`}>
                <div className={css.navigation}>
                    <Navigation />
                </div>

                <div className={css.contacts}>
                    <div className={css.phone}>
                        <Image src='/header/phone-call.svg' alt="" width={24} height={24} />
                        <p>+7 495 257 55 65</p>
                    </div>

                    <div className={css.btn}>
                        <button>Написать нам</button>
                    </div>
                </div>
            </div>
        </div>
    )
}