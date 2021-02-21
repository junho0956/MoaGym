import {ProductListItemComponent} from '../../interface/Product';

const setProductType = 'PRODUCT/setProduct' as const; 

export const setProduct = (product:ProductListItemComponent[]) => (
    {
        type: setProductType,
        data: product,
    }
);

const initialState:ProductListItemComponent[] = [
    // //tc
    // {
    //     productId:"1",
    //     productImageUrl:"",
    //     productReviewCnt:1024,
    //     productTags:[],
    //     productTitle:"백니들포인트 머슬핏 두글자",
    //     productPrice:12400,
    //     brandTitle:"맷블랙",
    //     productReviewPoint:4.8,
    // },
    // {
    //     productId:"2",
    //     productImageUrl:"",
    //     productReviewCnt:36,
    //     productTags:[],
    //     productTitle:"맷블랙 티셔츠",
    //     productPrice:11500,
    //     brandTitle:"맷블랙",
    //     productReviewPoint:4.8,
    // },
    // {
    //     productId:"3",
    //     productImageUrl:"",
    //     productReviewCnt:985,
    //     productTags:[],
    //     productTitle:"니들포인트 박스티 그린",
    //     productPrice:12400,
    //     brandTitle:"맷블랙",
    //     productReviewPoint:4.8,
    // },
]

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