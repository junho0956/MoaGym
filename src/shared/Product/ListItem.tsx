import {ProductListItemComponent} from '../../interface/Product';
import {
  ProductItem,
  ProductReviewCnt,
  ProductTitle,
  BrandTitle,
  ProductPrice,
  ProductReviewPoint,
  ProductReview,
  UpperRight,
} from './style'
import ProductReviewCntImg from '../../common/image/ProductReviewCntImg.svg';
import ProductReviewStarImg from '../../common/image/ProductReviewStarImg.svg';
import badge1000 from '../../common/image/badge1000.svg';
import badge100 from '../../common/image/badge100.svg'
import Rectangle from '../../common/image/Rectangle.svg';

function ProductListItem({product}:{product:ProductListItemComponent}){

  return (
    <ProductItem >
      <img src={product.productImageUrl} className="ProductImg"/>
      {product.productReviewCnt > 99 &&
        (<UpperRight>
          {product.productReviewCnt > 999 ? <img src={badge1000}/> : <img src={badge100}/>}
        </UpperRight>)}
      <BrandTitle>{product.brandTitle}</BrandTitle>
      <ProductTitle>{product.productTitle}</ProductTitle>
      <ProductPrice>{product.productPrice}원</ProductPrice>
      <img src={ProductReviewStarImg} className="ProductReviewStar"/>
      <ProductReviewPoint>{product.productReviewPoint}</ProductReviewPoint>
      <img src={Rectangle} className="Rectangle"/>
      <ProductReview>
        <img src={ProductReviewCntImg}/>
        <ProductReviewCnt>{product.productReviewCnt}</ProductReviewCnt>
      </ProductReview>
    </ProductItem>
  );
}

export default ProductListItem;