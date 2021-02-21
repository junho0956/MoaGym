import styled from 'styled-components';
import {Provider} from 'react-redux';
import store from './common/store';
import Review from './shared/Review/Review';

const Root = styled.div`
  position: relative;
  width:360px;
  height:100vh;
  background: #FAFAFA;
  `

function App(){
  return (
    <Root>
      <Provider store={store}>
      </Provider>
    </Root>
  );
}

export default App;