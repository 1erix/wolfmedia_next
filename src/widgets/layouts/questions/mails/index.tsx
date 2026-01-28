import Image from 'next/image'
import css from './index.module.css'
import { MAIL, MailType } from './models'

export const Mails = () => {
    return (
        <div className={css.mails}>
            {MAIL.map((item: MailType, index) => (
                <div className={css.mail} key={index}>
                    <div className={css.arrow_h1}>
                        <Image src={item.arrow} alt='' width={16} height={16} />
                        <h1>{item.mail}</h1>
                    </div>

                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
}