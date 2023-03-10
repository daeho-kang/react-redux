import React from 'react';
import User from './User'
import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/HomeContainer.js'
import HeaderContainer from './containers/HeaderContainer'

/*
redux 기본원리11
---
Action -> Dispatch -> Store -> View
redux의 데이터 흐름은 동일하게 단방향으로 view(컴포넌트)에서 Dispatch(store에서 주는 state를 바꾸는 함수)
라는 함수를 통해 action(dispatch 함수 이름)이 발생되고 reducer에 정의된 로직에 따라
store의 state가 변화하고, 그 state를 쓰는 view(컴포넌트)가 변하는 흐름을 따릅니다.

[step 1]. rootReducer 정의.
이 프로젝트에서는 [src/service/reducers/index.js] 에 위치합니다.

[step 2]. 세부 reducer 정의.
이 프로젝트에서는 [src/service/reducers/reducer.js] 에 위치합니다.

[step 3]. app에 store넣고, 만든 reducer를 반영시킵니다.
Index.js에
//만든 store를 앱 상위에 넣어줍니다.
<Provider store={store}>
    <App /> <== app에 store를 넣습니다.
</Provider>

[step 4]. 컴포넌트에서 redux를 사용합니다.
store에 접근하여 state를 가져오고, dispatch함수를 통해 store에 있는
state를 변경시켜줍니다.


 */
function App() {
  return (
    <div className="App">
        {/* 전역변수를 확인하기 위해 장바구니 cnt를 4개만들었습니다.
        4개의 장바구니 모두 동일한 전역변수를 사용하므로 다같이 변하는것을 확인할수있음, .cart-count의 absolute를 제거해보면됩니다*/}
        <HeaderContainer />
        <HeaderContainer />
        <HeaderContainer />
        <HeaderContainer />
        <HomeContainer />
      {/*<h1>App Component</h1>*/}
      {/*  <User data={{name:'anil sidhu'}} />*/}
    </div>
  );
}

export default App;


/*

Redux 아키텍처에 대하여
---
효율적 애플리케이션 상태관리를 위해 Redux는 스토어, 상태, 리듀서, 액션, 서브스크립션 등을 제공합니다.



 */