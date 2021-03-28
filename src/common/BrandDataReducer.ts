import { brandDataType } from '../hook/InitData';

const initDataType = 'INITDATATYPE' as const;

let brandDatas:brandDataType[] = [];

export const initData = (data:brandDataType[]) => ({
    type: initDataType,
    data,
})

type actionType = ReturnType<typeof initData>;

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