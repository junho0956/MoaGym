import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useHistory, useLocation} from 'react-router-dom';
import {nodragImage} from '../../common/nodragImage';
import {
    ProductList,
    PhotoReview,
} from '../../shared';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { WeekBestPage } from '../WeekBest-component/WeekBest';
import { BrandNewProduct } from '../../shared/BrandNewProduct/BrandNewProduct';

import {productReview_TC, brand_TC, brandNewProduct_TC, brandtype} from '../../common/tc';
import {PRODUCT_LIST_DIRECTION} from '../../interface/Product';
import {ItemInfo_TC} from '../../common/tc';

import banner1 from './image/banner1.svg';
import banner2 from './image/banner2.svg';
import banner3 from './image/banner3.svg';
import CBottom from './image/categoryBottom.svg';
import CTop from './image/categoryTop.svg';
import CYoga from './image/categoryYoga.svg';
import CGym from './image/categoryGym.svg';
import noBrand from './image/noBrand.svg';

import {
    HomeContainer,
    SlideWrap,
    HomeWeekBest,
    HomeWeekBestTitle,
    HomeWeekBestDesc,
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

const Pcategory:string[] = [CGym, CYoga, CTop, CBottom];
const settings = { // slick default settings
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll:1,
}

export const HomePage = () => {

    const history = useHistory();
    const { pathname } = useLocation();

    useEffect(() => nodragImage(), []);

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
                <HomeWeekBestTitle>이번주 BEST</HomeWeekBestTitle>
                <HomeWeekBestDesc>매주 금요일 갱신</HomeWeekBestDesc>
                <Link to='/weekbest'>
                    <MoreBtn>더보기</MoreBtn>
                </Link>

                {/* <MoreBtn onClick={() => {history.push(`${pathname}/weekbest`)}}>더보기</MoreBtn> */}
                
            </HomeWeekBest>

            <ProductList product={ItemInfo_TC} direction={PRODUCT_LIST_DIRECTION.HORIZONTAL}/>

            <PopularCategory>
                <PopularCategoryTitle>
                    인기 카테고리
                    <MoreBtn onClick={() => history.push('./category')}>더보기</MoreBtn>
                </PopularCategoryTitle>
                <PopularCategoryItemWrap>
                    {Pcategory.map((item:string, index) => {
                        return(
                            <PopularCategoryItem key={index}>
                                <img src={item} alt="Pcategory_img"/>
                            </PopularCategoryItem>
                        )
                    })}
                </PopularCategoryItemWrap>
            </PopularCategory>

            <HomeRectangle />

            <BrandNewProduct products={brandNewProduct_TC}/>
            <img src={noBrand} className="noBrandImg" alt="noBrandImg"/>

            <HomeRectangle />

            <PhotoReviewTitle>사진후기로 미리 입어보기</PhotoReviewTitle>
            <PhotoReview itemList={productReview_TC} initSize={6}></PhotoReview>

            <RecommendBrand>
                <RecommendBrandTitle>
                    추천 국내 브랜드
                    <MoreBtn>더보기</MoreBtn>
                </RecommendBrandTitle>
                <RecommentBrandList>
                    {brand_TC.map((item:brandtype) => {
                        return(
                            <RecommendBrandItem key={item.brandid}>
                                <img src={item.brandProfileImage}/>
                                <div>{item.brandName}</div>
                            </RecommendBrandItem>
                        )
                    })}
                </RecommentBrandList>
            </RecommendBrand>
        </HomeContainer>   
    )
}