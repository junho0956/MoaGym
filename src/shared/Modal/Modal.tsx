import styled from 'styled-components';
import { ReviewCardComponent } from '../../interface/Review';
import {
    SlideContainer,
    SlideWrap,
    SlideUl,
    SlideLi
} from '../../page/ItemInfo/style';
import leftBtn from '../../page/ItemInfo/image/btn_itemdetail_left.svg';
import rightBtn from '../../page/ItemInfo/image/btn_itemdetail_right.svg';
import {useRef, useEffect} from 'react';
import {slider} from '../../common/slider';
import { useSelector } from 'react-redux';
import store, { RootState } from '../../common/store';
import { useCallback } from 'react';
import { setModal } from './state';
import {getReviewStarPointNoRef} from '../../common/getReviewStarPoint';

export const Modal = () => {

    const slideWrap = useRef<HTMLDivElement>(null);
    const modal = useSelector((state:RootState) => state.Modal)
    const modalRef = useRef<HTMLDivElement>(null);
    
    const closeModal = useCallback(() => {
        store.dispatch(setModal(false, null));
    }, [])

    useEffect(() => {
        if(slideWrap){
            slider(slideWrap, 360, null);
        }
    }, [modal])

    useEffect(() => {
        const wrap = (document.getElementById('modal') as HTMLDivElement);
        function closeModal2(e:MouseEvent){
            if(e.target === wrap) closeModal();
        }
        wrap.addEventListener('click', e => closeModal2(e));
        return () => {
            wrap.removeEventListener('click', e => closeModal2(e));
        }
    }, [closeModal]);

    useEffect(() => {
        if(modal){
            getReviewStarPointNoRef((modalRef.current as HTMLDivElement).firstChild as HTMLDivElement, modal.data?.reviewPoint as number)
        }
    }, [modal])

    return(
        <ModalWrap view={modal.view} id='modal'>
            <ModalContainer>
                <div onClick={closeModal}>X</div>
                <SlideWrap ref={slideWrap}>
                    <img src={leftBtn} alt="leftButton"/>
                    <img src={rightBtn} alt="rightButton"/>
                    <SlideContainer>
                        <SlideUl>
                            {modal.data?.reviewImageUrl.map((item:{url:string}, index) =>{
                                return(
                                    <SlideLi key={index}>
                                        <img src={item.url} alt="reviewImage"/>
                                    </SlideLi>
                                )
                            })}
                        </SlideUl>
                    </SlideContainer>
                </SlideWrap>
                <ModalInfo ref={modalRef}>
                    <div></div>
                    <div><strong>[{modal.data?.brandName}]</strong></div>
                    <div>{modal.data?.reviewProductName}</div>
                    <div>[옵션] {modal.data?.reviewOption}</div>
                    <div>[내용] {modal.data?.reviewDesc}</div>
                    <div>
                        {modal.data?.createdTime.substring(0,10)}&nbsp;&nbsp;
                        {modal.data?.authorName[0]}***님
                    </div>
                </ModalInfo>
            </ModalContainer>
        </ModalWrap>
    )
}

const ModalWrap = styled.div`
    position: fixed;
    width: 360px;
    height: calc(100vh - 113px);
    background-color:black;
    display:flex;
    justify-content: center;
    align-items: center;
    z-index:9990;
    visibility: ${(props:{view:boolean}) => (
            props.view ? 'visible' : 'hidden'
    )};
`;

const ModalContainer = styled.div`
    position:relative;
    width:360px;
    height:57vh;
    display:flex;
    flex-direction: column;
    background-color:white;
    & > :first-child{
        cursor:pointer;
        position:absolute;
        top:10px;
        right:10px;
        z-index:9999;
        color:black;
        font-size:2rem;
        width:2rem;
        height:2rem;
        text-align:center;
        line-height:2rem;
    }
`;

const ModalInfo = styled.div`
    position:relative;
    width:340px;
    height:100%;
    display:flex;
    flex-direction: column;
    margin:10px;
    overflow: auto;
    line-height: 1.5rem;
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-size: 0.9rem;
    letter-spacing: -0.003em;

    & > :first-child{
        position:absolute;
        right:0;
    }

    & > :last-child{
        margin-top:1rem;
    }
`;