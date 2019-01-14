/*
 * author: liaojianming
 * date: 2018-12-26
 * description: 所有组件采用异步路由加载模式，对外暴露一个object对象供引用
*/

module.exports = {
    Home: () => import( 'components/Home/home'),
    NoPermission: () => import('base/NoPermission/noPermission'),
    NotFound: () => import('base/404/404'),
    Login: () => import('components/Login/login')
}