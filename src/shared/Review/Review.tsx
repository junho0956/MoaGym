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
    const reviewImage:string[] = review.reviewImageUrl;
    const reviewStarPointDOM = useRef(null);
    useEffect(() => {
      reviewStarPointDOM && getReviewStarPoint(reviewStarPointDOM, review.reviewPoint);
    }, [review])

    return(
      <ReviewComponent image={reviewImage.length}>
        {reviewImage.length > 0 && <ReviewPhoto><img src={reviewImage[0]}/></ReviewPhoto>}
        <ReviewInfo>
          <ReviewStarPoint ref={reviewStarPointDOM}></ReviewStarPoint>
          <div className="reviewProductSizeTitle">사이즈</div>
          <div className="reviewProductSize">{review.reviewProductSize}</div>
          <img src={rectangle} className="reviewRectangle"></img>
          <div className="reviewProductColorTitle">컬러</div>
          <div className="reviewProductColor">{review.reviewProductColor}</div>
          <div className="reviewDesc">{review.reviewDesc}</div>
          <span className="reviewCreateAt">{review.createdAt}</span>
          <span className="reviewAutorInfo">{review.autorInfo[0]}***님</span>
          <span className="reviewLikedCnt">+{review.likedCnt}</span>
        </ReviewInfo>
      </ReviewComponent>
    )
}

export default function Review({reviewState}:{reviewState:ReviewCardComponent[]}){
  return (
    <>
      {reviewState.length > 0 && reviewState.map((review:ReviewCardComponent) => {
          return <ReviwItem key={review.reviewId} review={review} />
      })}
    </>
  );
}