import React, {useState, useEffect, useRef} from 'react';
import { ItemInfoComponent } from '../../interface/ItemInfo';
import PhotoReview from '../../shared/PhotoReview/PhotoReview';
import Review from '../../shared/Review/Review';
import {
    ItemInfoContainer,
    TitleBar,
    TitleBarTitle,
    SlideWrap,
    SlideContainer,
    SlideUl,
    SlideLi,
    SlidePointWrap,
    SlidePoint,
    BrandTitle,
    ProductTitle,
    ProductPrice,
    ItemInfoLine,
    ProductTagWrap,
    ProductTag,
    ProductTagLabel,
    StarRate_Item_ReviewStar,
    ProductReview,
    StarRate_ItemDetail,
    StarRate_ItemDetail_ReviewCnt,
    StarRate_ItemDetail_ReviewPoint,
    StarRate_ItemDetail_ReviewStar,
    Popularity,
    Latest,
} from './style';
import {slider} from '../../common/slider';
import {useCommaNumber} from '../../common/useCommaNumber';
import {getReviewStarPoint} from '../../common/getReviewStarPoint';
import { ReviewCardComponent } from '../../interface/Review';
import arrow_back from './image/arrow_back.svg';
import leftBtn from './image/btn_itemdetail_left.svg';
import rightBtn from './image/btn_itemdetail_right.svg';
import reviewArrow from './image/icn_arrow_right_small.svg';
import pickPhotoReview from './image/pickPhotoReview.svg';
import starrateTitle from './image/starrateTitle.svg';

function ItemInfo({product}:{product:ItemInfoComponent}){

    const slideWrap = useRef<HTMLDivElement>(null);
    const slidePoint = useRef<HTMLDivElement>(null);
    const reviewStar = useRef<HTMLDivElement>(null);
    const reviewStarDetail = useRef<HTMLDivElement>(null);
    const popular = useRef<HTMLSpanElement>(null);
    const latest = useRef<HTMLSpanElement>(null);
    const [productReview, setProductReview] = useState(product.productReview.concat()
        .sort(function(a:ReviewCardComponent, b:ReviewCardComponent):number{
            return a.likedCnt < b.likedCnt ? 1 : a.likedCnt > b.likedCnt ? -1 : 0;
        }));

    function changeProductReview(checked:boolean){
        if(checked){ // true => popular
            (popular.current as HTMLSpanElement).style.color = "#000000";
            (latest.current as HTMLSpanElement).style.color = "#C1C1C1";
            
            setProductReview(product.productReview.concat().sort(function(a:ReviewCardComponent, b:ReviewCardComponent):number{
                return a.likedCnt < b.likedCnt ? 1 : a.likedCnt > b.likedCnt ? -1 : 0;
            }));
        }
        else{ // false => latest
            (popular.current as HTMLSpanElement).style.color = "#C1C1C1";
            (latest.current as HTMLSpanElement).style.color = "#000000";

            setProductReview(product.productReview.concat().sort(function(a:ReviewCardComponent, b:ReviewCardComponent):number{
                return a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0;
            }));
        }
    }

    useEffect(() => {
        slideWrap && slider(slideWrap, slidePoint);
        reviewStar && getReviewStarPoint(reviewStar, product.productReviewPoint);
        reviewStarDetail && getReviewStarPoint(reviewStarDetail, product.productReviewPoint);
        (reviewStarDetail.current as HTMLDivElement)
        .childNodes.forEach(item => {
            (item as HTMLImageElement).style.width = '36px';
            (item as HTMLImageElement).style.height = '36px';
        })
    }, [product]);

    return(
        <ItemInfoContainer>
            <TitleBar>
                <img src={arrow_back}/>
                <TitleBarTitle>운동복 상세 정보</TitleBarTitle>
            </TitleBar>
            <SlideWrap ref={slideWrap}>
                <img src={leftBtn} className="slideLeftBtn"/>
                <img src={rightBtn} className="slideRightBtn"/>
                <SlideContainer>
                    <SlideUl>
                        {product.productImageUrl.map((item:string, index) => {
                            return(
                            <SlideLi key={index}>
                                <img src={item}/>
                            </SlideLi>)
                        })}
                    </SlideUl>
                </SlideContainer>
            </SlideWrap>
            <SlidePointWrap ref={slidePoint}>
                {product.productImageUrl.map((index) => {
                    return <SlidePoint key={index}/>
                })}
            </SlidePointWrap>
            <BrandTitle>{product.brandTitle}</BrandTitle>
            <ProductTitle>{product.productTitle}</ProductTitle>
            <ProductTagWrap>
                {product.productTags.map((tag:string, index) => {
                    return(
                        <ProductTag key={index}>
                            <ProductTagLabel>{tag}</ProductTagLabel>
                        </ProductTag>
                    )
                })}
            </ProductTagWrap>
            <ProductPrice>{useCommaNumber(product.productPrice)}원</ProductPrice>
            <ItemInfoLine />
            <StarRate_Item_ReviewStar ref={reviewStar}/>
            <ProductReview>
                <span className="ItemInfoProductReviewCnt">{useCommaNumber(product.productReviewCnt)}개</span>
                <span>의 후기를 모았어요.</span>
                <img src={reviewArrow} />
            </ProductReview>
            <img src={pickPhotoReview} className="pickPhotoReview" />
            <PhotoReview itemList={product.productReview}></PhotoReview>
            <div className="ItemInfoContainerRectangle1"/>
            <StarRate_ItemDetail>
                <img src={starrateTitle} className="starrateTitle"/>
                <StarRate_ItemDetail_ReviewCnt>{useCommaNumber(product.productReviewCnt)}개</StarRate_ItemDetail_ReviewCnt>
                <StarRate_ItemDetail_ReviewStar ref={reviewStarDetail}/>
                <StarRate_ItemDetail_ReviewPoint>{product.productReviewPoint}</StarRate_ItemDetail_ReviewPoint>
            </StarRate_ItemDetail>
            <div className="ItemInfoPL">
                <Popularity ref={popular} onClick={() => changeProductReview(true)}>인기순</Popularity>
                <Latest ref={latest} onClick={() => changeProductReview(false)}>최신순</Latest>
            </div>
            <Review reviewState={productReview}/>
        </ItemInfoContainer>
    )
}

export default ItemInfo;