import React from 'react'

const Card = (({item}) => {

    var date = new Date(item.timestamp)
    var formattedDate = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear()

    var filesize = Math.round(item.filesize / 1000)

    return (
        <div className="cardItem" >
            <div className="cardImage">
                <img alt={item.image} src={"http://contest.elecard.ru/frontend_data/" + item.image}/>
            </div>
            <p>Название: {item.image}</p>
            <p>Категория: {item.category}</p>
            <p>Размер файла: {filesize} Мб</p>
            <p>Дата создания: {formattedDate}</p>
        </div>
    )
})

export default Card