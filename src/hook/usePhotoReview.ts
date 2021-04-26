import {useState, useEffect} from 'react';
import { ReviewCardComponent } from '../interface/Review';
import { brandDataType } from './useInitData';

function usePhotoReview(brand:brandDataType[]){

    const [photoReview, setPhotoReview] = useState<ReviewCardComponent[]>([]);

    useEffect(() => {

        let photoReviewcopy:ReviewCardComponent[] = [];

        brand.forEach((item:brandDataType) => {
            item.brandData.forEach(brandItem => {
                brandItem.productReview.forEach(review => {
                    if((review.reviewImageUrl as {url:string}[]).length > 0){
                        photoReviewcopy.push(review);
                    }
                })
            })
        })
        photoReviewcopy.sort((a,b) => Math.random() - 0.5);

        setPhotoReview(photoReviewcopy);

    }, [brand]);

    return photoReview;
}

export default usePhotoReview;