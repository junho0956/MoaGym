import styled from 'styled-components';
import {Provider} from 'react-redux';
import store from './common/store';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Category from './shared/Category/Category';
import { GNBMainComponent } from './components/Gnb-component/GnbMain';
import { HomePage } from './page/Home-component/Home';
import { CategoryCollection } from './page/Category-component/CategoryPage';
import { WeekBestPage } from './page/WeekBest-component/WeekBest';
import Logo from './common/image/TitleBar_logo.svg';
import { CategoryDetail } from './page/CategoryDetail-component/CategoryDetail';
import ItemInfo from './page/ItemInfo/ItemInfo';

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

  return (
    <Root>
      <Provider store={store}>
        <Router>
          {/* TOP HEADER CONTAINER */}
          <HeaderContainer>
            <img src={Logo} alt="titlebar_Logo"/>
          </HeaderContainer>
          {/* APP CONTAINER */}
          <AppContainer>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/brand">

              </Route>
              <Route exact path="/category">
                <CategoryCollection />
              </Route>
              <Route exact path="/community">
              </Route>
              <Route exact path='/weekbest'>
                  <WeekBestPage />
              </Route>
              <Route exact path='/categoryDetail'>
                  <CategoryDetail />
              </Route>
              <Route exact path='/product'>
                  <ItemInfo />
              </Route>
            </Switch>
          </AppContainer>
          {/* BOTTOM GNB CONTAINER */}
          <GNBMainComponent />
        </Router>
      </Provider>
    </Root>
  );
}

export default App;