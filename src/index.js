import React from 'react';
import ReactDOM from 'react-dom';
import {store} from "./redux/store";
import {Provider} from "react-redux";
import {Root} from "./pages/Root";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(<Provider store={store}><Root /></Provider>, document.getElementById('root')); // provider를 감싸서 리액트 리덕스로 스토어를 주입한다.


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
