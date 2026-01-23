import Image from "next/image"
import { IMAGES, ImageType } from "./images/models"
import { CONTENT, ContentType } from "./text/models"
import css from './index.module.css'

export const ContentHowWeWorks = () => {
    return (
        <div className={css.left_part}>
            {CONTENT.map((item: ContentType, index) => (
                <div key={index} className={css.form}>
                    <div dangerouslySetInnerHTML={{ __html: item.text }}></div>
                </div>
            ))}
        </div>
    )
}

export const Images = () => {
    return (
        <div className={css.right_part}>
            <div className={css.big_image}></div>
            <div className={css.sliders}>
                {IMAGES.map((item: ImageType, index) => (
                    <div key={index}>
                        <Image src={item.image} alt="" width={195} height={109} />
                    </div>
                ))}
                <div className={css.arrow}>
                    <Image src='/how_we_works/arrow.svg' alt="" width={32} height={32} />
                </div>
            </div>
        </div>
    )
}