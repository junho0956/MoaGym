import {createStore, combineReducers} from 'redux';
import Product from '../shared/Product/state';
import Review from '../shared/Review/state';
import Category from '../shared/Category/state';
import Gnb from  '../shared/Gnb-component/state';
import ItemInfo from '../page/ItemInfo/state';
import BrandDataReducer from './BrandDataReducer';
import Search from '../shared/Search/state';
import Modal from '../shared/Modal/state';

const reducer = combineReducers(
    {
        Product,
        Review,
        Category,
        Gnb,
        ItemInfo,
        BrandDataReducer,
        Search,
        Modal,
    }
)

const store = createStore(reducer);
export default store;

export type RootState = ReturnType<typeof reducer>;