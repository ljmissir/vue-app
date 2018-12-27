/*
 * author: liaojianming
 * date: 2018-12-26
 * description: 公用路由模块
*/

import url from './config';

export default [
    // 默认页面
    {
        path: '/',
        redirect: '/login'
    },
    // 无权限页面
    {
        path: '/noPermission',
        name: '无权限页面',
        component: url.NoPermission
    },
    // 404页面
    {
        path: '*',
        name: '404页面',
        component: url.NotFound
    }
]