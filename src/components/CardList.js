import React, { useEffect, useState } from "react";
import { Pagination, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import Card from "./Card";
import CircularProgress from '@mui/material/CircularProgress';

const CardList = () => {
    const data = useSelector(state => state.data)
    const removedCards = useSelector(state => state.removedCards)
    const pageSize = 8
    const filteredItems = data.filter(item => !removedCards.includes(item.image))
    const [pageData, setPageData] = useState([])
    const [loading, setLoading] = useState(true)
    const [pagination, setPagination] = useState({
        count: Math.ceil(filteredItems.length / pageSize),
        from: 0,
        to: pageSize
    })

    useEffect(() => {
        const sortedItems = [...filteredItems].sort((a, b) => a.timestamp - b.timestamp);
        setPageData(sortedItems.slice(pagination.from, pagination.to))
        setLoading(false)
    }, [data, pagination, removedCards]);

    useEffect(() => {
        setPagination({...pagination, count: Math.ceil(filteredItems.length / pageSize)})
    }, [removedCards])

    function handlePageChange(event, page) {
        const from = (page - 1) * pageSize
        const to = (page - 1) * pageSize + pageSize
        setPagination({count: Math.ceil(filteredItems.length / pageSize), from, to })
    }

    return (
      <div className="card-page">
          {
              loading ? <CircularProgress /> :
                <div>
                    <div className="card-page__list">
                        {pageData.map((item, index) =>
                          <Card key={index} item={item} />
                        )}
                    </div>
                    <Stack className="card-page__pagination" spacing={2}>
                        <Pagination count={pagination.count} onChange={handlePageChange} />
                    </Stack>
                </div>
          }
      </div>
    )
}

export default CardList;