import {useSelector} from 'react-redux';
import styled, {css} from 'styled-components';
import {ReviewCardComponent} from '../../interface/Review';
import {RootState} from '../../common/store';

function ReviwItem({review}:{review:ReviewCardComponent}){
    const reviewImage:string = review.reviewImageUrl;

    return(
      <ReviewComponent image={reviewImage.length}>
        {reviewImage.length > 0 && <ReviewPhoto><img src={reviewImage}/></ReviewPhoto>}
        <ReviewInfo>
          <div className="reviewTitle">{review.reviewTitle}</div>
          <div className="reviewText">{review.reviewDesc}</div>
          <span className="reviewCreateAt">{review.createdAt}</span>
          <span className="reviewAutorInfo">{review.autorInfo}</span>
          <span className="reviewLikedCnt">{review.likedCnt > 999 ? '999+' : review.likedCnt}</span>
        </ReviewInfo>
      </ReviewComponent>
    )
}

export default function Review(){
  const reviewState:ReviewCardComponent[] = useSelector((state:RootState) => state.Review);
  return (
    <>
      {reviewState.length > 0 && reviewState.map((review:ReviewCardComponent) => {
          return <ReviwItem key={review.reviewId} review={review} />
      })}
    </>
  );
}

const ReviewComponent = styled.div<{image:number}>`
  position:relative;
  left:0%;
  right:0%;
  top:0%;
  bottom:0%;
  background-color:#FFFFFF;
  box-shadow: 0 4px 4px rgba(0,0,0,0.25);
  border-radius:10px;
  width:312px;
  height: ${props => props.image > 0 ? `394px` : `168px`};
`
const ReviewPhoto = styled.div`
  &>img{
    width:312px;
    height:226px;
    border-radius: 10px 10px 0 0;
  }
`

const ReviewInfo = styled.div`
  position:absolute;
  width:312px;
  height:168px;
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  letter-spacing: -0.003em;
  color: #000000;

  &>.reviewTitle{
    position:absolute;
    height:22px;
    left:5.13%;
    right:5.13%;
    top:9.52%;
    bottom:77.38%;
    font-weight:bold;
    font-size:16px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }

  &>.reviewText{
    position:absolute;
    left:5.13%;
    right:5.13%;
    top:22.62%;
    bottom:51.19%;
    font-weight:normal;
    font-size:14px;
    height:44px;
    line-height:22px;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    overflow:hidden;
    text-overflow:ellipsis;
    word-break:break-all;
  }
  
  &>.reviewCreateAt, &>.reviewAutorInfo{
    position:absolute;
    top:79.17%;
    bottom:9.52%;
    font-weight:normal;
    font-size:12px;
    line-height:19px;
    opacity:0.5;
  }
  &>.reviewCreateAt{
    left:5.13%;
    right:73.08%;
  }
  &>.reviewAutorInfo{
    left:29.49%;
    right:52.56%;
  }

  &>.reviewLikedCnt{
    position:absolute;
    left:76.6%;
    right:14.1%;
    top:79.17%;
    bottom:9.52%;
    font-style:normal;
    font-weight:normal;
    font-size:12px;
    line-height:19px;
    text-align:right;
    letter-spacing:0.004em;
    color:#FF701D;
  }
`