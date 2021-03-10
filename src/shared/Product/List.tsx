// import {useHistory, useLocation} from 'react-router-dom';
import {useRef, useEffect} from 'react';
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

export const ProductList = ({product, direction}:{product:ItemInfoComponent[] ,direction:PRODUCT_LIST_DIRECTION}) => {

    const ul = useRef<HTMLUListElement>(null);

    useEffect(() => {
        ul && applyOnMouse(ul);
    }, [])

    useEffect(() => {
        
    }, [product])

    return(
        direction === PRODUCT_LIST_DIRECTION.VERTICAL ? 
        (<ProductListVertical>
                {product.map((product:ItemInfoComponent) => {
                    return(<ProductListVerticalItem key={product.productItem.productId}>
                        <ProductListItem product={product} />
                    </ProductListVerticalItem>)
                })}
        </ProductListVertical>):
        (<ProductListHorizontal>
            <ProductListHorizontalUl ref={ul}>
                {product.map((product:ItemInfoComponent) => {
                    return(<ProductListHorizontalLi key={product.productItem.productId}>
                        <ProductListItem product={product}/>
                    </ProductListHorizontalLi>)
                })}
            </ProductListHorizontalUl>
        </ProductListHorizontal>)
    )
}