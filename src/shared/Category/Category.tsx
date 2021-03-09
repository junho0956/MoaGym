import {useRef, useEffect} from 'react';
import {useSelector} from 'react-redux';
import store, {RootState} from '../../common/store';
import {
    CategoryContainer,
    CategoryUl,
    CategoryLi,
    CategoryBar,
} from './style';

import { changeCategory, categoryItem, category_Item_Type } from './state';
import {applyOnMouse} from '../../common/applyOnMouse';

function Category(){

    const wrap = useRef<HTMLUListElement>(null);
    const category = useSelector((state:RootState) => state.Category);
    
     function handleCategory(id:category_Item_Type){
        store.dispatch(changeCategory(id));
    }

    useEffect(() => {
        wrap && applyOnMouse(wrap);
    },[])

    return(
        <CategoryContainer>
            <CategoryUl ref={wrap}>
                {category.map((item:categoryItem) => {
                    return(
                        <CategoryLi onClick={() => handleCategory(item.id)} key={item.id}>
                            <img src={item.selected === true ? item.selectImg[1] : item.selectImg[0]}/>
                        </CategoryLi>
                    )
                })}
            </CategoryUl>
            <CategoryBar><div></div></CategoryBar>
        </CategoryContainer>
    )

}

export default Category;