import React from 'react';

import './App.css';

import 'antd/dist/antd.css';
import AppHeader from './components/common/header';
import AppHome from './views/home';
import AppFooter from './components/common/footer';

import {  Layout} from 'antd';
// import { Footer } from 'antd/lib/layout/layout';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
    <Header>
      <AppHeader></AppHeader>
    </Header>
    <Content>
     <AppHome/>
    </Content>
    <Footer>
      <AppFooter/>
    </Footer>
  </Layout>
    
  );
}

export default App;
