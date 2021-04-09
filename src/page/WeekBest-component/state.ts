// import { brandDataType } from '../../hook/InitData';
import {ItemInfoComponent} from '../../interface/ItemInfo';

const weekbestType = "WEEKBESTTYPE" as const;

interface sortedBrandData{
    data:ItemInfoComponent[];
}

let brandAllData:sortedBrandData[] = [];

export const weekbestUpdate = (data:ItemInfoComponent[], allData:sortedBrandData[]) => ({
    type:weekbestType,
    data,
    allData,
})

const initialState:ItemInfoComponent[] = [];

type actionType = ReturnType<typeof weekbestUpdate>;

const reducer = (state = initialState, action:actionType) => {
    switch(action.type){
        case weekbestType:{
            brandAllData = action.allData;
            return action.data;
        }
        default:
            return state;
    }
}

export default reducer;