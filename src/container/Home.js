import React from 'react';
import JSDemo from '../components/JSDemo';
import PDFDemo from '../components/PDFDemo';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';

const {
  Header, Content, Footer, Sider,
} = Layout;


class Home extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Router>

        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1">
                  <Link to="/test_pdf">
                    <Icon type="file" />
                    <span>test.pdf</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/test_js">
                    <Icon type="file" />
                    <span>test.js</span>
                  </Link>
                </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>homework</Breadcrumb.Item>
                <Breadcrumb.Item>file</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Switch>
                  <Route exact path="/" component={JSDemo}/>
                  <Route exact path="/test_js" component={JSDemo}/>
                  <Route exact path="/test_pdf" component={PDFDemo}/>
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default Home;
