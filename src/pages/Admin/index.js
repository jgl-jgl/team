import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import style from './index.module.less'
//引入侧边栏组件
import CustomNav from '../../components/CustomNav'
const { Header, Content, Footer, Sider } = Layout;
class Admin extends Component {
    state = {  }
    render() { 
        return ( 
            <Layout className={style.wrapper}>
            {/* <Sider>
              <div className="logo" />
              这里是侧边栏
            </Sider> */}
            <Sider>
                <CustomNav></CustomNav>
            </Sider>
            <Layout >
              <Header style={{"background":"red"}}>这里是头部</Header>
              <Content>
                  这里是容器
                 {this.props.children}
                 {/* 在组件标签里写的东西，如果想要在组件里获取到需要用this.props.children来获取；这里让content
                 内部变为在app.js里面路由里嵌套的东西*/}
              </Content>
              <Footer>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </Layout>
         );
    }
}
 
export default Admin;