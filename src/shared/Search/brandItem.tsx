import { ItemInfoComponent } from "../../interface/ItemInfo";
import styled from 'styled-components';
import store from '../../common/store';
import { useCallback } from "react";
import { setProduct } from "../../page/ItemInfo/state";
import {useHistory} from 'react-router-dom';

export const SearchBrandItem = ({item, click}:{item:ItemInfoComponent, click:Function}) => {

    const history = useHistory();

    const onClickItem = useCallback((e) => {
        store.dispatch(setProduct(item));
        history.push(`/MoaGym/product/${item.productId}`);
        click('product');
    }, [item, click]);

    return(
        <SearchBrandItemWrap onClick={onClickItem}>
            <img src={item.productImageUrl[0].url} alt="sbi-img"/>
            <div>
                <div>[{item.brandName}]</div>
                <div>{item.productName}</div>
            </div>
        </SearchBrandItemWrap>
    )
}

const SearchBrandItemWrap = styled.li`
    width:360px;
    height:3rem;
    border-bottom:1px solid lightgrey;
    display:flex;
    list-style:none;
    align-items: center;
    background-color:white;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left:10px;
    font-size:1rem;
    cursor:pointer;

    &:hover{
        background-color: #E1E8EB;
    }
`;