
import { getAllNews } from '../services/news';
export const GET_ALL_NEWS = 'GET_ALL_NEWS';
export const INCREMENT_PAGINATE = 'INCREMENT_PAGINATE';
export const DECREMENT_PAGINATE = 'DECREMENT_PAGINATE';

export const fetchNews = () => {
  return async (dispatch, getState) => {
    try {
      const response = await getAllNews({ page: getState().news.page });

      dispatch({ type: GET_ALL_NEWS, payload: response.data.data, page: 1 });
    } catch (e) {
      console.error(e)
    }
  }
}

export const incrementPaginate = () => {
  return async (dispatch, getState) => {
    dispatch({ type: INCREMENT_PAGINATE });
    try {
      const response = await getAllNews({ page: getState().news.page });

      dispatch({ type: GET_ALL_NEWS, payload: response.data.data });
    } catch (e) {
      console.error(e)
    }
  }
}
export const decrementPaginate = () => {
  return async (dispatch, getState) => {
    try {
      const response = await getAllNews({ page: getState().news.page });

      dispatch({ type: GET_ALL_NEWS, payload: response.data.data });
    } catch (e) {
      console.error(e)
    }
  }
}