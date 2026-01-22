import css from './index.module.css'

export default function Communities() {
    return (
        <section className={css.communities}>
            <h1>Более 150 тематических сообществ</h1>

            <Communities />

            <p>Присутствуем на всех популярных платформах</p>
        </section>
    )
}