import { fetchData } from "../../service/api";

export const getData = () => async (dispatch) => {
    const data = await fetchData();
    dispatch({ type: 'GET_DATA', payload: data });
  };
