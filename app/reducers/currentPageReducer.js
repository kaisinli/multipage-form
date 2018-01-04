//----------------------------------------< initial state >------------------------------------------
const pageInitialState = {
    currentPage: 1
}

//----------------------------------------< action >------------------------------------------
const GET_NEXT_PAGE = 'UPDATE_NEXT_PAGE';
const GET_PREVIOUS_PAGE = 'GET_PREVIOUS_PAGE';

//----------------------------------------< action creator >------------------------------------------
export const getNextPage = () => ({
    type: GET_NEXT_PAGE
})

export const getPreviousPage = () => ({
    type: GET_PREVIOUS_PAGE
})

//----------------------------------------< thunk creator >------------------------------------------
export const nextPage = () =>
    dispatch => dispatch(getNextPage())

export const previousPage = () =>
    dispatch => dispatch(getPreviousPage())

//----------------------------------------< reducer >------------------------------------------
export default function (state = pageInitialState, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case GET_NEXT_PAGE:
            newState.currentPage++;
            return newState;
        case GET_PREVIOUS_PAGE:
            newState.currentPage--;
            return newState;
        default:
            return state
    }
}