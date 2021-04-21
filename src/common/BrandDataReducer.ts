import { brandDataType } from '../hook/useInitData';

const initDataType = 'INITDATATYPE' as const;

let brandDatas:brandDataType[] = [];

export const initBrandData = (data:brandDataType[]) => ({
    type: initDataType,
    data,
})

type actionType = ReturnType<typeof initBrandData>;

const reducer = (state = brandDatas, action:actionType) => {
    switch(action.type){
        case initDataType:{
            return action.data;
        }
        default:
            return state;
    }
}

export default reducer;