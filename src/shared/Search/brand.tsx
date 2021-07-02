import { brandListType } from "../../hook/useInitData";
import styled from 'styled-components';
import {useCallback} from 'react';
import { useHistory } from "react-router-dom";

export const SearchBrand = ({item, click}:{item:brandListType, click:Function}) => {

    const history = useHistory();

    const onClickItem = useCallback((e) => {
        history.push({
            pathname:`/MoaGym/brand/${item.name}`,
            state:item.name,
        })
        click('brand');
    }, [])

    return(
        <SearchBrandWrap onClick={onClickItem}>
            <img src={item.brandImg} alt="SB-img" />
            <div>{item.name}</div>
        </SearchBrandWrap>
    )
}

const SearchBrandWrap = styled.li`
    display:flex;
    width:360px;
    height:3rem;
    border-bottom:1px solid lightgrey;
    list-style:none;
    align-items: center;
    background-color:white;
    padding-left:10px;
    font-size:1rem;
    cursor:pointer;
    &:hover{
        background-color: #E1E8EB;
    }
`;