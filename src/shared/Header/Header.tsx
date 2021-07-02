import {useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import { RootState } from '../../common/store';
import Logo from '../../common/image/TitleBar_logo.png';
import { SearchComponent } from '../index';

export const HeaderComponent = () => {
    
    const Search = useSelector((state:RootState) => state.Search);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(Search.onSearch){
            (((headerRef.current as HTMLDivElement).childNodes[0] as HTMLDivElement).childNodes[1] as HTMLInputElement).focus();
        }
    }, [Search.onSearch]);

    return(
        <div ref={headerRef}>
            { Search.onSearch
                ? <SearchComponent /> 
                : <img src={Logo} alt="titlebar_Logo"/>
            }
        </div>
    )
}