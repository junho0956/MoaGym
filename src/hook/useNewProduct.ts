import {useState, useEffect} from 'react';
import { ItemInfoComponent } from '../interface/ItemInfo';
import { brandDataType } from './useInitData';

function useNewProduct(brand:brandDataType[]){

    const [newProduct, setNewProduct] = useState<ItemInfoComponent[]>([]);

    useEffect(() => {

        let newProductcopy:ItemInfoComponent[] = [];
        brand.forEach((item:brandDataType) => {
            newProductcopy.push(item.brandData[0]);
        })

        setNewProduct(newProductcopy);

    }, [brand]);

    return newProduct;
}

export default useNewProduct;