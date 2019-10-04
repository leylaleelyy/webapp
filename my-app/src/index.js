import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TodoList />, document.getElementById('root'));
//挂载到dom节点的操作
//PWA借助网页写手机app应用，上传到https协议的服务器上，第一次需要联网
//serviceWorker.unregister();
