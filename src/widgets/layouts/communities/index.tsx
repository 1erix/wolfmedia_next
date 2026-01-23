import { CommunitiesData } from '../ui/communities'
import css from './index.module.css'

export default function Communities() {
    return (
        <div className={css.communities}>
            <h1>Более 150 тематических сообществ</h1>

            <CommunitiesData />

            <div className={css.mini_text}>
                <p>Присутствуем на всех популярных платформах</p>
            </div>
        </div>
    )
}