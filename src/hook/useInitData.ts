import { useState, useEffect, useCallback } from 'react';
import { ItemInfoComponent } from '../interface/ItemInfo';

export interface brandListType{
    brandId: number;
    brandImg: string;
    brandUrl: string;
    name: string;
}

export interface brandDataType{
    brandName: string,
    brandImg: string,
    brandId: number,
    brandUrl: string,
    brandData: ItemInfoComponent[],
}

export interface categoryDataType{
    category: string,
    categoryData: ItemInfoComponent[],
}

const BACKEND_URL = 'https://goo.moagym.kro.kr:9090';

function useInitData(){
    const [brandData, setBrandData] = useState<brandDataType[]>([]);

    const getAllData = useCallback(async() => {

        function getBrandList():Promise<brandListType[]>{
            return fetch(`${BACKEND_URL}/api/v1/allBrands`)
                    .then(res => {
                        if(res.status === 200) return res.json();
                        else throw new Error();
                    })
                    .then(res => res)
                    .catch(() => getBrandList);
        }

        function getBrandData(brandname:string):Promise<ItemInfoComponent[]>{
            return fetch(`${BACKEND_URL}/api/v1/itemsByBrandWithReview/${brandname}`)
            .then(res => {
                if(res.status === 200) return res.json();
                else throw new Error();
            })
            .then(res => res)
            .catch(() => getBrandData(brandname));
        }

        let brandList:brandListType[] = await getBrandList();
        
        const brandListData:brandDataType[] = await Promise.all(
            brandList.map(async(brand) => {
                return{
                    brandName: brand.name,
                    brandImg: brand.brandImg,
                    brandId: brand.brandId,
                    brandUrl: brand.brandUrl,
                    brandData: await getBrandData(brand.name),
                }
            })
        );
        
        return brandListData;
    }, [])

    useEffect(() => {
        const getDataResult = getAllData();
        getDataResult.then(res => {
            setBrandData(res);
        })
    }, []);

    return brandData;
}

export default useInitData;