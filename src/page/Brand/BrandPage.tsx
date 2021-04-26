import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../common/store';
import {useLocation} from 'react-router-dom';
import {
    BrandPageContainer,
    BrandRectangle,
    BrandTitle,
    BrandLink,
    BrandName,
    BrandBanner,
    BrandTabsubmenu,
    BrandTabsubmenuLeft,
    BrandTabsubmenuRight,
} from './style';
import { brandDataType } from '../../hook/useInitData';
import TestBanner from './brandbanner.png';
import { PRODUCT_LIST_DIRECTION } from '../../interface/Product';
import ProductList from '../../shared/Product/List';
import Review from '../../shared/Review/Review';

const Tabsubmenu = ({data, view}:{data:brandDataType[], view:boolean}) => {
    
    const [subdata, setSubdata] = useState<brandDataType[]>([]);
    
    useEffect(() => {
        setSubdata(data);
    }, [data]);

    return (
        <React.Fragment>
            {
                subdata.length>0 &&
                view
                ? <ProductList product={subdata[0]?.brandData} direction={PRODUCT_LIST_DIRECTION.VERTICAL} />
                : subdata[0]?.brandData.map(item => {
                    return (
                        <Review key={item.productId+'s'} reviewState={item.productReview}/>
                    )
                })
            }
        </React.Fragment>
    )

}

export const BrandPage = () => {

    const location = useLocation();

    const brandAllData = useSelector((state:RootState) => state.BrandDataReducer);
    const [brandData, setBrandData] = useState<brandDataType[]>([]);
    const [selectTab, setSelectTab] = useState<boolean>(true);

    useEffect(() => {
        setBrandData(brandAllData.filter(item => item.brandName === location.state));
    },[brandAllData]);

    function changeTab(tab:string){
        if(tab === 'product') setSelectTab(true);
        else setSelectTab(false);
    }

    return (
        <BrandPageContainer>
            <BrandRectangle />
            <BrandTitle>
                <BrandName>{brandData[0]?.brandName}</BrandName>
                <BrandLink><a href="#" target="_blank">Mall</a></BrandLink>
            </BrandTitle>
            <BrandBanner>
                <img src={TestBanner} alt="brandpage_testbanner"></img>
            </BrandBanner>
            <BrandTabsubmenu>
                <BrandTabsubmenuLeft selected={selectTab} onClick={() => changeTab('product')}>제품</BrandTabsubmenuLeft>
                <BrandTabsubmenuRight selected={!selectTab} onClick={() => changeTab('review')}>리뷰</BrandTabsubmenuRight>
            </BrandTabsubmenu>
            <Tabsubmenu data={brandData} view={selectTab}/>
        </BrandPageContainer>
    )

}