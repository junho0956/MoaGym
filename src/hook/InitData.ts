import { ItemInfoComponent } from "../interface/ItemInfo";

export interface brandListType{
    brandId: number;
    brandImg: string;
    name: string;
}

export interface brandDataType{
    brandName: string,
    brandImg: string,
    brandId: number,
    brandData: ItemInfoComponent[],
}

export interface categoryDataType{
    category: string,
    categoryData: ItemInfoComponent[],
}


export let brandList:brandListType[] = [];
// let categoryData:categoryDataType[] = [];

async function getAllData(){

    brandList = await fetch(`http://3.36.210.129:8080/api/v1/allBrands`)
                .then(res => res.json())
                .then(res => res);

    const brandListType:brandDataType[] = await Promise.all(
        brandList.map(async(brand) => {
            return{
                brandName: brand.name,
                brandImg: brand.brandImg,
                brandId: brand.brandId,
                brandData: await fetch(`http://3.36.210.129:8080/api/v1/itemsByBrandWithReview/${brand.name}`)
                                .then(res => res.json())
                                .then(res => res),
            }
        })
    );

    return brandListType;
}

export async function getInitData(){
    // 브랜드 데이터 수집
    /**
     * brandData : brandDataType[] = {
     *      brandName: string,
     *      brandData: ItemInfoComponent[]
     * }
     */
    let brandData:brandDataType[] = await getAllData();
    return brandData;
}