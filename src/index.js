import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { ConfigProvider, Affix, Layout, Col, Row } from 'antd';
import Activity_Stream from '../src/components/Content/Activity_Stream';
import Activity_Favorite from './components/Content/Activity_Favorite';
import ActivityHeader_Logo_Layout from './components/ActivityHeader_Logo_Layout';
import ActivityHeader_Menu_Layout from './components/ActivityHeader_Menu_Layout';
import Activity_Left_Menu from './components/Content/Activity_Left_Menu';
import trTurkey from 'antd/es/locale/tr_TR';
import ActivityHeader_Profile_Layout from './components/ActivityHeader_Profile_Layout';
import { type } from 'os';
import Activity_Content from './components/Content/Activity_Content';
import Activity_Login from './components/Activity_Login';
import information_layout from './components/Information/information_layout';

const { Header, Footer, Content } = Layout;



const pages = {
  Favorite: <Activity_Favorite />,
  Home: <Activity_Content />,
  Stream: <Activity_Stream />,
  Login:<Activity_Login/>
}



const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      {/* <Route exact path="/activity/:id">
      {layout_general(pages.Home)}
      </Route> */}
      <Route path="/stream" component={Activity_Stream} />
      <Route path="/login" component={Activity_Login} />
      <Route path="/information/:id" component={information_layout} />
      <Route path="/favorite" component={Activity_Favorite}/>
    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
