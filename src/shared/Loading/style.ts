import styled from 'styled-components';

export const LoadingContainer = styled.div`
    position:relative;
    width:360px;
    height:100vh;
    background:#FAFAFA;
`;

export const LoadingHeader = styled.div`
    position:relative;
    width:100%;
    height:56px;
`;

export const LoadingApp = styled.div`
    position:relative;
    width:100%;
    height: calc(100vh - 113px);
    overflow-y:auto;
    overflow-x:hidden;

    &>img{
        width:360px;
    }
`;

export const LoadingBanner = styled.div`
    position:relative;
    width:360px;
    height:112px;
    margin-bottom:31px;
    background-color:#DFDFDF;
`;