import {createStore, combineReducers} from 'redux';
import Product from '../shared/Product/state';
import Review from '../shared/Review/state';
import Category from '../shared/Category/state';

const reducer = combineReducers(
    {
        Product: Product,
        Review: Review,
        Category: Category
    }
)

const store = createStore(reducer);
export default store;

export type RootState = ReturnType<typeof reducer>;