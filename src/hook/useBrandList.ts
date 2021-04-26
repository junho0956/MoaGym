import {useState, useEffect} from 'react';
import { brandDataType } from './useInitData';

function useBrandList(brand:brandDataType[]){

    const [BrandList, setBrandList] = useState<brandDataType[]>([]);

    useEffect(() => {

        let brandListcopy:brandDataType[] = [];
            
            for(let i = 0; i<3; i++){
                brandListcopy.push(brand[i]);
            }
            setBrandList(brandListcopy);

    }, [brand]);

    return BrandList;
}

export default useBrandList;