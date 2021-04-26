import React, {useState, useEffect, useRef} from 'react';
import {applyOnMouse} from '../../common/applyOnMouse';
import {ReviewCardComponent} from '../../interface/Review';
import reviewStarImg from './image/reviewStarImg.svg';
import rectangleImg from './image/Rectangle.svg';
import {
    PhotoReviewContainer, 
    PhotoReviewUl,
    PhotoReviewLi,
    PhotoReviewItemContainer,
    PhotoReviewItemAuthor,
    PhotoReviewItemPoint,
    PhotoReviewItemText,
    PhotoReviewItemBrand,
    PhotoReviewItemLoading,
} from './style';
import { nodragImage } from '../../common/nodragImage';

const PhotoReviewLoading = () => {

    return(
        <PhotoReviewItemLoading>
            <div className="photoReviewItemLoadingImg"></div>
            <div className="photoReviewItemLoadingInfo1"></div>
            <div className="photoReviewItemLoadingInfo2"></div>
            <div className="photoReviewItemLoadingInfo3"></div>
        </PhotoReviewItemLoading>
    )

}

const PhotoReviewItem = ({item}:{item:ReviewCardComponent}) => {

    const [loading, setLoading] = useState(true);
    const primg = useRef<HTMLImageElement>(document.createElement('img'));
    const prRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        primg.current.alt = "photoreview_alt";
        primg.current.className = 'photoReviewItemImg';
        primg.current.onload = function(){
            setLoading(false);
        }
        primg.current.src = item.reviewImageUrl[0].url;
    }, [item])

    useEffect(() => {
        if(!loading){
            (prRef.current as HTMLDivElement).insertBefore(primg.current, (prRef.current as HTMLDivElement).firstChild);
        }
    }, [loading]);

    return(
        <PhotoReviewItemContainer ref={prRef}>
            {loading ? <PhotoReviewLoading /> : 
            <React.Fragment>
                <PhotoReviewItemAuthor>
                    {item.authorName[0]}**님의 후기
                </PhotoReviewItemAuthor>
                <img src={reviewStarImg} className="photoReviewItemStarImg" alt="photoReviewStarimg_alt"/>
                <PhotoReviewItemPoint>{item.reviewPoint}</PhotoReviewItemPoint>
                <img src={rectangleImg} className="photoReviewItemRectangleImg" alt="photoreview_rectangle_alt"/>
                <PhotoReviewItemBrand>{item.brandName}</PhotoReviewItemBrand>
                <PhotoReviewItemText>{item.reviewDesc}</PhotoReviewItemText>
            </React.Fragment>
            }
        </PhotoReviewItemContainer>
    )

}

const PhotoReview = ({itemList, initSize}:{itemList:ReviewCardComponent[], initSize:number}) => {

    const wrap = useRef<HTMLUListElement>(null);

    let itemListArray:ReviewCardComponent[] = [];
    for(let i = 0; i<itemList.length && itemListArray.length<initSize; i++){
        if(itemList[i].reviewImageUrl.length>0){
            itemListArray.push(itemList[i]);
        }
    }

    useEffect(() => {
        wrap && applyOnMouse(wrap);
        nodragImage();
    },[itemList]);

    return(
        <PhotoReviewContainer>
            <PhotoReviewUl ref={wrap}>
                {itemListArray.map((item:ReviewCardComponent) => {
                    return(
                        <PhotoReviewLi key={item.reviewId}>
                            <PhotoReviewItem item={item} />
                        </PhotoReviewLi>
                    )
                })}
            </PhotoReviewUl>
        </PhotoReviewContainer>
    )

}

export default React.memo(PhotoReview);