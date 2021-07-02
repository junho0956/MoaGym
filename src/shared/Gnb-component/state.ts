import Home from './image/Home.png';
import Brand from './image/Brand.png';
import Category from './image/Category.png';
import Community from './image/Community.png';

export enum GNB_ITEM_TYPE {
  HOME,
  BRAND,
  CATEGORY,
  COMMUNITY,
  SEARCH,
}

export interface IGnb {
  id: GNB_ITEM_TYPE;
  label: string;
  link: string;
  icon: string|undefined;
  selected: boolean;
}

export const GNBItemList: IGnb[] = [
  {
    id: GNB_ITEM_TYPE.HOME,
    label: '홈',
    link: '/MoaGym',
    icon: Home,
    selected: true
  },
  {
    id: GNB_ITEM_TYPE.SEARCH,
    label: '검색',
    link: 'BsSearch',
    icon: undefined,
    selected: false,
  },
  {
    id: GNB_ITEM_TYPE.BRAND,
    label: '브랜드',
    link: '/MoaGym/brandlist',
    icon: Brand,
    selected: false
  },
  {
    id: GNB_ITEM_TYPE.CATEGORY,
    label: '운동복',
    link: '/MoaGym/category',
    icon: Category,
    selected: false
  },
  {
    id: GNB_ITEM_TYPE.COMMUNITY,
    label: '커뮤니티',
    link: '/MoaGym/community',
    icon: Community,
    selected: false
  }
]

const setActiveGnbType = 'GNB/setActiveGnb' as const; 

export const setActiveGnb = (gnbId: GNB_ITEM_TYPE) => (
    {
        type: setActiveGnbType,
        data: gnbId,
    }
);

type actionType = ReturnType<typeof setActiveGnb>;

const reducer = (state = GNBItemList, action: actionType) => {
  switch(action.type){
      case setActiveGnbType:{
          return state.map((item: IGnb) => {
            if (item.id === action.data) {
              return {
                ...item,
                selected: true
              }
            } else {
              return {
                ...item,
                selected: false
              }
            }
          })
      }
      default:
          return state;
  }
}

export default reducer;