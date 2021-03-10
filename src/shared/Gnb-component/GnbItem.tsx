import { useHistory, useLocation } from 'react-router-dom';
import store from '../../common/store';
import { IGnb, GNB_ITEM_TYPE, setActiveGnb } from './state';
import { GNBItem, GNBLabel } from './style';

export const GNBItemComponent = ({item}: {item: IGnb}) => {
  const history = useHistory();
  const { pathname } = useLocation();

  const onClickItem = (id: GNB_ITEM_TYPE,link: string, pathname: string) => {
    if (link !== pathname) {
      history.push(item.link)
      store.dispatch(setActiveGnb(id));
    }
  }

  return (
    <GNBItem onClick={() => onClickItem(item.id, item.link, pathname)}>
      {/* <img src={item.selected ? item.icon[1] : item.icon[0]} alt="gnb-icon"/> */}
      <img src={item.icon} alt="gnb-icon"/>
      {/* <GNBLabel selected={item.selected}>{item.label}</GNBLabel> */}
      <GNBLabel>{item.label}</GNBLabel>
    </GNBItem>
  )
}