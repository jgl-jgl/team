项目组长把这个安装下来，初始化的一些插件 自己用的插件自己装
安装插件：
一。样式使用less书写，react里面使用脚手架安装了sass，但是没有less，
npm install less less-loader --save-dev(表示是开发环境)
安装完以后并不能直接使用，因为reacta无法解析它；需要修改配置
2. 修改配置文件  config/webpack.config.js 将sass相关全变成less 
3. 改完配置文件后重启
#### 样式作用域问题
默认引入的文件是全局 类名重复 混乱
 1. 保证类名不重复 BEM 命名法  button-error-small   button_sucess--big 
    <button className='btn-login-submit'></button>
    <button className='btn-login-reset'></button>
    <button className='btn-reg-submit'></button>
    <button className='banner-item-img'></button>
 2. 样式模块化
    import './index.less' 
    import HEHE from './index.module.less'//这里不需要解构
    <div className={HEHE.类名}>//{}里面不需要加引号
    <div id={style.div1}></div>//id的用法也是一样的
 3.在js里写样式：css in js 
 需要插件：component-style

 二。antd 刚开始用4.0.3的
 npm install antd
 按需引入：需要插件：babel-plugin-import
 修改webpack.config.js 找 babel-loader下有一个plugins，再最后加入内部一句话
 babel-loader 
 "plugins": [
    ....,
    ["import", {'libraryName':'antd',style:true}],//改动在385行
 ]
 修改完以后再启动，会报错，因为antd的less和我们自己装的less版本问题，antd用的less是2.7.3版本，我们用的是3.1.1
 所以需要进行less版本回退，npm install less@2.7.3
 将index.js 里的全局样式文件删除
后来安装了3.26.14版本的antd

 三。路由
 react-router-dom

 四。网络请求
 axios

 五。全局状态管理
 react-redux redux

