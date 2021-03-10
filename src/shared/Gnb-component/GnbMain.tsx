import { GNBContainer } from './style';
import { IGnb } from './state'

import { GNBItemComponent } from './GnbItem'
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';

export const GNBMainComponent = () => {
  const GNBItemList = useSelector((state:RootState) => state.Gnb);

  return (
    <GNBContainer>
      {
        GNBItemList.map((item: IGnb) => {
          return(
            <GNBItemComponent key={item.id} item={item} />
          )
        })
      }
    </GNBContainer>
  )
}