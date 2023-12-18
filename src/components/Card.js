import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCard } from '../store/actions/removeCard'

const Card = (({item}) => {

    const dispatch = useDispatch()

    const date = new Date(item.timestamp)
    const formattedDate = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear()
    const filesize = Math.round(item.filesize / 1000)

    const handleClose = () => {
        dispatch(removeCard(item.image))
    }

    return (
        <div className="card-page__item" >
            <div className="card-page__image">
                <img alt={item.image} src={"http://contest.elecard.ru/frontend_data/" + item.image}/>
                <span className="card-page__close" onClick={handleClose}>&#10006;</span>
            </div>
            <p>Название: {item.image}</p>
            <p>Категория: {item.category}</p>
            <p>Размер файла: {filesize} Мб</p>
            <p>Дата создания: {formattedDate}</p>
        </div>
    )
})

export default Card