import {ProductListItemComponent} from '../../interface/Product';
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

function ProductListItem({product}:{product:ItemInfoComponent}){

  return (
    <ProductItem >
      <img src={product.productItem.productImageUrl[0]} className="ProductImg"/>
      {product.productItem.productReviewCnt > 99 &&
        (<UpperRight>
          {product.productItem.productReviewCnt > 999 ? <img src={badge1000}/> : <img src={badge100}/>}
        </UpperRight>)}
      <BrandTitle>{product.productItem.brandTitle}</BrandTitle>
      <ProductTitle>{product.productItem.productTitle}</ProductTitle>
      <ProductPrice>{useCommaNumber(product.productItem.productPrice)}원</ProductPrice>
      <img src={ProductReviewStarImg} className="ProductReviewStar"/>
      <ProductReviewPoint>{product.productItem.productReviewPoint}</ProductReviewPoint>
      <img src={Rectangle} className="Rectangle"/>
      <ProductReview>
        <img src={ProductReviewCntImg}/>
        <ProductReviewCnt>{useCommaNumber(product.productItem.productReviewCnt)}</ProductReviewCnt>
      </ProductReview>
      <ProductTagWrap>
        {product.productItem.productTags.map((tag:string, index)=>{
          return(<ProductTag key={index}>{tag}</ProductTag>)
        })}
      </ProductTagWrap>
    </ProductItem>
  );
}

export default ProductListItem;