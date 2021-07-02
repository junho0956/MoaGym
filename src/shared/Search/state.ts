const Search = 'SEARCH' as const;

export const setSearchActive = () => ({
    type:Search,
})

const initialState = {
    onSearch: false
}

type actionType = ReturnType<typeof setSearchActive>;

const reducer = (state = initialState, action: actionType) => {
    switch(action.type){
        case Search:{
            return {...state, onSearch: !state.onSearch};
        }
        default:
            return state;
    }
}

export default reducer;