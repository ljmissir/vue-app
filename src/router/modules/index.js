/*
 * author: liaojianming
 * date: 2018-12-26
 * description: 分割路由，把业务逻辑模块放在modules文件夹下来处理
*/

// 我们可以用 webpack提供的require.context() API来创建函数自己的上下文，它允许您传入一个目录进行搜索，一个标志指示是否应该搜索子目录，还有一个正则表达式来匹配文件
const files = require.context('.', true, /\.js$/);

console.log(files.keys()); // ["./home.js"] 返回一个数组

let configRouters = new Array();

files.keys().forEach(key => {
    if (key === './index.js') return;
    configRouters = configRouters.concat(files(key).default); // 读取出文件中的default模块
});

export default configRouters; // 抛出一个Vue-router期待的结构的数组