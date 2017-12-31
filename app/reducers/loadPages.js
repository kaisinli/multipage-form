// initial state
const pagesInitialState = {
    begin: false,
    basicInfo: false,
    location: false,
    education: false,
    summary: false
}

const CHANGE_PAGE_STATUS = 'CHANGE_PAGE_STATUS';

// action creator
export const changePageStatus = (page) => ({
    type: CHANGE_PAGE_STATUS,
    page,
})

// // dispatcher
// export const dispatchShowPages = (page) => {
//     console.log('here')
//     dispatch => {
        
//         dispatch(changePageStatus(page))
//     }
// }

// reducer
export default function (state = pagesInitialState, action) {
    switch (action.type) {
        case CHANGE_PAGE_STATUS:
            let pages = Object.assign({}, state);
            pages[action.page] = true
            return pages
        default:
            return state
    }
}