import {useState, useEffect} from 'react';
import { ItemInfoComponent } from '../interface/ItemInfo';
import { brandDataType } from './useInitData';

export interface WeekBestItemType {
    inhome: ItemInfoComponent[],
    inweek: ItemInfoComponent[],
}

function useWeekBestItem(brand:brandDataType[]){

    const [weekbestItem, setWeekbestItem] = useState<WeekBestItemType>({
        inhome: [],
        inweek: [],
    });

    useEffect(() => {
        let brandcopy:{data:ItemInfoComponent[]}[] = [];
        let weekbestItemcopy:ItemInfoComponent[] = [];
        let weekbestInHomePagecopy:ItemInfoComponent[] = [];

        brand.forEach((item, index) => {
            brandcopy.push({data:[]});
            item.brandData.forEach(item => {
                brandcopy[index].data.push(item);
            })
        })
        brandcopy.forEach(item => {
            item.data.sort((a,b) => b.productReviewCnt - a.productReviewCnt);
            weekbestItemcopy.push(item.data[0]);
            weekbestItemcopy.push(item.data[1]);
            weekbestInHomePagecopy.push(item.data[0]);
        })

        setWeekbestItem({
            inhome: weekbestInHomePagecopy,
            inweek: weekbestItemcopy,
        })
    }, [brand]);

    return weekbestItem;
}

export default useWeekBestItem;