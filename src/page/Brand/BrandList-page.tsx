import {
    BrandList,
    BrandListItem,
    BrandListRectangle,
    BrandListItemWrap,
} from './style';

import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {RootState} from '../../common/store';
import { brandDataType } from '../../hook/InitData';

export const BrandListPage = () => {

    const history = useHistory();
    // const {pathname} = useLocation();
    const brandList = useSelector((state:RootState) => state.BrandDataReducer);

    function goBrandDetailPage(brandName:string){
        history.push({
            pathname: `brand/${brandName}`,
            state:brandName
        });
    }

    return (
        <BrandList>
            <BrandListRectangle />
            <BrandListItemWrap>
                {brandList.map((item:brandDataType) => {
                    return(
                        <BrandListItem key={item.brandId} onClick={() => goBrandDetailPage(item.brandName)}>
                            <img src={item.brandImg} alt="brandListImg" />
                            <div>{item.brandName}</div>
                        </BrandListItem>
                    )
                })}
            </BrandListItemWrap>
        </BrandList>
    )

}