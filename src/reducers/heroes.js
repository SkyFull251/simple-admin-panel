// import { createReducer } from "@reduxjs/toolkit";

// import {
//     heroesFetching,
//     heroesFetched,
//     heroCreated,
//     heroDeleted,
//     heroesFetchingError
// } from '../actions';

// const initialState = {
//     heroes: [],
//     heroesLoadingStatus: 'idle',
// }

//Можно использовать и с TypeScript

// const heroes = createReducer(initialState, builder => {
//     builder
//         .addCase(heroesFetching, state => {
//             state.heroesLoadingStatus = 'loading';
//         })
//         .addCase(heroesFetched, (state,action) => {
//             state.heroes = action.payload;
//             state.heroesLoadingStatus ='idle';
//         })
//         .addCase(heroesFetchingError, state => {
//             state.heroesLoadingStatus = 'error';
//         })
//         .addCase(heroCreated, (state,action) => {
//             state.heroes.push(action.payload);
//         })
//         .addCase(heroDeleted, (state,action) => {
//             state.heroes = state.heroes.filter(item => item.id !== action.payload);
//         })
//         .addDefaultCase(()=> {});

// })

//Для чистого JS 
// const heroes = createReducer(initialState, {
//     [heroesFetching]: state => { state.heroesLoadingStatus = 'loading'; },
//     [heroesFetched]: (state, action) => {
//         state.heroes = action.payload;
//         state.heroesLoadingStatus = 'idle';
//     },
//     [heroesFetchingError]: state => { state.heroesLoadingStatus = 'error'; },
//     [heroDeleted]: (state, action) => { state.heroes = state.heroes.filter(item => item.id !== action.payload); },
//     [heroCreated]: (state, action) => { state.heroes.push(action.payload); }
//     },
//     [],
//     state => state
// )


//export default heroes;