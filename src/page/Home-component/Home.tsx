import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PhotoReview from '../../shared/PhotoReview/PhotoReview';
import ProductList from '../../shared/Product/List';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BrandNewProduct from '../../shared/BrandNewProduct/BrandNewProduct';

import {PRODUCT_LIST_DIRECTION} from '../../interface/Product';

import banner1 from './image/banner1.png';
import banner2 from './image/banner2.png';
import banner3 from './image/banner3.png';
import CBottom from './image/categoryBottom.png';
import CTop from './image/categoryTop.png';
import CYoga from './image/categoryYoga.png';
import CGym from './image/categoryGym.png';
import noBrand from './image/noBrand.svg';

import {
    HomeContainer,
    SlideWrap,
    HomeWeekBest,
    HomeWeekBestTitle,
    PopularCategory,
    PopularCategoryTitle,
    PopularCategoryItemWrap,
    PopularCategoryItem,
    HomeRectangle,
    PhotoReviewTitle,
    RecommendBrand,
    RecommendBrandTitle,
    MoreBtn,
    RecommentBrandList,
    RecommendBrandItem,
} from './style';
import store, { RootState } from '../../common/store';
import { brandDataType } from '../../hook/useInitData';
import { changeCategory } from '../../shared/Category/state';
import useWeekBestItem from '../../hook/useWeekBestItem';
import usePhotoReview from '../../hook/usePhotoReview';
import useNewProduct from '../../hook/useNewProduct';
import useBrandList from '../../hook/useBrandList';

const Pcategory:string[] = [CGym, CYoga, CTop, CBottom];
const settings = { // slick library default settings
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll:1,
}

export const HomePage = () => {

    const history = useHistory();
    const brand = useSelector((state:RootState) => state.BrandDataReducer);
    const categorys = useSelector((state:RootState) => state.Category);
    const weekbest = useWeekBestItem(brand);
    const newProduct = useNewProduct(brand);
    const photoReview = usePhotoReview(brand);
    const brandList = useBrandList(brand);

    return(
        <HomeContainer>
            <SlideWrap>
                <Slider {...settings}>
                    <div>
                        <img src={banner1} alt="banner_img"/>
                    </div>
                    <div>
                        <img src={banner2} alt="banner_img"/>
                    </div>
                    <div>
                        <img src={banner3} alt="banner_img"/>
                    </div>
                </Slider>
            </SlideWrap>

            <HomeWeekBest>
                <HomeWeekBestTitle>BEST 상품</HomeWeekBestTitle>
                <MoreBtn onClick={() => {
                    history.push({
                        pathname: `/weekbest`,
                        state: weekbest.inweek,
                    })
                }}>더보기</MoreBtn>
                
            </HomeWeekBest>

            <ProductList product={weekbest.inhome} direction={PRODUCT_LIST_DIRECTION.HORIZONTAL}/>

            <PopularCategory>
                <PopularCategoryTitle>
                    인기 카테고리
                    <MoreBtn onClick={() => history.push('./category')}>더보기</MoreBtn>
                </PopularCategoryTitle>
                <PopularCategoryItemWrap>
                    {categorys.slice(0,4).map((item, index) => {
                        return(
                            <PopularCategoryItem key={item.id}>
                                <img src={Pcategory[index]} alt="Homecategory_img" onClick={() => {
                                    history.push('/categoryDetail');
                                    store.dispatch(changeCategory(item.id));
                                }}/>
                            </PopularCategoryItem>
                        )
                    })}
                </PopularCategoryItemWrap>
            </PopularCategory>

            <HomeRectangle />

            <BrandNewProduct products={newProduct}/>
            <img src={noBrand} className="noBrandImg" alt="noBrandImg"/>

            <HomeRectangle />

            <PhotoReviewTitle>사진후기로 미리 입어보기</PhotoReviewTitle>
            <PhotoReview itemList={photoReview} initSize={10}></PhotoReview>

            <RecommendBrand>
                <RecommendBrandTitle>
                    추천 국내 브랜드
                    <MoreBtn onClick={()=>{history.push('./brandlist')}}>더보기</MoreBtn>
                </RecommendBrandTitle>
                <RecommentBrandList>
                    {brandList.map((item:brandDataType) => {
                        return(
                            <RecommendBrandItem key={item.brandId} onClick={() => {
                                history.push({
                                    pathname: `brand/${item.brandName}`,
                                    state:item.brandName,
                                })
                            }}>
                                <img src={item.brandImg}/>
                                <div>{item.brandName}</div>
                            </RecommendBrandItem>
                        )
                    })}
                </RecommentBrandList>
            </RecommendBrand>
        </HomeContainer>   
    )
}