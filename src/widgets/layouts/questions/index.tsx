import css from './index.module.css'
import { Mails } from './mails'
import { Mans } from './mans'

export default function Questions() {
    return (
        <section className={css.questions}>
            <h1 className={css.h1}>Есть вопрос или предложение?</h1>
            <h2>Напиши нам!</h2>

            <div className={css.mans_mails}>
                <div className={css.mans}>
                    <Mans />

                </div>

                <div className={css.mails}>

                    <Mails />
                </div>
            </div>
        </section>
    )
}