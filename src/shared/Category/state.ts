interface categoryType {
    id:string
}

const changeCategoryType = 'CATEGORY/changeCategory' as const;

// 필요한 액션함수
// 선택한 카테고리로 변경하기
export const changeCategory = (category:string) => ({
    type:changeCategoryType,
    id:category,
});

// 필요한 상태값
// 현재 선택한 카테고리가 무엇인지
const initialState:categoryType = {
    id: 'category/gym'
};

type actionType = 
    ReturnType<typeof changeCategory>;

const reducer = (state = initialState, action:actionType) => {
    switch(action.type){
        case changeCategoryType:
            return {...state, id:action.id};
        default:
            return state;
    }
}

export default reducer;