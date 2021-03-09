import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
    CategoryDetailContainer,
    CategoryDetailTitle,
    CategoryDetailWrap,
    CategoryDetailItemWrap,
} from './style';
import { RootState } from '../../common/store';
import {categoryItem} from '../../shared/Category/state';
import Category from '../../shared/Category/Category';
import Product from '../../shared/Product/List';
import { PRODUCT_LIST_DIRECTION } from '../../interface/Product';
import {nodragImage} from '../../common/nodragImage';

export const CategoryDetail = () => {

    const categorys = useSelector((state:RootState) => state.Category);
    const SelectCategory = categorys.filter((item:categoryItem) => {
        if(item.selected) return item;
    });

    useEffect(() => nodragImage() ,[]);

    return (
        <CategoryDetailContainer>
            <Category />
            <CategoryDetailWrap>
                <CategoryDetailTitle>{SelectCategory[0].label}만 모아짐</CategoryDetailTitle>
                <CategoryDetailItemWrap>
                    <Product product={SelectCategory[0].data} direction={PRODUCT_LIST_DIRECTION.VERTICAL}/>
                </CategoryDetailItemWrap>
            </CategoryDetailWrap>
        </CategoryDetailContainer>
    )

}