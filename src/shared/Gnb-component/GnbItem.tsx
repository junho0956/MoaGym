import { useHistory, useLocation } from 'react-router-dom';
import store from '../../common/store';
import { IGnb, GNB_ITEM_TYPE, setActiveGnb } from './state';
import { GNBItem, GNBLabel } from './style';
import { BsSearch } from 'react-icons/bs';
import { setSearchActive } from '../Search/state';

export const GNBItemComponent = ({item}: {item: IGnb}) => {
  const history = useHistory();
  const { pathname } = useLocation();

  const onClickItem = (id: GNB_ITEM_TYPE,link: string, pathname: string) => {
    if (link !== pathname) {
      history.push(item.link)
      store.dispatch(setActiveGnb(id));
    }
  }

  const onClickSearch = () => {
    store.dispatch(setSearchActive());
  }

  return (
    <>
      {item.icon ? (
        <GNBItem onClick={() => onClickItem(item.id, item.link, pathname)}>
          <img src={item.icon} alt="gnb-icon"/>
          <GNBLabel>{item.label}</GNBLabel>
        </GNBItem>
      ) : (
        <GNBItem onClick={onClickSearch}>
          <BsSearch style={{height:'24px'}}/>
          <GNBLabel>{item.label}</GNBLabel>
        </GNBItem>
      )}
    </>
  )
}