import {ProductListItemComponent} from './Product';
import {PhotoReviewItemComponent} from './PhotoReview';
import {ReviewCardComponent} from './Review';

export interface ItemInfoComponent extends ProductListItemComponent{
    productReview: ReviewCardComponent[],
}