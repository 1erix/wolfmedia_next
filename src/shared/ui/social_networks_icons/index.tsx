import Image from 'next/image'
import css from './index.module.css'
import { NetworksIconsType, SOCIAL_NETWORKS_ICONS } from './icons/models'

export const Networks = () => {
    return (
        <div className={css.social_networks}>
            {SOCIAL_NETWORKS_ICONS.map((item: NetworksIconsType, index) => (
                <Image src={item.href} alt='' width={24} height={24} key={index} />
            ))}
        </div>
    )
}