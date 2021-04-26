import {useState, useEffect} from 'react';
import ProductList from '../../shared/Product/List';
import {useLocation} from 'react-router-dom';
import {PRODUCT_LIST_DIRECTION} from '../../interface/Product';
import { CategoryRectangle } from '../Category-component/style';
import { ItemInfoComponent } from '../../interface/ItemInfo';

export const WeekBestPage = () => {

    const [weekbest, setWeekbest] = useState<ItemInfoComponent[]>([]);
    const location = useLocation();

    useEffect(() => {
        setWeekbest(location.state as ItemInfoComponent[]);
    }, [location]);

    return(
        <>  
            <CategoryRectangle />
            <ProductList product={weekbest} direction={PRODUCT_LIST_DIRECTION.VERTICAL}/>
        </>
    )

}