import { React, useEffect, useState } from "react";
import { Pagination, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import Card from "./Card";


const CardList = (() => {

    const data = useSelector(state => state.data)
    const pageSize = 8
    const [pagedData, setPagedData] = useState([])
    const [pagination, setPagination] = useState({
        from: 0,
        to: pageSize
    })

    useEffect(() => {
        setPagedData(data.slice(pagination.from, pagination.to))
    }, [data, pagination]);


    function handlePageChange(event, page) {
        const from = (page - 1) * pageSize
        const to = (page - 1) * pageSize + pageSize
        setPagination({ ...pagination, from: from, to: to })
    }

    return (
        <div className="cardPage">
            <div className="cardList">
                {pagedData.map((item, index) =>
                    <Card key={index} item={item} />
                )}
            </div>
            <Stack className="pagination" spacing={2}>
                <Pagination count={Math.ceil(data.length / pageSize)} onChange={handlePageChange} />
            </Stack>
        </div>
    )
})

export default CardList;