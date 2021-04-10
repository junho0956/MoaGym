import {ProductListItemComponent} from './Product';
import {ReviewCardComponent} from './Review';

export interface ItemInfoComponent extends ProductListItemComponent{
    productReview: ReviewCardComponent[],
}