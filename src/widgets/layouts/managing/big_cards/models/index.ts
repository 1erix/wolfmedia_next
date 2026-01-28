export type BigCardsType = {
    image: string,
    text: string
}

export const BIG_CARDS: Array<BigCardsType> = [
    {
        image: '/managing/big_cards/bar-chart.svg',
        text: 'Даёт доступ к <span>детальной статистике,</span> как одной группы, так и всех сообществ вместе'
    },
    {
        image: '/managing/big_cards/hearts.svg',
        text: 'Выявляет наиболее <span>популярные посты</span>'
    },
    {
        image: '/managing/big_cards/stars-group.svg',
        text: 'Позволяет оценивать <span>качество контента</span> и следить за авторами постов'
    },
    {
        image: '/managing/big_cards/virus-bug.svg',
        text: 'Сообщает об <span>ошибках</span>'
    }
]