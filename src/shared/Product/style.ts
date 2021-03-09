import styled from 'styled-components';

export const ProductItem = styled.div`
  position:relative;
  width:148px;
  height:246px;
  background-color:#FFFFFF;
  border-radius:10px;

  cursor: pointer;
  & > .ProductImg{
    position:absolute;
    left:0%;
    right:0%;
    top:0%;
    bottom:40.75%;

    border-radius:10px;
    width:148px;
    height:145.76px;
  }

  &>.ProductReviewStar{
    position:absolute;
    width:12px;
    height:12px;
    left:0px;
    top:206.76px;
  }

  &>.Rectangle{
    position: absolute;
    left: 22.3%;
    right: 77.03%;
    top: 85.27%;
    bottom: 11.48%;

    background: #DFDFDF;
  }
`;

export const BrandTitle = styled.div`
  position: absolute;
  left: 0%;
  right:81.08%;
  top: 59.25%;
  bottom: 34.24%;

  width:100%;
  height:16px;

  font-family: Spoqa Han Sans Neo, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 16px;

  display: flex;
  align-items: center;
  letter-spacing: 0.015em;

  color: #A5A5A5;
`

export const ProductTitle = styled.div`
  position: absolute;
  width:144px;
  left:0%;
  right:2.7%;
  top: 65.76%;
  bottom: 26.52%;

  font-family: Spoqa Han Sans Neo, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 19px;

  /* display: flex;
  align-items: center; */

  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;

  letter-spacing:-0.015em;
  color: #3D3D3D;
`

export const ProductPrice = styled.div`
  position: absolute;
  left:0%;
  right:60.14%;
  top:75.1%;
  bottom:17.98%;

  font-family: Spoqa Han Sans Neo, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;

  color: #3D3D3D;
`

export const ProductReviewPoint = styled.div`
  position: absolute;
  width: 15px;
  left: 14px;
  top: 84.15%;
  bottom: 10.57%;

  font-family: Spoqa Han Sans Neo, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  letter-spacing: 0.015em;

  color: #8B8B8B;
`;

export const ProductReview = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  position: absolute;
  left: 25.68%;
  right: 41.22%;
  top: 83.64%;
  bottom: 9.85%;

  &>img{
    position: static;
    width: 12px;
    height: 12px;
    left: 0px;
    top: 2px;

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0;
  }
`;

export const ProductReviewCnt = styled.div`
  position: static;
  width:33px;
  left:16px;
  top:0%;
  bottom:0%;

  font-family: Spoqa Han Sans Neo, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 16px;
  
  display:flex;
  align-items:center;
  letter-spacing:0.015em;
  color: #FF5200;

  flex:none;
  order:1;
  flex-grow:0;
  margin:0px 4px;
`

export const ProductListHorizontal = styled.div`
  position:relative;
  margin:8px 0px;
`;

export const ProductListHorizontalUl = styled.ul`
  position:relative;
  width:342px;
  white-space: nowrap;
  padding:0px 0px 0px 18px;
  margin:0px;
  overflow: auto;
  &::-webkit-scrollbar{
    display:none;
  }
`

export const ProductListHorizontalLi = styled.li`
  position:relative;
  list-style:none;
  display:inline-block;
  margin-right:16px;
`;

export const ProductListVertical = styled.div`
  position:relative;
  display:grid;
  grid-template-columns: 1fr 1fr;
  justify-items:center;
  margin-bottom:24px;
`;

export const ProductListVerticalItem = styled.div`
  margin-top:24px;
`;

export const ProductTagWrap = styled.div`
  position: absolute;
  width: 114px;
  height: 16px;
  left: 0px;
  top: 229.76px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
`;

export const ProductTag = styled.span`
  position: static;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-family:Spoqa Han Sans Neo, sans-serif;
  font-size:10px;
  line-height:14px;
  letter-spacing:0.015em;
  
  border: 0.5px solid #C1C1C1;
  border-radius: 4px;
  margin:0px 2px;
  padding:0px 2px 0px 2px;
  
  color:#8B8B8B;
`;

export const UpperRight = styled.div`
  position:absolute;
  left:51.51%;
  bottom:67.05%;
  &>img{

  }
`;