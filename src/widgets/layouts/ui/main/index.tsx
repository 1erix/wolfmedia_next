import css from './index.module.css'
import { STATISTICS_BY_YEARS, StatisticsType } from "./statistics/models"
import Image from "next/image"
import { TEXT_WOLFMEDIA, TextType } from "./text/models"

export const StatisticsByYears = () => {
    return (
        <div className={css.all}>
            {STATISTICS_BY_YEARS.map((item: StatisticsType, index) => (
                <div key={index} className={css.left_block}>
                    <div className={css.title_arrow}>
                        <p>{item.title}</p>
                        <Image src='/statistic/triangle.svg' alt='' width={8} height={7} />
                    </div>

                    <div className={css.description_arrow}>
                        <Image src='/statistic/darkTriangle.svg' alt='' width={8} height={7} />
                        <p>{item.description}</p>
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
                    <p dangerouslySetInnerHTML={{ __html: item.text }} />
                </div>
            ))}
        </div>
    )
}