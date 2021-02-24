import {createStore, combineReducers} from 'redux';
import Product from '../shared/Product/state';
import Review from '../shared/Review/state';
import Category from '../shared/Category/state';
import Gnb from  '../components/Gnb-component/state'

const reducer = combineReducers(
    {
        Product,
        Review,
        Category,
        Gnb
    }
)

const store = createStore(reducer);
export default store;

export type RootState = ReturnType<typeof reducer>;