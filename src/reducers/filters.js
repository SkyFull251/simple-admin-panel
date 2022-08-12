// const initialState = {
//     filters: [],
//     filtersLoadingStatus: 'idle',
//     activeFilter: 'all'
// }

// const filters = (state = initialState, action) => {
//     switch (action.type) {
//         case 'FILTER_LOADING':
//             return {
//                 ...state,
//                 filtersLoadingStatus: 'loading'
//             }
//         case 'FILTER_LOADED':
//             return {
//                 ...state,
//                 filters: action.payload,
//                 filtersLoadingStatus: 'idle'
//             }
//         case 'FILTER_ERROR':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'error'
//             }
//         case 'FILTER_CHANGE':
//             return {
//                 ...state,
//                 activeFilter: action.payload,
//             }
//         default: return state
//     }
// }

// export default filters;