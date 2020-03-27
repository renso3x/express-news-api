import {
  GET_ALL_NEWS,
  INCREMENT_PAGINATE,
  DECREMENT_PAGINATE
} from '../actions/news';

const initialState = {
  articles: [],
  page: 1,
  totalResults: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case GET_ALL_NEWS:
      return {
        ...state,
        ...action.payload,
      }

    case INCREMENT_PAGINATE:
      return {
        ...state,
        page: state.page + 1
      }

    case DECREMENT_PAGINATE:
      return {
        ...state,
        page: state.page - 1
      }

    default:
      return state;
  }
};