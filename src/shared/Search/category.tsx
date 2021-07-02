import { useCallback } from 'react';
import styled from 'styled-components'
import { categoryItem, changeCategory } from '../Category/state';
import { useHistory } from 'react-router-dom';
import store from '../../common/store';

export const SearchCategoryItem = ({item, click}:{item:categoryItem, click:Function}) => {
    const history = useHistory();
    const onClickItem = useCallback((e) => {
        history.push('/MoaGym/categoryDetail');
        store.dispatch(changeCategory(item.id));
        click();
    }, [])

    return(
        <SearchCategoryItemWrap onClick={onClickItem}>
            <img src={item.icon} alt="SCI-img" />
            <div>{item.label}</div>
        </SearchCategoryItemWrap>
    )
}

const SearchCategoryItemWrap = styled.li`
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