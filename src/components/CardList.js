import { React, useEffect, useState }  from "react";
import { Pagination, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/actions/getData";


const CardList = (() => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.data)
    const pageSize = 3
    const [pagedData, setPagedData] = useState([])
    const [pagination, setPagination] = useState({
        from: 0,
        to: pageSize
    })

    useEffect(() => {
        dispatch(getData())
    }, []);

    useEffect(() => {
        setPagedData(data.slice(pagination.from, pagination.to))
    }, [data, pagination]);
    

    function handlePageChange(event, page) {
        const from = (page - 1) * pageSize
        const to = (page - 1) * pageSize + pageSize
        setPagination({...pagination, from: from, to: to})
    }

    return (
        <div>
            {pagedData.map((item, index) => 
                <img key={index} src={"http://contest.elecard.ru/frontend_data/" + item.image} alt={item.image}/>
            )}
            <Stack spacing={2}>
                <Pagination count={Math.ceil(data.length / pageSize)} onChange={handlePageChange} />
            </Stack>
        </div>
    )
})

export default CardList;