import { React, useEffect, useState }  from "react";
import { getData } from "../service/api";
import { useScrollTrigger } from "@mui/material";

const Card = (() => {

    const [data, setData] = useState([])

    useEffect(() => {
        getData().then(data => setData(data))
    }, [])

    console.log(data)

    return (
        <div>
            {data.slice(0, 659).map((item, index) => 
                <img key={index} src={"http://contest.elecard.ru/frontend_data/" + item.image} alt={item.image}/>
            )}
        </div>
    )
})

export default Card;