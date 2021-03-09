import { ItemInfoComponent } from '../../interface/ItemInfo';
import { ItemInfo_TC } from '../../common/tc';
const setProductType = 'ItemInfo/setProductType' as const;

export const setProduct = (product:ItemInfoComponent) => (
    {
        type:setProductType,
        data:product,
    }
);

const initialState:ItemInfoComponent = ItemInfo_TC[0];

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