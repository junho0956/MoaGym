import styled from 'styled-components';

export const ItemInfoContainer = styled.div`
    position:absolute;
    width:360px;
    height:100%;

    &>.pickPhotoReview{
        position:relative;
        left:25px;
        margin-top:24px;
        /* top:621px; */
    }
    &>.ItemInfoContainerRectangle1{
        position:relative;
        width:360px;
        height:4px;
        left:0px;
        margin-top:20px;
        /* top:887px; */
        background:#DFDFDF;
    }
    &>.ItemInfoPL{
        position:relative;
        width:83px;
        margin:24px 0px 0px 253px;
        height:19px;
        font-family: Spoqa Han Sans Neo;
        font-style: normal;
        font-weight: normal;
        font-size:12px;
        line-height:19px;
        display:flex;
        justify-content:space-evenly;
    }
`;

export const TitleBar = styled.div`
    position:relative;
    height:56px;
    left:0px;
    right:0px;
    /* top:32px; */

    &>img{
        position:absolute;
        width:24px;
        height:24px;
        left:24px;
        top:16px;
    }
`;

export const TitleBarTitle = styled.div`
    position:absolute;
    left:60px;
    right:87px;
    top:12px;
    bottom:12px;
    font-family:Spoqa Han Sans Neo, sans-serif;
    font-style:normal;
    font-weight:bold;
    font-size:18px;
    line-height:32px;
    display:flex;
    align-items:center;
    color:#3D3D3D;
`;

export const SlideWrap = styled.div`
    position:relative;
    width:360px;
    height:360px;
    /* top:88px; */
    /* transform: matrix(-1,0,0,1,0,0); */

    &>.slideLeftBtn{
        position:absolute;
        left:16px;
        z-index:9999;
        top:50%;
        transform:translate(0, -50%);
    }

    &>.slideRightBtn{
        position:absolute;
        right:16px;
        z-index:9999;
        top:50%;
        transform:translate(0, -50%);
    }
`;

export const SlideContainer = styled.div`
    position:relative;
    overflow:hidden;
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

    position: absolute;
    width: 100%;
    height: 6px;
    top: 424px;
`;

export const SlidePoint = styled.span`
    position:static;
    height:6px;
    width:6px;
    border-radius:50%;
    background:#C1C1C1;
    margin:0px 4px 0px 4px;
`;

export const BrandTitle = styled.div`
    position: relative;
    /* width: 33px;
    height: 19px; */
    left: 24px;
    /* top: 478px; */
    margin-top:32px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 19px;

    display: flex;
    align-items: center;
    letter-spacing: -0.015em;

    color: #000000;

    opacity: 0.6;
`;
export const ProductTitle = styled.div`
    position: relative;
    /* width: 174px;
    height: 32px; */
    left: 23px;
    /* top: 497px; */

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 32px;

    display: flex;
    align-items: center;
    text-align: right;

    color: #3D3D3D;
`;
export const ProductTagWrap = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;

    position:relative;
    height:24px;
    left:20px;
    /* top: 527px; */
`;
export const ProductTag = styled.div`
    position:relative;
    /* padding:1px 4px 0px 3px; */
    margin:0px 3px 0px 3px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;

    border: 0.5px solid #C1C1C1;
    border-radius:4px;
`;
export const ProductTagLabel = styled.div`
    position:static;
    font-family:Spoqa Han Sans Neo, sans-serif;
    font-style:normal;
    font-weight:normal;
    font-size:10px;
    line-height:15px;

    display:flex;
    align-items:center;
    text-align:center;
    letter-spacing:0.015em;

    color:#8B8B8B;

    flex:none;
    order:0;
    flex-grow:0;
    margin:0px 10px;
`;
export const ProductPrice = styled.div`
    position: absolute;
    /* width: 88px; */
    height: 24px;
    right: 24px;
    top: 497px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;

    display: flex;
    align-items: center;
    text-align: right;
    letter-spacing: -0.01em;

    color: #000000;
`;
export const ItemInfoLine = styled.div`
    position: relative;
    width: 312px;
    height: 0px;
    left: 24px;
    margin-top:4px;
    /* top: 554px; */

    border: 1px solid #DFDFDF;
`;
export const StarRate_Item_ReviewStar = styled.div`
    display:flex;
    flex-direction:row;
    align-items:flex-start;
    padding:0px;
    margin-top:4px;

    position:relative;
    width:80px;
    height:16px;
    left:23px;
    /* top:558px; */
`;
export const ProductReview = styled.div`
    position:relative;
    height:17px;
    left:24px;
    /* top:580px; */
    margin-top:4px;
    font-family:Spoqa Han Sans Neo, sans-serif;
    font-weight:bold;
    font-style:normal;
    font-size:14px;
    line-height:17px;

    display:flex;
    align-items:center;

    &>.ItemInfoProductReviewCnt{
        color:#FF701D;
    }
    &>img{
        /* position:relative;
        width:24px;
        height:24px; */
        padding-top:1px;
    }
`;
export const StarRate_ItemDetail = styled.div`
    position:relative;
    width:312px;
    height:116px;
    left:24px;
    /* top:907px; */
    margin-top:20px;
    background: #FAFAFA;
    border:0.5px solid #DFDFDF;
    border-radius:10px;

    &>.starrateTitle{
        position:absolute;
        width:110px;
        height:32px;
        left:16px;
        display: flex;
        align-items: center;
    }
`;
export const StarRate_ItemDetail_ReviewCnt = styled.div`
    position: absolute;
    height: 32px;
    left: 129px;
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #FF701D;
`;
export const StarRate_ItemDetail_ReviewPoint = styled.div`
    position: absolute;
    width: 30px;
    height: 32px;
    left: 141px;
    top: 81px;
    font-family: Spoqa Han Sans Neo, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 32px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #3D3D3D;
`;
export const StarRate_ItemDetail_ReviewStar = styled.div`
    position:absolute;
    width:180px;
    height:36px;
    left:69px;
    top:45px;
`;
export const Popularity = styled.span`
    position:relative;
    display:flex;
    align-items:center;
    letter-spacing:-0.015em;
    cursor:pointer;
    color:#000000;
`;
export const Latest = styled.span`
    position:relative;
    display:flex;
    align-items:center;
    letter-spacing:-0.015em;
    cursor:pointer;
    color:#C1C1C1;
`;