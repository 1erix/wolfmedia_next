import { StatisticsByYears, TextWolfMedia } from '../ui/main'
import css from './index.module.css'

export default function AboutUs() {
    return (
        <section className={css.about_us}>
            <h1 className={css.text}>о нас</h1>
            <div className={css.all}>
                <div className={css.text_btn}>
                    <TextWolfMedia />

                    <button>подробнее   </button>
                </div>

                <div className={css.statistics}>
                    <StatisticsByYears />
                </div>
            </div>
        </section>
    )
}