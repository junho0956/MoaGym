import category_bottom from './image/category-bottom.png';
import category_top from './image/category-top.png';
import category_gym from './image/category-gym.png';
import category_yoga from './image/category-yoga.png';
import category_leggings from './image/category-leggings.png';
import category_socks from './image/category-sock.png';

import bottom from './image/bottom.png';
import bottomSelect from './image/bottomSelect.png';
import top from './image/top.png';
import topSelect from './image/topSelect.png';
import yoga from './image/yoga.png';
import yogaSelect from './image/yogaSelect.png';
import gym from './image/gym.png';
import gymSelect from './image/gymSelect.png';
import leggings from './image/leggings.png';
import leggingsSelect from './image/leggingsSelect.png';
import socks from './image/socks.png';
import socksSelect from './image/Tab_category_socks.png';

import { ItemInfoComponent } from '../../interface/ItemInfo';
import { categoryDataType } from '../../hook/useInitData';
import _ from 'lodash';

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
    data: ItemInfoComponent[] | undefined,
}

const changeCategoryType = 'CATEGORY/changeCategory' as const;
const initCategoryDataType= 'CATEGORY/initCategory' as const;

export const initCategory = (data:categoryDataType[]) => (
    {
        type: initCategoryDataType,
        data,
    }
)

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
        data: undefined,
    },
    {
        id: category_Item_Type.YOGA,
        label: '요가복',
        icon: category_yoga,
        selected: false,
        selectImg: [yoga, yogaSelect],
        data: undefined,
    },
    {
        id: category_Item_Type.TOP,
        label: '상의',
        icon: category_top,
        selected: false,
        selectImg: [top, topSelect],
        data: undefined,
    },
    {
        id: category_Item_Type.LEGGINS,
        label: '레깅스',
        icon: category_leggings,
        selected: false,
        selectImg: [leggings, leggingsSelect],
        data: undefined,
    },
    {
        id: category_Item_Type.BOTTOM,
        label: '하의',
        icon: category_bottom,
        selected: false,
        selectImg: [bottom, bottomSelect],
        data: undefined,
    },
    {
        id: category_Item_Type.SOCKS,
        label: '양말',
        icon: category_socks,
        selected: false,
        selectImg: [socks, socksSelect],
        data: undefined,
    },
]

type actionType = 
    ReturnType<typeof changeCategory> | ReturnType<typeof initCategory>;

const reducer = (state = initialState, action:actionType) => {
    switch(action.type){
        case initCategoryDataType:{
            let newState = _.cloneDeep(state);
            newState[0].data = action.data[0].categoryData;
            newState[2].data = action.data[1].categoryData;
            newState[4].data = action.data[2].categoryData;
            newState[5].data = action.data[3].categoryData;
            return newState;
        }

        case changeCategoryType:
            return state.map((item:categoryItem)=> {
                if(item.id === action.data){
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