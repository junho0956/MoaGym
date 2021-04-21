// import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import ProductList from '../../shared/Product/List';
// import {useLocation} from 'react-router-dom';
import {PRODUCT_LIST_DIRECTION} from '../../interface/Product';
import { CategoryRectangle } from '../Category-component/style';
// import { ItemInfoComponent } from '../../interface/ItemInfo';
import { RootState } from '../../common/store';

export const WeekBestPage = () => {

    const ItemInfo = useSelector((state:RootState) => state.WeekBest);

    return(
        <>  
            <CategoryRectangle />
            <ProductList product={ItemInfo} direction={PRODUCT_LIST_DIRECTION.VERTICAL}/>
        </>
    )

}