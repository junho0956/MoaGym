const initialAction = undefined;

export const initialCreateAction = () => {};

const initialState = {

}

type actionType = 
    ReturnType<typeof initialCreateAction>;

const reducer = (state = initialState, action:actionType) => {
    switch(action){
        default:
            return state;
    }
}

export default reducer;