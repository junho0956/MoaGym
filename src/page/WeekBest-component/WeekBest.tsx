import Product from '../../shared/Product/List';
import {useHistory, useLocation} from 'react-router-dom';
import {PRODUCT_LIST_DIRECTION} from '../../interface/Product';
import { CategoryRectangle } from '../Category-component/style';
import {ItemInfo_TC} from '../../common/tc';

export const WeekBestPage = () => {
    
    const history = useHistory();
    const {pathname} = useLocation();

    return(
        <>  
            <CategoryRectangle />
            <Product product={ItemInfo_TC} direction={PRODUCT_LIST_DIRECTION.VERTICAL}/>
        </>
    )

}