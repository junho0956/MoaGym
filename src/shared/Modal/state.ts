import { ReviewCardComponent } from "../../interface/Review";

const Modal = 'MODAL' as const;

export interface stateType {
    view: boolean,
    data: ReviewCardComponent | null,
}

export const setModal = (view:boolean, review:ReviewCardComponent|null) => ({
    type:Modal,
    view,
    review,
})

const initialState:stateType = {
    view: false,
    data: null,
}

type actionType = ReturnType<typeof setModal>;

const reducer = (state = initialState, action:actionType) => {
    switch(action.type){
        case Modal:{
            if(action.view){
                return {
                    ...state,
                    view: true,
                    data: action.review
                }
            }
            else{
                return{
                    ...state,
                    view: false,
                    data: null
                }
            }
        }
        default:
            return state;
    }
}

export default reducer;