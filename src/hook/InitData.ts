import { ItemInfoComponent } from "../interface/ItemInfo";

export interface brandListType{
    brandId: number;
    brandImg: string;
    name: string;
}

export interface brandDataType{
    brandName: string,
    brandData: ItemInfoComponent[],
}

let brandData:brandDataType[] = [];
export let brandList:brandListType[] = [];

async function getAllData(){

    brandList = await fetch(`http://3.36.210.129:8080/api/v1/allBrands`)
                .then(res => res.json())
                .then(res => res);

    const brandListType:brandDataType[] = await Promise.all(
        brandList.map(async(brand) => {
            return{
                brandName: brand.name,
                brandData: await fetch(`http://3.36.210.129:8080/api/v1/itemsByBrandWithReview/${brand.name}`)
                                .then(res => res.json())
                                .then(res => res),
            }
        })
    );

    return brandListType;
}

export async function getInitData(){
    brandData = await getAllData();
    return brandData;
}