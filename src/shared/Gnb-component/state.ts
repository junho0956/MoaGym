import Home from './image/Home.svg';
import Brand from './image/Brand.svg';
import Category from './image/Category.svg';
import Community from './image/Community.svg';
// import HomeSelected from './image/HomeSelected.svg';
// import BrandSelected from './image/BrandSelected.svg';
// import CategorySelected from './image/CategorySelected.svg';
// import CommunitySelected from './image/CommunitySelected.svg';

export enum GNB_ITEM_TYPE {
  HOME,
  BRAND,
  CATEGORY,
  COMMUNITY
}

export interface IGnb {
  id: GNB_ITEM_TYPE;
  label: string;
  link: string;
  icon: string;
  selected: boolean;
}

export const GNBItemList: IGnb[] = [
  {
    id: GNB_ITEM_TYPE.HOME,
    label: '홈',
    link: '/',
    icon: Home,
    selected: true
  },
  {
    id: GNB_ITEM_TYPE.BRAND,
    label: '브랜드',
    link: '/brand',
    icon: Brand,
    selected: false
  },
  {
    id: GNB_ITEM_TYPE.CATEGORY,
    label: '운동복',
    link: '/category',
    icon: Category,
    selected: false
  },
  {
    id: GNB_ITEM_TYPE.COMMUNITY,
    label: '커뮤니티',
    link: '/community',
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