import React, { useEffect, useState } from "react";
import { Pagination, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import Card from "./Card";

const CardList = () => {
    const data = useSelector(state => state.data)
    const removedCards = useSelector(state => state.removedCards)
    const pageSize = 8
    const [items, setItems] = useState([])
    const [pageData, setPageData] = useState([])
    const [pagination, setPagination] = useState({
        count: Math.ceil(data.length / pageSize),
        from: 0,
        to: pageSize
    })

    useEffect(() => {
        setItems(data.filter(item => !removedCards.includes(item)));
        setPageData(items.slice(pagination.from, pagination.to))
    }, [data, pagination, removedCards]);

    function handlePageChange(event, page) {
        const from = (page - 1) * pageSize
        const to = (page - 1) * pageSize + pageSize
        setPagination({ from, to })
    }

    return (
        <div className="cardPage">
            <div className="cardList">
                {pageData.map((item, index) =>
                    <Card key={index} item={item} />
                )}
            </div>
            <Stack className="pagination" spacing={2}>
                <Pagination count={pagination.count} onChange={handlePageChange} />
            </Stack>
        </div>
    )
}

export default CardList;