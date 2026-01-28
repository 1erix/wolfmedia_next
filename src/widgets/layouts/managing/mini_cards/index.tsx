import Image from 'next/image'
import css from './index.module.css'
import { MINI_CARDS, MiniCardsType } from './models'

export const MiniCards = () => {
    return (
        <div className={css.cards_other}>
            <p className={css.p}>Услуги для администраторов</p>
            <div className={css.mini_cards}>
                {MINI_CARDS.map((item: MiniCardsType, index) => (
                    <div className={css.card} key={index}>
                        <Image src={item.image} alt='' width={44} height={44} />
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>

            <button>Подробнее</button>
        </div>
    )
}