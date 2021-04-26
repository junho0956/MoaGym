import styled from 'styled-components';

export const ReviewItemLoading = styled.div`
  width:312px;
  height:226px;
  border-radius:10px;
  background-color:#FFFFFF;

  &>.reviewItemLoadingimg{
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:44.85%;
    border-radius:10px;
    background-color:#DFDFDF;
  }

  &>.reviewItemLoadinginfo1{
    position:absolute;
    left:5.13%;
    right:35.9%;
    top:58.18%;
    bottom:36.97%;
    background-color:#DFDFDF;
    border-radius:10px;
  }
  &>.reviewItemLoadinginfo2{
    position:absolute;
    left:5.13%;
    right:35.9%;
    top:65.45%;
    bottom:29.7%;
    background-color:#DFDFDF;
    border-radius:10px;
  }
  &>.reviewItemLoadinginfo3{
    position:absolute;
    left:5.13%;
    right:5.13%;
    top:71.52%;
    bottom:23.64%;
    background-color:#DFDFDF;
    border-radius:10px;
  }
  &>.reviewItemLoadinginfo4{
    position:absolute;
    left:5.13%;
    right:59.94%;
    top:90.3%;
    bottom:4.85%;
    background-color:#DFDFDF;
    border-radius:10px;
  }

`;

export const ReviewComponent = styled.div<{image:number}>`
  position:relative;
  background-color:#FFFFFF;
  /* box-shadow: 0 4px 4px rgba(0,0,0,0.25); */
  border: 1px solid #DFDFDF;
  border-radius:10px;
  width:312px;
  margin: 16px 0px 0px 24px;
  height: ${props => props.image > 0 ? `394px` : `168px`};
`
export const ReviewPhoto = styled.div`
  width:312px;
  height:226px;
  border-radius:10px 10px 0 0;
  &>img{
    width:312px;
    height:226px;
    border-radius: 10px 10px 0 0;
  }
`

export const ReviewInfo = styled.div`
  position:absolute;
  width:312px;
  height:168px;
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  letter-spacing: -0.003em;
  color: #000000;

  &>.reviewTitle{
    position:absolute;
    height:22px;
    left:5.13%;
    right:5.13%;
    top:9.52%;
    bottom:77.38%;
    font-weight:bold;
    font-size:16px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }

  &>.reviewDesc{
    position:absolute;
    left:5.13%;
    right:5.13%;
    top:25.62%;
    bottom:51.19%;
    font-weight:normal;
    font-size:14px;
    height:66px;
    line-height:22px;
    display:-webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
    overflow:hidden;
    text-overflow:ellipsis;
    word-break:break-all;
  }
  
  &>.reviewCreateAt, &>.reviewAutorInfo{
    position:absolute;
    top:79.17%;
    bottom:9.52%;
    font-weight:normal;
    font-size:12px;
    line-height:19px;
    opacity:0.5;
  }
  &>.reviewCreateAt{
    left:5.13%;
    right:73.08%;
  }
  &>.reviewAutorInfo{
    left:29.49%;
    right:52.56%;
  }

  &>.reviewLikedCnt{
    position:absolute;
    /* left:76.6%; */
    right:16px;
    top:4px;
    font-style:normal;
    font-weight:normal;
    font-size:12px;
    line-height:19px;
    text-align:right;
    letter-spacing:0.004em;
    color:#FF701D;
  }

  &>.reviewProductSizeTitle{
    position: absolute;
    left:16px;
    top:24px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 0.015em;
    color: #A5A5A5;
  }

  &>.reviewProductSize{
    position:absolute;
    left:46.37px;
    top:24px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 0.015em;
    color: #6F6F6F;
  }

  &>.reviewRectangle{
    position:absolute;
    left:65.36px;
    top:28px;
  }

  &>.reviewProductColorTitle{
    position: absolute;
    left:71.88px;
    top:24px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 0.015em;
    color: #A5A5A5;
  }

  &>.reviewProductColor{
    position:absolute;
    left:94.88px;
    top:24px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 0.015em;
    color: #6F6F6F;
  }
`;
export const ReviewStarPoint = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    position: relative;
    /* left: 5.13%;
    right: 70.53%;
    top: 56.36%;
    bottom: 38.79%; */
    margin:4px 0px 4px 16px;
`;