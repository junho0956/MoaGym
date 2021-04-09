
import { brandDataType, categoryDataType } from "./InitData";

// 현재 사용가능한 카테고리 => 짐웨어, 상의, 하의, 양말, 요가복, 레깅스
export function getCategoryData(brandData : brandDataType[]){
    let data:categoryDataType[] = [
        {
            category: '짐웨어',
            categoryData: [],
        },
        {
            category: '상의',
            categoryData: [],
        },
        {
            category: '하의',
            categoryData: [],
        },
        {
            category: '양말',
            categoryData: [],
        },
        {
            category: '요가복',
            categoryData: [],
        },
        {
            category: '레깅스',
            categoryData: [],
        },
    ];
    
    brandData.forEach(item => {
        item.brandData.forEach(item => {
            if(item.category === '짐웨어'){
                data[0].categoryData.push(item);
            }
            if(item.category === '상의'){
                data[1].categoryData.push(item);
            }
            if(item.category === '하의'){
                data[2].categoryData.push(item);
            }
            if(item.category === '양말'){
                data[3].categoryData.push(item);
            }
            if(item.category === '요가복'){
                data[4].categoryData.push(item);
            }
            if(item.category === '레깅스'){
                data[5].categoryData.push(item);
            }
        })
    })

    return data;
}