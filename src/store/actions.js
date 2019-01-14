/*
 * author: liaojianming
 * date: 2019-01-14
 * description: actions.js => action类似于mutation，不同点在于：action提交的是mutation，而不是直接变更状态，action可以包含任意异步操作
*/

import mutationTypes from './mutation-type';
import MessageBox from 'util/MessageBox';

export default {
    // action函数接受一个与store实例具有相同方法和属性的context对象，一个action方法可以一次性提交多个mutation
    addCount: ({commit, state}, {count}) => {
        if (count > 5) {
            MessageBox.alert('最多只能购买5件', '添加商品', null);
            return;
        }
        if (count < 1) {
            MessageBox.alert('至少购买1件', '添加商品', null);
            return;
        }
        commit(mutationTypes.SET_PRODUCT_COUNT, count);
        // 这条为测试commit
        commit(mutationTypes.SET_IS_LOGIN, !state.isLogin);
    }
}