/*
 * author: liaojianming
 * date: 2019-01-14
 * description: mutations.js => 更改vuex的store中的状态的唯一方法就是提交mutation，Vuex中的mutation类似于事件，每个
 * mutation都有一个字符串类型（type）和一个回调函数（handler），handler就是我们进行状态更改的地方，它接受state作为一个参数
*/

import mutationTypes from './mutation-type';

export default {
    [mutationTypes.SET_IS_LOGIN](state, isLogin) {
        state.isLogin = isLogin;
    },
    [mutationTypes.SET_USER_INFO](state, userInfo) {
        state.userInfo = userInfo;
    },
    [mutationTypes.SET_NEWS_LIST](state, newsList) {
        state.newsList = newsList
    }
}