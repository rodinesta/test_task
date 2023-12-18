import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCard } from '../store/actions/removeCard'

const Card = (({item}) => {

    const dispatch = useDispatch()

    const date = new Date(item.timestamp)
    const formattedDate = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear()
    const filesize = Math.round(item.filesize / 1000)

    const handleClose = () => {
        dispatch(removeCard(item))
    }

    return (
        <div className="cardItem" >
            <div className="cardImage">
                <img alt={item.image} src={"http://contest.elecard.ru/frontend_data/" + item.image}/>
                <span className="cardClose" onClick={handleClose}>&#10006;</span>
            </div>
            <p>Название: {item.image}</p>
            <p>Категория: {item.category}</p>
            <p>Размер файла: {filesize} Мб</p>
            <p>Дата создания: {formattedDate}</p>
        </div>
    )
})

export default Card