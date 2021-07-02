import styled from 'styled-components';
import {BsSearch} from 'react-icons/bs';
import { useState, useCallback, useEffect } from 'react';
import { brandListType, getBrandList } from '../../hook/useInitData';
import {useSelector} from 'react-redux';
import { RootState } from '../../common/store';
import { SearchBrandItem } from './brandItem';
import { SearchCategoryItem } from './category';
import { SearchBrand } from './brand';
import { ItemInfoComponent } from '../../interface/ItemInfo';
import { categoryItem } from '../Category/state';
import store from '../../common/store';
import { setSearchActive } from './state';

export const SearchComponent = () => {
    
    const [searchInput, setSearchInput] = useState('');
    const [brandList, setBrandList] = useState<brandListType[]>([]);
    const brandData = useSelector((state:RootState) => state.BrandDataReducer);
    const categorys = useSelector((state:RootState) => state.Category);
    const [searchBrandList, setSearchBrandList] = useState<brandListType[]>([]);
    const [searchBrandData, setSearchBrandData] = useState<ItemInfoComponent[]>([]);
    const [searchCategory, setSearchCategory] = useState<categoryItem[]>([]);
    const [searching, setSearching] = useState(false);

    const onChangeInput = useCallback((e) => {
        setSearchInput(e.target.value);
    }, [])

    const getBrandLists = useCallback(async() => {
        let brandListResults = await getBrandList();
        if(brandListResults){
            setBrandList(brandListResults);
        }
    }, []);

    useEffect(() => {
        getBrandLists();
    }, []);
    

    useEffect(() => {
        const getSearchItem = [];
        const getSearchBrand = [];
        const getSearchCategory = [];
        if(searchInput.length > 0){
            setSearching(prev => !prev);
            for(let j = 0; j<brandList.length && getSearchBrand.length<2; j++){
                if(brandList[j].name.indexOf(searchInput) !== -1){
                    getSearchBrand.push(brandList[j]);
                }
            }
            for(let j = 0; j<categorys.length && getSearchCategory.length<2; j++){
                if(categorys[j].label.indexOf(searchInput)!==-1){
                    getSearchCategory.push(categorys[j]);
                }
            }
            for(let j = 0; j<brandData.length && getSearchItem.length<4; j++){
                const items = brandData[j];
                for(let i = 0; i<items.brandData.length && getSearchItem.length<4; i++){
                    if(items.brandData[i].productName.indexOf(searchInput) !== -1){
                        getSearchItem.push(items.brandData[i]);
                        for(let k = 0; k<brandList.length && getSearchBrand.length === 0; k++){
                            if(items.brandName === brandList[k].name) getSearchBrand.push(brandList[k]);
                        }
                        for(let k = 0; k<categorys.length && getSearchCategory.length === 0; k++){
                            if(items.brandData[i].category === categorys[k].label) getSearchCategory.push(categorys[k]);
                        }
                    }
                }
            }
            setSearchBrandData(getSearchItem);
            setSearchBrandList(getSearchBrand);
            setSearchCategory(getSearchCategory);
            setSearching(prev => !prev);
        }
        else{
            setSearchBrandData([]);
            setSearchBrandList([]);
            setSearchCategory([]);
            setSearching(false);
        }
    }, [searchInput, brandData, brandList, categorys]);

    const clickSearchResult = useCallback(() => {
        store.dispatch(setSearchActive());
    }, []);

    return(
        <SearchContainer>
            {searching ? <div className="lds-dual-ring"></div> : <BsSearch />}
            <input type="text" value={searchInput} onChange={onChangeInput} placeholder="검색어를 입력하세요"/>
            {
                (searchBrandData.length || searchBrandList.length || searchCategory) && 
                (<SearchResult>
                    {
                        searchBrandData.length>0 && 
                        (
                            <>
                                <SearchHead>추천 상품</SearchHead>
                                {searchBrandData.map(item => {
                                    return (<SearchBrandItem key={item.productId} item={item} click={clickSearchResult}/>)
                                })}
                            </>
                        )
                    }
                    {
                        searchBrandList.length>0 &&
                        (
                            <>
                                <SearchHead>추천 브랜드</SearchHead>
                                {searchBrandList.map(item => {
                                    return (<SearchBrand key={item.brandId} item={item} click={clickSearchResult}/>)
                                })}
                            </>
                        )
                    }
                    {
                        searchCategory.length>0 && 
                        (
                            <>
                                <SearchHead>추천 카테고리</SearchHead>
                                {searchCategory.map(item => {
                                    return (<SearchCategoryItem key={item.id} item={item} click={clickSearchResult}/>)
                                })}
                            </>
                        )
                    }
                </SearchResult>)
            }
        </SearchContainer>
    )
}

const SearchContainer = styled.div`
    position: relative;
    width: 100%;
    height: 56px;
    display:flex;
    justify-content: space-evenly;
    align-items: center;

    & input{
        border:none;
        outline:none;
        font-size:1.25rem;
        background-color: transparent;
    }
    & > :first-child{
        font-size:1.5rem;
    }
`;

const SearchResult = styled.ul`
    position:absolute;
    top:56px;
    width:360px;
    max-height:50vh;
    overflow-y:auto;
    overflow-x:hidden;
    padding:0;
    margin:0;
    z-index:9999;
    & img{
        width:2rem;
        height:2rem;
        border-radius:50%;
        margin-right:10px;
    }
`;

const SearchHead = styled.li`
    z-index:9999;
    width:100%;
    background-color:lightgrey;
    padding-left:10px;
    font-size:1rem;
`;