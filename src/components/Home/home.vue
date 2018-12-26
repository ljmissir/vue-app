<template>
    <div class="home-wrapper">
        <el-button size="mini" type="danger" @click="deleteProduct">删除</el-button>
        <p></p>
        <el-button size="mini" type="primary" @click="showWarning">提交</el-button>
        <p></p>
        <el-button size="mini" type="default" @click="submitContent">提交内容</el-button>
    </div>
</template>

<script>
    import MessageBox from 'util/MessageBox';
    import Notification from 'util/Notification';
    import {Message} from 'element-ui';
    import Vue from 'vue';
    import {Button} from 'element-ui';
    Vue.use(Button);

    export default {
        data() {
            return {

            }
        },
        methods: {
            deleteProduct() {
                MessageBox.confirm('确认删除商品？', '删除商品', '保存', '取消保存', 'error', function() {
                    console.log('确认');
                    Notification.success('删除商品', '删除商品成功');
                }, function() {
                    console.log('取消');
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
                MessageBox.alert('请先选择待删除的商品项', '温馨提示', 'warning', function() {
                    console.log('warning');
                    Message.success('删除商品成功');
                })
            },
            submitContent() {
                MessageBox.prompt('校验邮箱', '温馨提示', '', '', function() {
                    console.log(3);
                }, function() {
                    console.log(4);
                })
            }
        }
    }
</script>

<style scoped>

</style>


