import {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { nodragImage } from '../../common/nodragImage';
import {
    ProductList,
    PhotoReview,
} from '../../shared';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrandNewProduct } from '../../shared/BrandNewProduct/BrandNewProduct';

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
import { ItemInfoComponent } from '../../interface/ItemInfo';
import store, { RootState } from '../../common/store';
import { brandDataType } from '../../hook/InitData';
import { weekbestUpdate } from '../WeekBest-component/state';
import { ReviewCardComponent } from '../../interface/Review';
// import { brandList, brandListType} from '../../hook/InitData';

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
    const brand = useSelector((state:RootState) => state.BrandDataReducer);
    const [weekbestInHomePage, setWeekbestInHomePage] = useState<ItemInfoComponent[]>([]);
    const [photoReview, setPhotoReview] = useState<ReviewCardComponent[]>([]);
    const [newProduct, setNewProduct] = useState<ItemInfoComponent[]>([]);
    const [brandList, setBrandList] = useState<brandDataType[]>([]);

    useEffect(() => {
        if(brand.length > 0){
            let weekbestItemcopy:ItemInfoComponent[] = [];
            let photoReviewcopy:ReviewCardComponent[] = [];
            let newProductcopy:ItemInfoComponent[] = [];
            let brandListcopy:brandDataType[] = [];
            let brandcopy:{data:ItemInfoComponent[]}[] = [];
            let weekbestInHomePagecopy:ItemInfoComponent[] = [];
            
            brand.forEach((item, index) => {
                brandcopy.push({data:[]});
                item.brandData.forEach(item => {
                    brandcopy[index].data.push(item);
                })
            })
            brandcopy.forEach(item => {
                item.data.sort((a,b) => b.productReviewCnt - a.productReviewCnt);
                weekbestItemcopy.push(item.data[0]);
                weekbestItemcopy.push(item.data[1]);
                weekbestInHomePagecopy.push(item.data[0]);
            })
            brand.forEach((item:brandDataType) => {
                newProductcopy.push(item.brandData[0]);
                item.brandData.forEach(brandItem => {
                    brandItem.productReview.forEach(review => {
                        if((review.reviewImageUrl as {url:string}[]).length > 0){
                            photoReviewcopy.push(review);
                        }
                    })
                })
            })
            photoReviewcopy.sort((a,b) => Math.random() - 0.5);
            for(let i = 0; i<3; i++){
                brandListcopy.push(brand[i]);
            }
            store.dispatch(weekbestUpdate(weekbestItemcopy, brandcopy));
            setWeekbestInHomePage(weekbestInHomePagecopy);
            setPhotoReview(photoReviewcopy);
            setNewProduct(newProductcopy);
            setBrandList(brandListcopy);
        }
    }, [brand])

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
                {/* <HomeWeekBestDesc>매주 금요일 갱신</HomeWeekBestDesc> */}
                <MoreBtn onClick={() => {
                    history.push({
                        pathname: `/weekbest`,
                    })
                }}>더보기</MoreBtn>
                
            </HomeWeekBest>

            <ProductList product={weekbestInHomePage} direction={PRODUCT_LIST_DIRECTION.HORIZONTAL}/>

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