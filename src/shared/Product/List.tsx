import {useHistory, useLocation} from 'react-router-dom';
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
import store from '../../common/store';
import {setProduct} from '../../page/ItemInfo/state';

function ProductList({product, direction}:{product:ItemInfoComponent[] ,direction:PRODUCT_LIST_DIRECTION}){
    // const product = useSelector((state:RootState) => state.Product);
    const ul = useRef<HTMLUListElement>(null);
    const history = useHistory();
    const {pathname} = useLocation();

    useEffect(() => {
        ul && applyOnMouse(ul);
    }, [])

    const ProductDetail = (product:ItemInfoComponent) => {
        history.push('/product');
        store.dispatch(setProduct(product));
    }

    return(
        direction === PRODUCT_LIST_DIRECTION.VERTICAL ? 
        (<ProductListVertical>
                {product.map((product:ItemInfoComponent) => {
                    return(<ProductListVerticalItem key={product.productItem.productId} onClick={() => ProductDetail(product)}>
                        <ProductListItem product={product} />
                    </ProductListVerticalItem>)
                })}
        </ProductListVertical>):
        (<ProductListHorizontal>
            <ProductListHorizontalUl ref={ul}>
                {product.map((product:ItemInfoComponent) => {
                    return(<ProductListHorizontalLi key={product.productItem.productId} onClick={() => ProductDetail(product)}>
                        <ProductListItem product={product}/>
                    </ProductListHorizontalLi>)
                })}
            </ProductListHorizontalUl>
        </ProductListHorizontal>)
    )
}

export default ProductList;