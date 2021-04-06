import styled from 'styled-components';

export const BrandList = styled.div`

`
export const BrandListRectangle = styled.div`
    position:relative;
    height:8px;
    background:#DFDFDF;
    width:360px;
`;

export const BrandListItemWrap = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    margin-top:16px;
`;

export const BrandListItem = styled.div`
    cursor:pointer;
    position:relative;
    width:138px;
    height:174px;

    &>img{
        position:absolute;
        border-radius:10px;
        width:138px;
    }

    &>div{
        position:absolute;
        left:5.41%;
        right:5.41%;
        top:83.7%;
        bottom:3.26%;

        font-family: Spoqa Han Sans Neo, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 24px;

        display: flex;
        align-items: center;
        letter-spacing: -0.01em;

        color: #3D3D3D;
    }
`

export const BrandPageContainer = styled.div`  
`;

export const BrandRectangle = styled.div`
    position:relative;
    width:360px;
    height:8px;
    background:#DFDFDF;
`;

export const BrandTitle = styled.div`
    position:relative;
    width:360px;
    height:50px;
`;

export const BrandName = styled.div`
    position:absolute;
        left:24px;
        top:9px;
        font-family:Spoqa Han Sans Neo, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 32px;
        display: flex;
        align-items: center;
        color: #3D3D3D;   
`;

export const BrandLink = styled.div`
    position:absolute;
        right:24px;
        top:9px;
        font-family:Spoqa Han Sans Neo, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 32px;
        display: flex;
        align-items: center;

        &>a{
            text-decoration:none;
            color: #3D3D3D;
        }       
`;

export const BrandBanner = styled.div`
    width:360px;
    height:128px;
    &>img{
        position:absolute;
        width:312px;
        height:112px;
        left:24px;
    }
`;

export const BrandTabsubmenu = styled.div`
    position:relative;
    width:312px;
    left:24px;
    right:24px;
    height:36px;
    display:flex;
`;

export const BrandTabsubmenuLeft = styled.div`
    position:relative;
    border-bottom:2px solid;
    width:156px;
    height:36px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.01em;
    color: ${(props: {selected: boolean}) => props.selected ? '#FF701D' : '#C1C1C1'};
    border-bottom-color: ${(props: {selected: boolean}) => props.selected ? '#FF701D' : '#C1C1C1'};
    cursor:pointer;
`;

export const BrandTabsubmenuRight = styled.div`
    position:relative;
    border-bottom:2px solid;
    height:36px;
    width:156px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.01em;
    color: ${(props: {selected: boolean}) => props.selected ? '#FF701D' : '#C1C1C1'};
    border-bottom-color: ${(props: {selected: boolean}) => props.selected ? '#FF701D' : '#C1C1C1'};
    cursor:pointer;
`;
