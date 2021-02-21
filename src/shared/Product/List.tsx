import store from '../../common/store';
import {useSelector} from 'react-redux';
import ProductListItem from './ListItem';
import {ProductListItemComponent, PRODUCT_LIST_DIRECTION} from '../../interface/Product';
import {RootState} from '../../common/store';
import {
    ProductListHorizontal, 
    ProductListVertical,
    ProductListHorizontalUl,
    ProductListHorizontalLi,
    ProductListVerticalItem,
} from './style';

function ProductList({direction}:{direction:PRODUCT_LIST_DIRECTION}){
    const product = useSelector((state:RootState) => state.Product);

    return(
        direction === PRODUCT_LIST_DIRECTION.VERTICAL ? 
        (<ProductListVertical>
                {product.map((product:ProductListItemComponent) => {
                    return(<ProductListVerticalItem>
                        <ProductListItem product={product} />
                    </ProductListVerticalItem>)
                })}
        </ProductListVertical>):
        (<ProductListHorizontal>
            <ProductListHorizontalUl>
                {product.map((product:ProductListItemComponent) => {
                    return(<ProductListHorizontalLi>
                        <ProductListItem product={product} />
                    </ProductListHorizontalLi>)
                })}
            </ProductListHorizontalUl>
        </ProductListHorizontal>)
    )
}

export default ProductList;