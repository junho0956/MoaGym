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

function PhotoReview({itemList}:{itemList:ReviewCardComponent[]}){

    itemList.sort(function(a:ReviewCardComponent,b:ReviewCardComponent):number{
        return a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0; 
    })
    
    const itemList4th:ReviewCardComponent[] = [];
    for(let i = 0; i<itemList.length && itemList4th.length<4; i++){
        if(itemList[i].reviewImageUrl.length>0){
            itemList4th.push(itemList[i]);
        }
    }

    return(
        <PhotoReviewContainer>
            <PhotoReviewUl>
                {itemList4th.map((item:ReviewCardComponent) => {
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