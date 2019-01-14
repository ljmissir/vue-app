<template>
    <div class="home-wrapper">
        <el-button size="mini" type="danger" @click="deleteProduct">删除</el-button>
        <p></p>
        <el-button size="mini" type="primary" @click="showWarning">提交</el-button>
        <p></p>
        <el-button size="mini" type="default" @click="submitContent">提交内容</el-button>
        <div>
            <p v-for="(item, index) in dataList" :key="index">{{item.content}}</p>
        </div>
        <p>
            <el-button size="mini" type="default" @click="decreaseProduct">-</el-button>
            商品数量：{{count}}
            <el-button size="mini" type="default" @click="increaseProduct">+</el-button>
        </p>
    </div>
</template>

<script>
    import MessageBox from 'util/MessageBox';
    import Notification from 'util/Notification';
    import {Message} from 'element-ui';
    import Vue from 'vue';
    import {Button} from 'element-ui';
    import {mapMutations, mapGetters, mapActions} from 'vuex';
    Vue.use(Button);

    export default {
        data() {
            return {
                dataList: [
                    {content: '不小心被噎住了怎么办？学会这个方法，关键时能救命'},
                    {content: '1岁女婴双肾长满结石是补钙补过头？儿童补钙这些须注意'},
                    {content: '还是努力学习吧！日本没有研发出改善记忆的药'}
                ]
            }
        },
        computed: {
            ...mapGetters([
                'isLogin',
                'newsList',
                'count'
            ])
        },
        created() {
            console.log(this.isLogin);
        },
        methods: {
            ...mapMutations({
                setUserInfo: 'SET_NEWS_LIST',
                setNewsList: 'SET_NEWS_LIST'
            }),
            ...mapActions({
                addProductCount: 'addCount'
            }),
            deleteProduct() {
                MessageBox.confirm('确认删除商品？', '删除商品', '保存', '取消保存', 'error', () => {
                    Notification.success('删除商品', '删除商品成功');
                    var obj = {name: '廖坚明', age: 26, job: 'web'};
                    this.setUserInfo(obj);
                }, () => {
                    Notification.error('删除商品', '删除商品失败');
                });
            },
            confrim() {
                console.log(1);
            },
            cancel() {
                console.log(2);
            },
            showWarning() {
                MessageBox.alert('请先选择待删除的商品项', '温馨提示', 'warning', () => {
                    console.log('warning');
                    Message.success('删除商品成功');
                })
            },
            submitContent() {
                MessageBox.prompt('校验邮箱', '温馨提示', '', '', () => {
                    console.log(3);
                    var newsList = [
                        {content: '修改后state后的新闻列表数据1'},
                        {content: '修改后state后的新闻列表数据2'},
                        {content: '修改后state后的新闻列表数据3'}
                    ]
                    this.setNewsList(newsList);
                    this.dataList = this.newsList;
                }, () => {
                    console.log(4);
                })
            },
            increaseProduct() {
                var count = this.count;
                count += 1;
                this.addProductCount({
                    count: count
                });
            },
            decreaseProduct() {
                var count = this.count;
                count -= 1;
                this.addProductCount({
                    count: count
                });
            }
        }
    }
</script>

<style scoped lang="less">
    .home-wrapper {
        width: 1200px;
        margin: 0 auto;
        p {
            padding: 2px;
        }
    }
</style>


