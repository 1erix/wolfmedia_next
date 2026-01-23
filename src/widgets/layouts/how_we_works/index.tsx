import { ContentHowWeWorks, Images } from '../ui/how_we_works'
import css from './index.module.css'

export default function HowWeWorks() {
    return (
        <section className={css.how_we_works}>
            <h1>Как мы работаем</h1>

            <div className={css.text_images}>
                <div className={css.left_part}>
                    <ContentHowWeWorks />
                </div>

                <div className={css.right_part}>
                    <Images />
                </div>
            </div>
        </section>
    )
}