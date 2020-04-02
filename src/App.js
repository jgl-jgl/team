import React,{Component} from 'react';
// import LessDemo from './demo/less/Box';//这里的引入一定要大写，否则无法识别，是读取不出来的。
import {HashRouter,Link,Route,Switch,Redirect} from 'react-router-dom'
// function App() {
//   return (
//     {/*<div className="App">
//       <h1>根部组件</h1>
//       <p className='box'>在默认的情况下在任何组件里引入的样式是全局的，因为这个样式是在box里引入的。</p>
//       <hr/>
//       <LessDemo></LessDemo>
//     </div>*/}
//   );
// }
import Admin from './pages/Admin'
import Login from './pages/Login'
import User from './pages/User'
import Goods from './pages/Goods'
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <HashRouter>
        {/* 控制地址栏发生改变 */}
        {/* 路由 */}
        <Route path='/login' component={Login}></Route>
        {/* <Route path='/admin' component={Admin}></Route> */}
        <Route path='/admin' render={()=>{
          return (
            <Admin>
              <Route path='/admin/user' component={User}></Route>
              <Route path='/admin/goods' component={Goods}></Route>
            </Admin>
          )
        }}></Route>
      </HashRouter>
     );
  }
}
 
export default App;
