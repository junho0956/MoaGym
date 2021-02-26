import styled from 'styled-components';

export const Container = styled.div`
    position:relative;
    width:312px;
    height:462px;
    margin:24px 0px 0px 24px;
`;

export const NewImg = styled.div`
    &>img{
        width:41px;
        height:16px;
    }
`;

export const Title = styled.div`
    position: relative;
    width: 171px;
    height: 38px;

    font-family: Spoqa Han Sans Neo, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 38px;
    letter-spacing: -0.04em;
    color: #3D3D3D;
`;

export const MainContainer = styled.div`
    position:relative;
    margin-top:10px;
    width:312px;
    height:398px;
    background:#FFFFFF;
    border:1px solid #DFDFDF;
    border-radius:10px;
`;

export const SlideWrap = styled.div`
    position:relative;
    width:312px;
    height:312px;

    &>.BNPleftBtn{
        position:absolute;
        left:16px;
        z-index:9999;
        top:50%;
        transform:translate(0, -50%);
    }

    &>.BNPrightBtn{
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
    cursor: pointer;
`;

export const ProductDesc = styled.div`
    position:relative;
    padding:8px 16px 8px 16px;
`;

export const ProductDescTitle = styled.div`
    font-size:13px;
    line-height:22px;
    font-family:Spoqa Han Sans Neo, sans-serif;
    font-style:normal;
    font-weight:normal;
    letter-spacing:-0ch.001em;
    color:#3D3D3D;
`;

export const ProductDescInfo = styled.div`
    font-size:13px;
    line-height:22px;
    font-family:Spoqa Han Sans Neo, sans-serif;
    font-style:normal;
    font-weight:normal;
    letter-spacing:-0ch.001em;
    color:#3D3D3D;
    height:44px;

    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    overflow:hidden;
    text-overflow:ellipsis;
    word-break:break-all;
`;