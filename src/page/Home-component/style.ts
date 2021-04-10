import styled from 'styled-components';

export const HomeContainer = styled.div`
    position:relative;

    &>.noBrandImg{
        position:relative;
        margin-top:16px;
        left:16px;
    }
`;

export const SlideWrap = styled.div`
    position:relative;
    width:360px;
    height:112px;
`;

export const SlideContainer = styled.div`
    position:relative;
    overflow-y:auto;
    &::-webkit-scrollbar{
        display:none;
    }
`;

export const SlideUl = styled.ul`
    list-style:none;
    padding:0;
    margin:0;
`;

export const SlideLi = styled.li`

`;

export const SlidePointWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: flex-start;
    padding: 0px;

    position: relative;
    width: 100%;
    height: 6px;
    margin-top:4px;
`;

export const SlidePoint = styled.span`
    position:static;
    height:6px;
    width:6px;
    border-radius:50%;
    background:#C1C1C1;
    margin:0px 4px 0px 4px;
`;

export const HomeWeekBest = styled.div`
    position:relative;
    width:335px;
    height:38px;
    left:25px;
    margin-top:48px;
`;

export const HomeWeekBestTitle = styled.span`
    position: absolute;
    width: 109px;
    height: 38px;
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 38px;

    display: flex;
    align-items: center;

    color: #3D3D3D;
`;

export const HomeWeekBestDesc = styled.span`
    position: absolute;
    width:82px;
    height: 19px;
    left:120px;
    top:13px;
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: -0.01em;

    color: #8B8B8B;
`;

export const PopularCategory = styled.div`
    position:relative;
    width:312px;
    left:24px;
    height:134px;
    margin-top:24px;
`;

export const PopularCategoryTitle = styled.div`
    position: relative;
    width: 336px;
    height: 32px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 38px;
    display: flex;
    align-items: center;

    color: #3D3D3D;
`;

export const PopularCategoryItemWrap = styled.div`
    position:relative;
    width:100%;
    display:flex;
    flex-direction:row;
    margin-top:7px;
    justify-content:space-between;
`;

export const PopularCategoryItem = styled.div`
    cursor: pointer;
    &>img{

    }
`;

export const HomeRectangle = styled.div`
    position:relative;
    width:360px;
    height:8px;
    background:#DFDFDF;
    margin-top:16px;
`;

export const PhotoReviewTitle = styled.div`
    position: relative;
    width: 212px;
    height: 38px;
    left: 24px;
    margin-top:32px;
    
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 38px;
    display: flex;
    align-items: center;
    color: #3D3D3D;
`;

export const RecommendBrand = styled.div`
    position:relative;
    width:336px;
    height:160px;
    left:24px;
    margin: 24px 0px 24px 0px;
`;

export const RecommendBrandTitle = styled.div`
    position: relative;
    width: 336px;
    height: 38px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 38px;

    display: flex;
    align-items: center;

    color: #3D3D3D;
`;

export const RecommentBrandList = styled.div`
    position:relative;
    width:312px;
    display:flex;
    flex-direction:row;   
    justify-content:space-between;
    margin-top:7px;
`;

export const RecommendBrandItem = styled.div`
    position: relative;
    display:flex;
    flex-direction: column;
    cursor: pointer;
    &>img{
        border-radius:10px;
        width:93px;
        height:93px;
    }

    &>div{
        position: absolute;
        width: 94px;
        height: 19px;
        left: 23px;
        top: 100px;

        font-family: Spoqa Han Sans Neo;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 19px;

        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.015em;

        color: #3D3D3D;
    }
`;

export const MoreBtn = styled.div`
    position:absolute;
    right:24px;
    top:10px;
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 19px;

    display: flex;
    align-items: center;
    text-align: right;
    letter-spacing: -0.4px;

    color: #FF701D;

    cursor:pointer;
`;