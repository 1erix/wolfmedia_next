import Image from 'next/image'
import css from './index.module.css'
import { COMMUNITIES_DATA, CommunitiesType } from './cards/models'
import { HOVER_CONTENT, HoverContentType } from './hover_content/models'

export const CommunitiesData = () => {
    return (
        <div className={css.all}>
            {COMMUNITIES_DATA.map((item: CommunitiesType, index) => (
                <div className={css.card} key={index}>
                    <Image src={item.icon} alt='' width={100} height={100} />
                    <p>{item.title}</p>
                </div>
            ))}

            {/* <HoverContent /> */}
        </div>
    )
}

export const HoverContent = () => {
    return (
        <div className={css.card_arrow}>
            <Image src='/statistic/triangle.svg' alt='' width={15} height={8} />
            <div className={css.all_hover_content}>
                {HOVER_CONTENT.map((item: HoverContentType, index) => (
                    <div key={index} className={css.hover_content}>
                        <Image src={item.image} alt='' width={80} height={80} />
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

