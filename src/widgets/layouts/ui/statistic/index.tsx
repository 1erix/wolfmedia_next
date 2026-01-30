import Image from 'next/image'
import css from './index.module.css'

export default function Statistic() {
    return (
        <section className={css.statistic}>
            <h1 className={css.main_text}>Издательство новых медиа</h1>

            <div className={css.blocks_arrow}>
                <div className={css.blocks}>
                    <div className={css.auditory}>
                        <h1>100 000 000</h1>
                        <p>наша аудитория</p>
                    </div>

                    <div className={css.readers}>
                        <h1>12 000 000</h1>
                        <p>ежедневно нас читают</p>
                    </div>
                </div>
                <Image src='/statistic/downArrow.svg' alt='' width={24} height={12} />
            </div>

        </section>
    )
}