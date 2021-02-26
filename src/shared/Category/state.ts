import category_bottom from './image/category-bottom.png';
import category_top from './image/category-top.png';
import category_gym from './image/category-gym.png';
import category_yoga from './image/category-yoga.png';
import category_leggings from './image/category-leggings.png';
import category_socks from './image/category-sock.png';

import bottom from './image/bottom.svg';
import bottomSelect from './image/bottomSelect.svg';
import top from './image/top.svg';
import topSelect from './image/topSelect.svg';
import yoga from './image/yoga.svg';
import yogaSelect from './image/yogaSelect.svg';
import gym from './image/gym.svg';
import gymSelect from './image/gymSelect.svg';
import leggings from './image/leggings.svg';
import leggingsSelect from './image/leggingsSelect.svg';
import socks from './image/socks.svg';
import socksSelect from './image/socksSelect.svg';

import { ItemInfoComponent } from '../../interface/ItemInfo';
import { ItemInfo_TC, gymData, yogaData, topData } from '../../common/tc';

export enum category_Item_Type{
    GYM,
    YOGA,
    TOP,
    BOTTOM,
    LEGGINS,
    SOCKS,
}

export interface categoryItem {
    id: category_Item_Type,
    label: string,
    icon: string,
    selected: boolean,
    selectImg: string[],
    data: ItemInfoComponent[],
}

const changeCategoryType = 'CATEGORY/changeCategory' as const;

export const changeCategory = (CID:category_Item_Type) => (
    {
        type:changeCategoryType,
        data:CID,
    }
);

const initialState:categoryItem[] = [
    {
        id: category_Item_Type.GYM,
        label: '짐웨어',
        icon: category_gym,
        selected: false,
        selectImg: [gym, gymSelect],
        data: gymData,
    },
    {
        id: category_Item_Type.YOGA,
        label: '요가복',
        icon: category_yoga,
        selected: false,
        selectImg: [yoga, yogaSelect],
        data: yogaData,
    },
    {
        id: category_Item_Type.TOP,
        label: '상의',
        icon: category_top,
        selected: false,
        selectImg: [top, topSelect],
        data: topData,
    },
    {
        id: category_Item_Type.LEGGINS,
        label: '레깅스',
        icon: category_leggings,
        selected: false,
        selectImg: [leggings, leggingsSelect],
        data: ItemInfo_TC,
    },
    {
        id: category_Item_Type.BOTTOM,
        label: '하의',
        icon: category_bottom,
        selected: false,
        selectImg: [bottom, bottomSelect],
        data: ItemInfo_TC,
    },
    {
        id: category_Item_Type.SOCKS,
        label: '양말',
        icon: category_socks,
        selected: false,
        selectImg: [socks, socksSelect],
        data: ItemInfo_TC,
    },
]

type actionType = 
    ReturnType<typeof changeCategory>;

const reducer = (state = initialState, action:actionType) => {
    switch(action.type){
        case changeCategoryType:
            return state.map((item:categoryItem)=> {
                if(item.id == action.data){
                    return{
                        ...item,
                        selected: true
                    }
                }
                else{
                    return{
                        ...item,
                        selected: false
                    }
                }
            })
        default:
            return state;
    }
}

export default reducer;