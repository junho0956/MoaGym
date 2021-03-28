import styled from 'styled-components';

export const PhotoReviewContainer = styled.div`
    position:relative;
    width:360px;
    height:223px;
    left:0px;
    margin-top:8px;
    /* top:653px; */
`;

export const PhotoReviewUl = styled.ul`
    position:absolute;
    padding:0px 0px 0px 24px;
    margin:0;
    height:223px;
    width:336px;

    white-space:nowrap;
    overflow-x:auto;
    overflow-y:hidden;
    &::-webkit-scrollbar{
        display:none;
    }
`;

export const PhotoReviewLi = styled.li`
    position:relative;
    list-style:none;
    display:inline-block;
    margin-right:16px;
    height:223px;
`;

export const PhotoReviewItemContainer = styled.div`
    position:relative;
    width:126px;
    height:223px;
    cursor: pointer;
    &>.photoReviewItemImg{
        position:absolute;
        width:126px;
        height:126px;
        border-radius:10px;
    }
    
    &>.photoReviewItemStarImg{
        position: absolute;
        width: 12px;
        height: 12px;
        left: 0px;
        top: 157px;
    }

    &>.photoReviewItemRectangleImg{
        position: absolute;
        left: 26.19%;
        right: 73.02%;
        top: 71.75%;
        bottom: 24.66%;
    }
`;

export const PhotoReviewItemAuthor = styled.div`
    position:absolute;
    width: 126px;
    height: 22px;
    left: 0px;
    top: 134px;

    font-family: Spoqa Han Sans Neo, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;

    display: flex;
    align-items: center;

    color: #000000;
`;

export const PhotoReviewItemPoint = styled.div`
    position: absolute;
    width: 15px;
    left: 14px;
    top: 69.96%;
    bottom: 22.87%;

    font-family: Spoqa Han Sans Neo, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 16px;

    display: flex;
    align-items: center;
    letter-spacing: 0.015em;

    color: #8B8B8B;
`;

export const PhotoReviewItemBrand = styled.div`
    position: absolute;
    width: 15px;
    left: 40px;
    top: 69.96%;
    bottom: 22.87%;

    font-family: Spoqa Han Sans Neo, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 16px;

    display: flex;
    align-items: center;
    letter-spacing: 0.015em;

    color: #3D3D3D;
`;

export const PhotoReviewItemText = styled.div`
    position: absolute;
    width: 126px;
    height: 38px;
    left: 0px;
    top: 176px;

    font-family: Spoqa Han Sans Neo, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 19px;
    letter-spacing: -0.015em;

    color: #3D3D3D;

    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    overflow:hidden;
    text-overflow:ellipsis;
    word-break:break-all;
    white-space:normal;
`;