import {useState, useEffect, useCallback, Fragment} from 'react';
import styled from 'styled-components';
import {Provider} from 'react-redux';
import store from './common/store';
import Logo from './common/image/TitleBar_logo.png';
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

import { getCategoryData } from './common/getCategoryData';
import { initCategory } from './shared/Category/state';
import { BrandListPage } from './page/Brand/BrandList-page';
import { BrandPage } from './page/Brand/BrandPage';
import Loading from './shared/Loading/Loading';
import { initBrandData } from './common/BrandDataReducer';
import useInitData from './hook/useInitData';

function App(){

  const [isLoading, setIsLoading] = useState(true);
  const initData = useInitData();

  const getinitdata = useCallback(() => {
    if(initData){
      const categoryData = getCategoryData(initData);
      store.dispatch(initBrandData(initData));
      store.dispatch(initCategory(categoryData));
      setIsLoading(false);
    }
  }, [initData]);

  useEffect(() => { 
    if(initData.length > 0) getinitdata();
  }, [initData]);

  return (
    <Root>
      <Provider store={store}>
        <Router>
          {
            isLoading ? <Loading /> :
            <Fragment > 
              <HeaderContainer>
                <img src={Logo} alt="titlebar_Logo"/>
              </HeaderContainer>
              <AppContainer id="AppContainer">
                <Switch>
                  <Route exact path="/MoaGym">
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
            </Fragment>
          }
        </Router>
      </Provider>
    </Root>
  );
}

export default App;


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
    width:5px;
    background-color:transparent;
  }
  &::-webkit-scrollbar-thumb{
    background-color:grey;
    border-radius:10px;
    background-clip:padding-box;
    border: 1px solid transparent;
  }
  &::-webkit-scrollbar-track{
    background-color:transparent;
  }
`