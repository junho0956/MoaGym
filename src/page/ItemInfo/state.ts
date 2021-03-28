import { ItemInfoComponent } from '../../interface/ItemInfo';
const setProductType = 'ItemInfo/setProductType' as const;

export const setProduct = (product:ItemInfoComponent) => (
    {
        type:setProductType,
        data:product,
    }
);

const initialState:ItemInfoComponent = {
    brandName:"brandName",
    category:"category",
    productId:9999,
    productImageUrl:[],
    productName:"productName",
    productPrice:9999,
    productReview:[],
    productReviewCnt:9999,
    productReviewPoint:9999,
    productSortByNew:9999,
};

type actionType = 
    ReturnType<typeof setProduct>;

const reducer = (state = initialState, action:actionType) => {
    switch(action.type){
        case setProductType:{
            return action.data;
        }
        default:
            return state;
    }
}

export default reducer;