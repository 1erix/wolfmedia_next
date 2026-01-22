import css from './index.module.css'
import { STATISTICS_BY_YEARS, StatisticsType } from "./statistics/models"
import Image from "next/image"
import { TEXT_WOLFMEDIA, TextType } from "./text/models"

export const StatisticsByYears = () => {
    return (
        <div className={css.all}>
            {STATISTICS_BY_YEARS.map((item: StatisticsType, index) => (
                <div className={css.years} key={index}>
                    <div className={css.title_arrow}>
                        <p className={css.title}>{item.title}</p>
                        <Image src='/statistic/triangle.svg' alt="" width={8} height={7} />
                    </div>
                    <div className={css.description_arrow}>
                        <Image src='/statistic/darkTriangle.png/' alt='' width={14} height={7} />
                        <p className={css.description}>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export const TextWolfMedia = () => {
    return (
        <div className={css.text_wolfmedia}>
            {TEXT_WOLFMEDIA.map((item: TextType, index) => (
                <div key={index}>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    )
}