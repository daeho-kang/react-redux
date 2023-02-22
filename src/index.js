import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from "./serviceWorker";
//
import {createStore} from 'redux'
import {Provider} from 'react-redux'
//rootReducer는 { } 표시가 없어야 작동
import rootReducer from './service/reducers/index'


//만든 reducer를 store 만들때 넣어줍니다.
//지금은 createStore로 진행했는데 redux-toolkit 방식이 또 따로 있습니다.
const store = createStore(rootReducer)
// console.warn(store);
//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/*//만든 store를 앱 상위에 넣어줍니다.*/}
      <Provider store={store}>
            <App />
      </Provider>
  </React.StrictMode>
);
document.getElementById('root')
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
