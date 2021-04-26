import React, {useState, useRef, useEffect} from 'react';
import {
  ProductItem,
  ProductReviewCnt,
  ProductTitle,
  BrandTitle,
  ProductPrice,
  ProductReviewPoint,
  ProductReview,
  ProductTagWrap,
  ProductTag,
  UpperRight,
  ProductItemLoading,
} from './style'
import {useCommaNumber} from '../../common/useCommaNumber';
import ProductReviewCntImg from './image/ProductReviewCntImg.svg';
import ProductReviewStarImg from './image/ProductReviewStarImg.svg';
import badge1000 from './image/badge1000.svg';
import badge100 from './image/badge100.svg'
import Rectangle from './image/Rectangle.svg';
import { ItemInfoComponent } from '../../interface/ItemInfo';
import {useHistory} from 'react-router-dom'; 
import store from '../../common/store';
import {setProduct} from '../../page/ItemInfo/state';

function ProductLoading(){
  return(
    <ProductItemLoading>
      <div className="productItemLoadingImg"></div>
      <div className="productItemLoadingInfo1"></div>
      <div className="productItemLoadingInfo2"></div>
      <div className="productItemLoadingInfo3"></div>
    </ProductItemLoading>
  )
}

function ProductListItem({product}:{product:ItemInfoComponent}){

  const loadImg = useRef<HTMLImageElement>(document.createElement('img'));
  const [loading, setLoading] = useState(true);
  const item_ref = useRef<HTMLDivElement>(null);
  const move = useRef(true);
  const history = useHistory();
  const price = useRef<string[]>(useCommaNumber(product.productPrice));
  const reviewCnt = useRef<string[]>(useCommaNumber(product.productReviewCnt));

  useEffect(() => {
    if(item_ref){
      item_ref.current?.addEventListener('mousedown', e => {
        move.current = false;
      })
      item_ref.current?.addEventListener('mousemove', e => {
        move.current = true;
      })
      item_ref.current?.addEventListener('mouseup', e => {
        if(!move.current){
          move.current = true;
          history.push('/product');
          store.dispatch(setProduct(product));
        }
      })
    }
  }, [])

  useEffect(()=>{
    loadImg.current.className = "ProductImg";
    loadImg.current.alt = "productItem_alt";
    loadImg.current.onload = function(){
      setLoading(false);
    }
    loadImg.current.src = product.productImageUrl[0].url;
  }, [product]);

  useEffect(() => {
    if(loading === false){
      (item_ref.current as HTMLDivElement).insertBefore(loadImg.current, (item_ref.current as HTMLDivElement).firstChild);
    }
  }, [loading])

  return (
    <ProductItem ref={item_ref}>
      {loading ? <ProductLoading /> :
        <React.Fragment>
          {product.productReviewCnt > 99 &&
            (<UpperRight>
              {product.productReviewCnt > 999 ? <img src={badge1000}/> : <img src={badge100}/>}
            </UpperRight>)
          }
          <BrandTitle>{product.brandName}</BrandTitle>
          <ProductTitle>{product.productName}</ProductTitle>
          <ProductPrice>{price.current}원</ProductPrice>
          <img src={ProductReviewStarImg} className="ProductReviewStar"/>
          <ProductReviewPoint>{product.productReviewPoint}</ProductReviewPoint>
          <img src={Rectangle} className="Rectangle"/>
          <ProductReview>
            <img src={ProductReviewCntImg}/>
            <ProductReviewCnt>{reviewCnt.current}</ProductReviewCnt>
          </ProductReview>
          <ProductTagWrap>
            <ProductTag>{product.category}</ProductTag>
          </ProductTagWrap>
        </React.Fragment>
      }
    </ProductItem>
  );
}

export default React.memo(ProductListItem);