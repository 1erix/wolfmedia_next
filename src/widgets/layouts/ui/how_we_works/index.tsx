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
    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        // Проверяем ширину экрана при загрузке и изменении размера
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 320)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)

        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    useEffect(() => {
        if (IMAGES.length > 0) {
            const extended = [...IMAGES, IMAGES[0]]
            setExtendedImages(extended)
            // На мобильных устройствах показываем только 3 картинки
            if (isMobile) {
                setVisibleImages(extended.slice(0, 3))
            } else {
                setVisibleImages(extended.slice(0, 4))
            }
        }
    }, [isMobile])

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

        // Для мобильных показываем 3 картинки, для остальных - 4
        const imagesToShow = isMobile ? 3 : 4
        let newVisibleImages = extendedImages.slice(nextIndex, nextIndex + imagesToShow)

        if (newVisibleImages.length < imagesToShow) {
            const needed = imagesToShow - newVisibleImages.length
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
                        // На мобильных устройствах последняя картинка (3-я) получает класс last_image
                        const isLastInRow = isMobile
                            ? visibleIndex === 2  // на мобильных последняя - 3-я
                            : visibleIndex === 3  // на десктопе последняя - 4-я

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