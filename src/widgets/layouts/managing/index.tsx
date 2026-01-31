import css from './index.module.css'
import { BigCards } from './big_cards'
import { MiniCards } from './mini_cards'

export default function Managing() {
    const youtubeVideoId = 'gnzYZ_6RmgA'
    return (
        <section className={css.managing}>
            <h1>Мы полностью автоматизировали работу по управлению сообществами</h1>

            <p className={css.p}>Чем больше сообществ в активе, тем больше времени требуется на планирование, ведение и сбор статистики.</p>

            <BigCards />
            <div className={css.cards_video}>
                <MiniCards />

                <div className={css.video}>
                    <iframe
                        src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                        width="770"
                        height="433"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ border: 'none' }}
                    />
                </div>

                <button className={css.btn}>подробнее</button>
            </div>
        </section>
    )
}