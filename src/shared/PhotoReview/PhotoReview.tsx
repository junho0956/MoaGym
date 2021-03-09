import {useEffect, useRef} from 'react';
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
} from './style';

function PhotoReviewItem({item}:{item:ReviewCardComponent}){

    return(
        <PhotoReviewItemContainer>
            <img src={item.reviewImageUrl[0]} className="photoReviewItemImg"/>
            <PhotoReviewItemAuthor>
                {item.autorInfo[0]}**님의 후기
            </PhotoReviewItemAuthor>
            <img src={reviewStarImg} className="photoReviewItemStarImg"/>
            <PhotoReviewItemPoint>{item.reviewPoint}</PhotoReviewItemPoint>
            <img src={rectangleImg} className="photoReviewItemRectangleImg"/>
            <PhotoReviewItemText>{item.reviewDesc}</PhotoReviewItemText>
        </PhotoReviewItemContainer>
    )

}

function PhotoReview({itemList, initSize}:{itemList:ReviewCardComponent[], initSize:number}){

    itemList.sort(function(a:ReviewCardComponent,b:ReviewCardComponent):number{
        return a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0; 
    })

    const wrap = useRef<HTMLUListElement>(null);
    
    const itemListArray:ReviewCardComponent[] = [];
    for(let i = 0; i<itemList.length && itemListArray.length<initSize; i++){
        if(itemList[i].reviewImageUrl.length>0){
            itemListArray.push(itemList[i]);
        }
    }

    useEffect(() => {
        wrap && applyOnMouse(wrap);
    },[]);

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

export default PhotoReview;