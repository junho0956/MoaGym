import {useEffect, useRef} from 'react';
import {ReviewCardComponent} from '../../interface/Review';
import {
  ReviewComponent,
  ReviewPhoto,
  ReviewInfo,
  ReviewStarPoint,
} from './style';
import {getReviewStarPoint} from '../../common/getReviewStarPoint';
import rectangle from '../../common/image/Rectangle.svg';

function ReviwItem({review}:{review:ReviewCardComponent}){
    const reviewImage:{url:string}[] = review.reviewImageUrl;
    const reviewStarPointDOM = useRef(null);
    
    useEffect(() => {
      reviewStarPointDOM && getReviewStarPoint(reviewStarPointDOM, review.reviewPoint);
    }, [review])

    return(
      <ReviewComponent image={reviewImage.length}>
        {reviewImage.length > 0 && <ReviewPhoto><img src={reviewImage[0].url}/></ReviewPhoto>}
        <ReviewInfo>
          <ReviewStarPoint ref={reviewStarPointDOM}></ReviewStarPoint>
          <div className="reviewProductSizeTitle">{review.reviewOption}</div>
          <img src={rectangle} className="reviewRectangle"></img>
          <div className="reviewDesc">{review.reviewDesc}</div>
          <span className="reviewCreateAt">{review.createdTime.substring(0, 10)}</span>
          <span className="reviewAutorInfo">{review.authorName[0]}***님</span>
        </ReviewInfo>
      </ReviewComponent>
    )
}

export const Review = ({reviewState}:{reviewState:ReviewCardComponent[]}) => {
  return (
    <>
      {reviewState.length > 0 && reviewState.map((review:ReviewCardComponent) => {
          return <ReviwItem key={review.reviewId} review={review} />
      })}
    </>
  );
}