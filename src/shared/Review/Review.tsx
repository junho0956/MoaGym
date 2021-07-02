import React, {useState, useEffect, useRef, useCallback} from 'react';
import {ReviewCardComponent} from '../../interface/Review';
import {
  ReviewComponent,
  ReviewPhoto,
  ReviewInfo,
  ReviewStarPoint,
  ReviewItemLoading,
} from './style';
import {getReviewStarPointNoRef} from '../../common/getReviewStarPoint';
import rectangle from '../../common/image/Rectangle.svg';

function ReviewLoading(){
  return(
    <ReviewItemLoading>
      <div className="reviewItemLoadingimg" />
      <div className="reviewItemLoadinginfo1" />
      <div className="reviewItemLoadinginfo2" />
      <div className="reviewItemLoadinginfo3" />
      <div className="reviewItemLoadinginfo4" />
    </ReviewItemLoading>
  )
}

function ReviwItem({review}:{review:ReviewCardComponent}){
    const reviewImage:{url:string}[] = review.reviewImageUrl;
    const reviewRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);
    const rimg = useRef<HTMLImageElement>(document.createElement('img'));
    
    useEffect(() => {
      if(reviewImage.length > 0){
        if(!loading){
          getReviewStarPointNoRef(((reviewRef.current as HTMLDivElement).children[1] as HTMLDivElement).firstChild as HTMLDivElement, review.reviewPoint);
        }
      }
      else{
          getReviewStarPointNoRef(((reviewRef.current as HTMLDivElement).firstChild as HTMLDivElement).firstChild as HTMLDivElement, review.reviewPoint);   
      }
    }, [reviewImage, loading])

    useEffect(() => {
      if(reviewImage.length>0){
        rimg.current.alt = "reviewImage_alt";
        rimg.current.src = reviewImage[0].url;
        rimg.current.onload = function(){
          setLoading(false);
        }
      }
    }, [reviewImage]);

    useEffect(() => {
      if(reviewImage.length > 0 && !loading){
        ((reviewRef.current as HTMLDivElement).firstChild as HTMLDivElement).appendChild(rimg.current);
      }
    }, [loading, reviewImage]);

    return(
      <ReviewComponent ref={reviewRef} image={reviewImage.length}>
        {reviewImage.length > 0 ?
          loading ? <ReviewLoading /> :
          <React.Fragment>
            <ReviewPhoto className="absbs"></ReviewPhoto>
            <ReviewInfo>
              <ReviewStarPoint></ReviewStarPoint>
              <div className="reviewProductSizeTitle">{review.reviewOption}</div>
              <img src={rectangle} className="reviewRectangle" alt="rectangle-img"></img>
              <div className="reviewDesc">{review.reviewDesc}</div>
              <span className="reviewCreateAt">{review.createdTime.substring(0, 10)}</span>
              <span className="reviewAutorInfo">{review.authorName[0]}***님</span>
            </ReviewInfo>
          </React.Fragment>
        : <ReviewInfo>
            <ReviewStarPoint></ReviewStarPoint>
            <div className="reviewProductSizeTitle">{review.reviewOption}</div>
            <img src={rectangle} className="reviewRectangle" alt="rectangle-img"></img>
            <div className="reviewDesc">{review.reviewDesc}</div>
            <span className="reviewCreateAt">{review.createdTime.substring(0, 10)}</span>
            <span className="reviewAutorInfo">{review.authorName[0]}***님</span>
          </ReviewInfo>
        }
      </ReviewComponent>
    )
}

const Review = ({reviewState}:{reviewState:ReviewCardComponent[]}) => {
  
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

export default React.memo(Review);