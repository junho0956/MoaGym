// import {useHistory, useLocation} from 'react-router-dom';
import React, {useRef, useEffect, useState, useCallback} from 'react';
import ProductListItem from './ListItem';
import {PRODUCT_LIST_DIRECTION} from '../../interface/Product';
import {
    ProductListHorizontal, 
    ProductListVertical,
    ProductListHorizontalUl,
    ProductListHorizontalLi,
    ProductListVerticalItem,
} from './style';
import {applyOnMouse} from '../../common/applyOnMouse';
import { ItemInfoComponent } from '../../interface/ItemInfo';
import { nodragImage } from '../../common/nodragImage';

const ProductList = (
    {product, direction}:{product:ItemInfoComponent[], direction:PRODUCT_LIST_DIRECTION}
    ) => {

    const ul = useRef<HTMLUListElement>(null);
    const [verticalProduct, setVerticalProduct] = useState<ItemInfoComponent[]>([]);
    const elements = useRef<HTMLDivElement>(null);
    const startIdx = useRef(0);
    const endIdx = useRef(0);
    // const midIdx = useRef(0);

    const checkScroll = useCallback(() => {
        const AppContainer = document.getElementById('AppContainer');
        const TotalHeight = AppContainer?.scrollHeight as number;
        const viewHeight = AppContainer?.clientHeight as number;
        const notViewHeight = AppContainer?.scrollTop as number;
        if(viewHeight+notViewHeight >= TotalHeight){
            const getProduct = product.slice(startIdx.current, endIdx.current);
            startIdx.current += 15;
            endIdx.current += 15;
            // setVerticalProduct(verticalProduct.concat(getProduct));
            setVerticalProduct((state) => state.concat(getProduct));
        }
    }, [verticalProduct]);

    useEffect(() => {
        nodragImage();
        ul && applyOnMouse(ul);
    }, [product, verticalProduct]);
    
    useEffect(() => {
        setVerticalProduct(product.slice(0,15));
        startIdx.current = 15;
        endIdx.current = 30;
    }, [product]);

    useEffect(() => {
        if(direction === PRODUCT_LIST_DIRECTION.VERTICAL){
            const AppContainer = document.getElementById('AppContainer');
            (AppContainer as HTMLDivElement).addEventListener('scroll', checkScroll);        
            return () => {
                (AppContainer as HTMLDivElement).removeEventListener('scroll', checkScroll);
            }
        }
    }, [verticalProduct]);

    return(
        direction === PRODUCT_LIST_DIRECTION.VERTICAL ? 
        (<ProductListVertical ref={elements}>
                {verticalProduct.map((product:ItemInfoComponent) => {
                    return(
                        <ProductListVerticalItem key={product.productId}>
                            <ProductListItem product={product} />
                        </ProductListVerticalItem>)
                })}
        </ProductListVertical>):
        (<ProductListHorizontal>
            <ProductListHorizontalUl ref={ul}>
                {product.map((product:ItemInfoComponent) => {
                    return(
                        <ProductListHorizontalLi key={product.productId}>
                            <ProductListItem product={product}/>
                        </ProductListHorizontalLi>)
                })}
            </ProductListHorizontalUl>
        </ProductListHorizontal>)
    )
}

export default React.memo(ProductList);