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
  `

function App(){
  return (
    <Root>
      <Provider store={store}>
        <Router>
          {/* TOP HEADER CONTAINER */}
          <HeaderContainer>
            
          </HeaderContainer>
          {/* APP CONTAINER */}
          <AppContainer>
            <Switch>
              <Route exact path="/">
              </Route>
              <Route path="/brand">
              </Route>
              <Route path="/category">
                <Category/>
              </Route>
              <Route path="/community">
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