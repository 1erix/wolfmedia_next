import Image from 'next/image'
import css from './index.module.css'
import { BIG_CARDS, BigCardsType } from './models'

export const BigCards = () => {
    return (
        <div className={css.cards_text}>
            <p className={css.p}>Мы подошли к решению этой проблемы технологично - разработали собственный софт, который:</p>
            <div className={css.big_cards}>
                {BIG_CARDS.map((item: BigCardsType, index) => (
                    <div className={css.card} key={index}>
                        <div className={css.bgd_img}>
                            <Image src={item.image} alt='' width={100} height={100} />
                        </div>

                        <div className={css.text}>
                            <div dangerouslySetInnerHTML={{ __html: item.text }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}