import { useEffect, useRef, useCallback } from 'react';
import { ItemInfoComponent } from '../../interface/ItemInfo';
import PhotoReview from '../../shared/PhotoReview/PhotoReview';
import Review from '../../shared/Review/Review';
import {
    ItemInfoContainer,
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
    ArrowUp,
} from './style';
import {slider} from '../../common/slider';
import {useCommaNumber} from '../../common/useCommaNumber';
import {getReviewStarPoint} from '../../common/getReviewStarPoint';
// import { ReviewCardComponent } from '../../interface/Review';
import leftBtn from './image/btn_itemdetail_left.svg';
import rightBtn from './image/btn_itemdetail_right.svg';
import pickPhotoReview from './image/pickPhotoReview.svg';
import starrateTitle from './image/starrateTitle.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';

export const ItemInfoPage = () => {

    const product:ItemInfoComponent = useSelector((state:RootState) => state.ItemInfo);
    const slideWrap = useRef<HTMLDivElement>(null);
    const slidePoint = useRef<HTMLDivElement>(null);
    const reviewStar = useRef<HTMLDivElement>(null);
    const reviewStarDetail = useRef<HTMLDivElement>(null);

    const pageMoveTop = useCallback(() => {
        const AppContainer = document.getElementById('AppContainer');
        AppContainer?.scrollTo(0,0);
    }, []);

    useEffect(() => {
        if(product.brandName !== 'brandName'){
            slideWrap && slider(slideWrap, 360, slidePoint);
            reviewStar && getReviewStarPoint(reviewStar, product.productReviewPoint);
            reviewStarDetail && getReviewStarPoint(reviewStarDetail, product.productReviewPoint);
            (reviewStarDetail.current as HTMLDivElement)
            .childNodes.forEach(item => {
                (item as HTMLImageElement).style.width = '36px';
                (item as HTMLImageElement).style.height = '36px';
            })
        }
    }, [product]);

    return(
        <ItemInfoContainer>
            <SlideWrap ref={slideWrap}>
                <img src={leftBtn} className="ItemInfoslideLeftBtn"/>
                <img src={rightBtn} className="ItemInfoslideRightBtn"/>
                <SlideContainer>
                    <SlideUl>
                        {product.productImageUrl.map((item:{url:string}, index) => {
                            return(
                            <SlideLi key={index}>
                                <img src={item.url} alt="ItemInfo_img"/>
                            </SlideLi>)
                        })}
                    </SlideUl>
                </SlideContainer>
            </SlideWrap>
            <SlidePointWrap ref={slidePoint}>
                {product.productImageUrl.map((item, index) => {
                    return <SlidePoint key={index}/>
                })}
            </SlidePointWrap>
            <BrandTitle>{product.brandName}</BrandTitle>
            <ProductTitle>{product.productName}</ProductTitle>
            <ProductTagWrap>
                {<ProductTag>
                    <ProductTagLabel>{product.category}</ProductTagLabel>
                </ProductTag>}
            </ProductTagWrap>
            <ItemInfoLine />
            <StarRate_Item_ReviewStar ref={reviewStar}/>
            <ProductReview>
                <span className="ItemInfoProductReviewCnt">{useCommaNumber(product.productReviewCnt)}개</span>
                <span>의 후기를 모았어요.</span>
                <ProductPrice>{useCommaNumber(product.productPrice)}원</ProductPrice>
            </ProductReview>
            <img src={pickPhotoReview} className="pickPhotoReview" alt="pickPhotoReview_alt"/>
            <PhotoReview itemList={product.productReview} initSize={4}></PhotoReview>
            <div className="ItemInfoContainerRectangle1"/>
            <StarRate_ItemDetail>
                <img src={starrateTitle} className="starrateTitle" alt="starrateTitle_alt"/>
                <StarRate_ItemDetail_ReviewCnt>{useCommaNumber(product.productReviewCnt)}개</StarRate_ItemDetail_ReviewCnt>
                <StarRate_ItemDetail_ReviewStar ref={reviewStarDetail}/>
                <StarRate_ItemDetail_ReviewPoint>{product.productReviewPoint}</StarRate_ItemDetail_ReviewPoint>
            </StarRate_ItemDetail>
            <Review reviewState={product.productReview}/>
            <ArrowUp onClick={pageMoveTop}><i className="fas fa-arrow-up"></i></ArrowUp>
        </ItemInfoContainer>
    )
}