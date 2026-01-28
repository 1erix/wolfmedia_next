import Image from 'next/image'
import css from './index.module.css'
import { MANS, MansType } from './models'

export const Mans = () => {
    return (
        <div className={css.all}>
            {MANS.map((item: MansType, index) => (
                <div key={index} className={css.card_mail}>
                    <div className={`${css.card} ${index === 0 ? css.firstCard : ''}`}>
                        <div className={css.mans}>
                            <Image src={item.image} alt='' width={205} height={345} />
                        </div>
                        <div className={css.circle}></div>
                    </div>

                    <div className={css.mail}>
                        <Image src={item.arrow} alt='' width={16} height={16} />
                        <p>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}