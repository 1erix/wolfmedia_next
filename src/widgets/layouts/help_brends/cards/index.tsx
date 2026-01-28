import Image from 'next/image'
import css from './index.module.css'
import { CardsType, HELP_CARDS } from './models'

export const HelpCards = () => {
    return (
        <div className={css.cards}>
            {HELP_CARDS.map((item: CardsType, index) => (
                <div key={index} className={css.card}>
                    <div className={css.bgd_img}>
                        <Image src={item.image} alt='' width={100} height={100} />
                    </div>
                    <div className={css.text}>
                        <p>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}