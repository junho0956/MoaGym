import {useRef, useEffect} from 'react';
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

function ProductListItem({product}:{product:ItemInfoComponent}){

  const item_ref = useRef<HTMLDivElement>(null);
  const move = useRef(true);
  const history = useHistory();

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


  return (
    <ProductItem ref={item_ref}>
      <img src={product.productImageUrl[0].url} className="ProductImg"/>
      {product.productReviewCnt > 99 &&
        (<UpperRight>
          {product.productReviewCnt > 999 ? <img src={badge1000}/> : <img src={badge100}/>}
        </UpperRight>)}
      <BrandTitle>{product.brandName}</BrandTitle>
      <ProductTitle>{product.productName}</ProductTitle>
      <ProductPrice>{useCommaNumber(product.productPrice)}원</ProductPrice>
      <img src={ProductReviewStarImg} className="ProductReviewStar"/>
      <ProductReviewPoint>{product.productReviewPoint}</ProductReviewPoint>
      <img src={Rectangle} className="Rectangle"/>
      <ProductReview>
        <img src={ProductReviewCntImg}/>
        <ProductReviewCnt>{useCommaNumber(product.productReviewCnt)}</ProductReviewCnt>
      </ProductReview>
      <ProductTagWrap>
        {/* {product..map((tag:string, index)=>{
          return(<ProductTag key={index}>{tag}</ProductTag>)
        })} */}
        <ProductTag>{product.category}</ProductTag>
      </ProductTagWrap>
    </ProductItem>
  );
}

export default ProductListItem;