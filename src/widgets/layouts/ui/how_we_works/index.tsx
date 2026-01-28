'use client'

import { useState, useEffect } from "react"
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
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(0)
    const [visibleImages, setVisibleImages] = useState<ImageType[]>([])
    const [extendedImages, setExtendedImages] = useState<ImageType[]>([])

    useEffect(() => {
        if (IMAGES.length > 0) {
            const extended = [...IMAGES, IMAGES[0]]
            setExtendedImages(extended)
            setVisibleImages(extended.slice(0, 4))
        }
    }, [])

    const handleSmallImageClick = (visibleIndex: number) => {
        const mainIndex = (currentImageIndex + visibleIndex) % IMAGES.length
        setSelectedImageIndex(mainIndex)
    }

    const handleArrowClick = () => {
        const nextIndex = currentImageIndex + 1

        if (nextIndex >= IMAGES.length) {
            setCurrentImageIndex(0)
        } else {
            setCurrentImageIndex(nextIndex)
        }

        const newVisibleImages = extendedImages.slice(nextIndex, nextIndex + 4)

        if (newVisibleImages.length < 4) {
            const needed = 4 - newVisibleImages.length
            const fromStart = extendedImages.slice(0, needed)
            newVisibleImages.push(...fromStart)
        }

        setVisibleImages(newVisibleImages)
    }

    const displayImage = selectedImageIndex !== null
        ? IMAGES[selectedImageIndex]
        : IMAGES[currentImageIndex]

    const getMainImageIndex = (visibleIndex: number): number => {
        const indexInExtended = currentImageIndex + visibleIndex
        if (indexInExtended >= IMAGES.length) {
            return indexInExtended - IMAGES.length
        }

        return indexInExtended
    }

    return (
        <div className={css.right_part}>
            <div className={css.big_image}>
                {displayImage && (
                    <Image
                        src={displayImage.image}
                        alt=""
                        width={770}
                        height={433}
                        className={css.big_image_img}
                    />
                )}
            </div>
            <div className={css.sliders}>
                <div className={css.small_images}>
                    {visibleImages.map((item: ImageType, visibleIndex: number) => {
                        const mainIndex = getMainImageIndex(visibleIndex)
                        const isSelected = selectedImageIndex === mainIndex
                        const isLastInRow = visibleIndex === 3

                        return (
                            <div
                                key={`${mainIndex}-${visibleIndex}`}
                                className={`${css.small_image} ${isSelected ? css.selected : ''} ${isLastInRow ? css.last_image : ''}`}
                                onClick={() => handleSmallImageClick(visibleIndex)}
                            >
                                <Image
                                    src={item.image}
                                    alt=""
                                    width={195}
                                    height={109}
                                    className={css.small_image_img}
                                />
                            </div>
                        )
                    })}
                </div>
                <div className={css.arrow_container}>
                    <div className={css.arrow} onClick={handleArrowClick}>
                        <Image src='/how_we_works/arrow.svg' alt="" width={32} height={32} />
                    </div>
                </div>
            </div>
        </div>
    )
}