import mutationTypes from './mutation-type';

export default {
    [mutationTypes.SET_IS_LOGIN](state, isLogin) {
        state.isLogin = isLogin;
    },
    [mutationTypes.USER_INFO](state, userInfo) {
        state.userInfo = userInfo;
    },
    [mutationTypes.NEWS_LIST](state, newsList) {
        state.newsList = newsList
    }
}