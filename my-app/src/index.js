import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route } from "react-router-dom";

//import './index.css';
//import TodoList from './pages/todo/TodoList';
//import App from './App';
//import App from './App';
import TabComponent from "./pages/pages";
//import * as serviceWorker from './serviceWorker';
import Todo from "./pages/todo/Todo";
//import Header from "./pages/header/Header";
//import Footer from "./pages/footer/Footer";


//ReactDOM.render(<TodoList />, document.getElementById('root'));
ReactDOM.render(<TabComponent />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Todo />, document.getElementById('root'));
//ReactDOM.render(<Header />, document.getElementById('root'));
//ReactDOM.render(<Footer />, document.getElementById('root'));

//挂载到dom节点的操作
//PWA借助网页写手机app应用，上传到https协议的服务器上，第一次需要联网
//serviceWorker.unregister();
