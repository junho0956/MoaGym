import {useState, useEffect, useRef, useCallback} from 'react';
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
  
  const startIdx = useRef(0);
  const endIdx = useRef(0);
  const [review, setReview] = useState<ReviewCardComponent[]>([]);

  const checkScroll = useCallback(() => {
    const AppContainer = document.getElementById('AppContainer');
    const TotalHeight = AppContainer?.scrollHeight as number;
    const viewHeight = AppContainer?.clientHeight as number;
    const notViewHeight = AppContainer?.scrollTop as number;
    if(viewHeight+notViewHeight >= TotalHeight){
        const getProduct = reviewState.slice(startIdx.current, endIdx.current);
        startIdx.current += 10;
        endIdx.current += 10;
        setReview(review.concat(getProduct));
    }
}, [review]);

  useEffect(() => {
    startIdx.current = 10;
    endIdx.current = 20;
    setReview(reviewState.slice(0, 10));
  }, [reviewState]);

  useEffect(() => {
    const AppContainer = document.getElementById('AppContainer');
    (AppContainer as HTMLDivElement).addEventListener('scroll', checkScroll);        
    return () => {
        (AppContainer as HTMLDivElement).removeEventListener('scroll', checkScroll);
    }
}, [review]);

  return (
    <>
      {review.length > 0 && review.map((review:ReviewCardComponent) => {
          return <ReviwItem key={review.reviewId} review={review} />
      })}
    </>
  );
}