import { HelpCards } from './cards'
import css from './index.module.css'

export default function HelpBrends() {
    return (
        <section className={css.help_brends}>
            <h1>Помогаем брендам наладить коммуникацию с аудиторией</h1>

            <p className={css.p}>Социальные сети - идеальная площадка для размещения нативной рекламы, она встраивается в ленту пользователя, вызывает большее доверие у аудитории, обходит блокировщики рекламы, и органически набирает огромные охваты.</p>

            <HelpCards />

            <div className={css.btn}>
                <button>Рекламное сотрудничество</button>
            </div>
        </section>
    )
}