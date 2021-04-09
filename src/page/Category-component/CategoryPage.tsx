import {
    CategoryCollectionContainer,
    CategoryItem,
    CategoryRectangle,
    CategoryItemWrap
} from './style';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import { categoryItem, category_Item_Type, changeCategory } from '../../shared/Category/state';
import store from '../../common/store';

export const CategoryPage = () => {

    const history = useHistory();
    // const {pathname} = useLocation();
    const categorys = useSelector((state:RootState) => state.Category);

    const categoryHandler = (ID:category_Item_Type) => {
        history.push(`/categoryDetail`);
        store.dispatch(changeCategory(ID));
    }

    return(
        <CategoryCollectionContainer>
            <CategoryRectangle/>
            <CategoryItemWrap>
                {categorys.map((item:categoryItem) => {
                    return(
                        <CategoryItem key={item.id}>
                            <img src={item.icon} onClick={() => categoryHandler(item.id)} alt="category-img"/>
                        </CategoryItem>
                    )
                })}
            </CategoryItemWrap>
        </CategoryCollectionContainer>
    )
}