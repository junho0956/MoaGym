import {useState, useEffect, useCallback, Fragment} from 'react';
import styled from 'styled-components';
import {Provider} from 'react-redux';
import store from './common/store';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import {Redirect} from 'react-router';

import {
  GNBMainComponent,
  HeaderComponent,
  Modal,
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
          <Redirect from="/" to="/MoaGym" />
          {
            isLoading ? <Loading /> :
            <Fragment > 
              <HeaderContainer>
                <HeaderComponent />
              </HeaderContainer>
              <AppContainer id="AppContainer">
                <Modal/>
                <Switch>
                  <Route exact path="/MoaGym">
                    <HomePage />
                  </Route>
                  <Route exact path="/MoaGym/brandlist">
                    <BrandListPage />
                  </Route>
                  <Route path="/MoaGym/brand/:bn">
                    <BrandPage />
                  </Route>
                  <Route exact path="/MoaGym/category">
                    <CategoryPage />
                  </Route>
                  <Route exact path='/MoaGym/weekbest'>
                    <WeekBestPage />
                  </Route>
                  <Route exact path='/MoaGym/categoryDetail'>
                    <CategoryDetailPage />
                  </Route>
                  <Route path='/MoaGym/product'>
                    <ItemInfoPage />
                  </Route>
                  <Route path='/MoaGym/community'>
                    <Community>미개발상태입니다.😥</Community>
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

const Community = styled.div`
  display:flex;
  width:100%;
  height:100%;
  justify-content: center;
  align-items: center;
  font-size:1.5rem;
`;