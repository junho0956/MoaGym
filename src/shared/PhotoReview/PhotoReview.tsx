import React, {useEffect, useRef} from 'react';
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
    PhotoReviewItemBrand
} from './style';
import { nodragImage } from '../../common/nodragImage';

export const PhotoReviewItem = ({item}:{item:ReviewCardComponent}) => {
    
    return(
        <PhotoReviewItemContainer>
            <img src={item.reviewImageUrl[0].url} className="photoReviewItemImg"/>
            <PhotoReviewItemAuthor>
                {item.authorName[0]}**님의 후기
            </PhotoReviewItemAuthor>
            <img src={reviewStarImg} className="photoReviewItemStarImg"/>
            <PhotoReviewItemPoint>{item.reviewPoint}</PhotoReviewItemPoint>
            <img src={rectangleImg} className="photoReviewItemRectangleImg"/>
            <PhotoReviewItemBrand>{item.brandName}</PhotoReviewItemBrand>
            <PhotoReviewItemText>{item.reviewDesc}</PhotoReviewItemText>
        </PhotoReviewItemContainer>
    )

}

export const PhotoReview = ({itemList, initSize}:{itemList:ReviewCardComponent[], initSize:number}) => {

    const wrap = useRef<HTMLUListElement>(null);
    
    const itemListArray:ReviewCardComponent[] = [];
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