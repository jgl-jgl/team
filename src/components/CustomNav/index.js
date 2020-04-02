import React, { Component } from 'react';
import {withRouter} from"react-router-dom";//路由对象，是一个高阶组件

import { Menu, Switch } from 'antd';
import menuList from "./menuList.js"
const { SubMenu } = Menu;

function handleClick(e) {
  console.log('click', e);
  //带年纪获取跳转路径通过编程式导航实现跳转
  let {path}=e.item.props
  console.log(path)
  this.props.history.replace(path)
}

class CustomNav extends Component {
  state = {
    theme: 'dark',
    current: '1',
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  renderItem(data){
    return data.map((item,index)=>{
      if(item.children){
        //一级导航
        return(
          <SubMenu key={item.key} title={(()=>{
            return (
              <span>
                {item.title}
              </span>
            )
          })()}>
            {/* 如果还有2级，将在渲染 */}
            {this.renderItem(item.children)}
          </SubMenu>
        )
      }else{
        return(
          <Menu.Item key={item.key} path={item.path}> {item.title} </Menu.Item>
        )
      }
    })
  }
    render(){
        return (
          <div>
          <Switch
          checked={this.state.theme === 'dark'}
          onChange={this.changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        <br />
        <br />
        <Menu  theme={this.state.theme} 
                onClick={handleClick.bind(this)} 
                style={{ width: 200 }} 
                mode="vertical">
              {this.renderItem(menuList)}
        </Menu>
        </div>
        )
    }
}
 
export default withRouter(CustomNav);