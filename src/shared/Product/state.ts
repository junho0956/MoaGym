import {ProductListItemComponent} from '../../interface/Product';

const setProductType = 'PRODUCT/setProduct' as const; 

export const setProduct = (product:ProductListItemComponent[]) => (
    {
        type: setProductType,
        data: product,
    }
);

const initialState:ProductListItemComponent[] = [];

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