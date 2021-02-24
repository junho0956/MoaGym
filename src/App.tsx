import styled from 'styled-components';
import {Provider} from 'react-redux';
import store from './common/store';

const Root = styled.div`
  position: relative;
  width:360px;
  height:100%;
  background: #FFFFFF;
  overflow-x:hidden;
  overflow-y:auto;
  &::-webkit-scrollbar{
    display:none;
  }
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