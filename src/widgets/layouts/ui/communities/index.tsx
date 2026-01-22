import Image from 'next/image'
import css from './index.module.css'
import { COMMUNITIES_DATA, CommunitiesType } from './models'

export const Communities = () => {
    return (
        <div className={css.all}>
            {COMMUNITIES_DATA.map((item: CommunitiesType, index) => (
                <div className={css.card} key={index}>
                    <Image src={item.icon} alt='' width={100} height={100} />
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    )
}