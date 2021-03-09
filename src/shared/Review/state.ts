import {ReviewCardComponent} from '../../interface/Review';

export const initReviewType = 'REVIEW/addReview' as const; 

// 데이터를 한번에 받아와서 통째로 리듀서 상태값에 넣는다고 가정하고
// action을 작성했습니다
export const initReview = (review:ReviewCardComponent[]) => ({
    type:initReview,
    data: review,
});

const initialState:ReviewCardComponent[] = [];

type actionType = 
    ReturnType<typeof initReview>;

const reducer = (state = initialState, action:actionType) => {
    switch(action.type){
        case initReview:{
            return action.data;
        }
        default:
            return state;
    }
}

export default reducer;