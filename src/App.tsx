import {useEffect, useCallback} from 'react';
import styled from 'styled-components';
import {Provider} from 'react-redux';
import store from './common/store';
import Logo from './common/image/TitleBar_logo.svg';
import { getInitData, brandList } from './hook/InitData';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import {
  GNBMainComponent,
} from './shared';

import {
  CategoryPage,
  CategoryDetailPage,
  HomePage,
  ItemInfoPage,
  WeekBestPage,
} from './page';
import { initData } from './common/BrandDataReducer';
import { getCategoryData } from './hook/getCategoryData';
import { initCategory } from './shared/Category/state';
import { BrandListPage } from './page/Brand/BrandList-page';
import { BrandPage } from './page/Brand/BrandPage';


const Root = styled.div`
  position: relative;
  width:360px;
  height:100vh;
  background: #FAFAFA;
  @media (max-width: 380px) {
    width: 100vw;
  }
  `
const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  `
const AppContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 113px);
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar{
    display:none;
  }
`

function App(){

  const getinitdata = useCallback(async() => {
    const getdata = await getInitData();
    const categoryData = getCategoryData(getdata);
    store.dispatch(initData(getdata));
    store.dispatch(initCategory(categoryData));
  }, []);

  useEffect(() => {
    getinitdata();
  },[]);

  return (
    <Root>
      <Provider store={store}>
        <Router>

          <HeaderContainer>
            <img src={Logo} alt="titlebar_Logo"/>
          </HeaderContainer>

          <AppContainer>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/brandlist">
                <BrandListPage />
              </Route>
              <Route path="/brand/:bn">
                <BrandPage />
              </Route>
              <Route exact path="/category">
                <CategoryPage />
              </Route>
              <Route exact path='/weekbest'>
                <WeekBestPage />
              </Route>
              <Route exact path='/categoryDetail'>
                <CategoryDetailPage />
              </Route>
              <Route exact path='/product'>
                <ItemInfoPage />
              </Route>
            </Switch>
          </AppContainer>

          <GNBMainComponent />

        </Router>
      </Provider>
    </Root>
  );
}

export default App;