<template>
  <div class="bg_wrapper login_wrapper" :style="getBgStyle">
    <div class="container demo-1">
        <div class="content">
            <div id="large-header" class="large-header">
            <canvas id="demo-canvas"></canvas>
            </div>
        </div>
    </div>

    <el-card class="login-card">
      <div slot="header" class="login-header">
        <img :src="logo" class="logo-img" height="32">
        <span class="logo-text">小熊U租商城后台管理系统</span>
      </div>
      <el-form class="login" status-icon :model="loginForm" ref="loginForm">
        <el-form-item prop="username"
          :rules="[
              {required: true, message: '用户名不能为空', trigger: 'blur'}
          ]"
          >
          <el-input
              placeholder="请输入用户名" 
              v-model="loginForm.username" 
              @keyup.enter.native="submitForm('loginForm')"
              @keyup.space.native="noSpace"
              type="text"></el-input>
        </el-form-item>
        <el-form-item prop="password"
          :rules="[
              {required: true, message: '密码不能为空', trigger: 'blur'}
          ]">
          <el-input
              placeholder="请输入密码" 
              v-model="loginForm.password"
              @keyup.enter.native="submitForm('loginForm')"
              @keyup.space.native="noSpace"
              type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
    import logo from 'assets/img/logo.png';
    import LoginBg from 'assets/img/login_bg.jpg';
    import Vue from 'vue';
    import {Card, Form, FormItem, Button, Input} from 'element-ui';
    import Notification from 'util/Notification';
    import {animationRunning} from '../../animation/demo-1.js';
    import {rAF} from '../../animation/rAF.js';
    import  { TweenLite } from 'gsap';
    import './../../animation/normalize.css';
    Vue.use(Card);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Button);
    Vue.use(Input);
    
    export default {
        data () {
            return {
                logo: logo,
                LoginBg: LoginBg,
                loginForm: {
                    username: '',
                    password: ''
                },
                params: new Object()
            }
        },
        computed: {
          getBgStyle() {
            return {
              background: `url(${LoginBg}) no-repeat center center`
            }
          }
        },
        mounted () {
            rAF();
            animationRunning();
        },
        methods: {
        	// 登录表单提交事件
            submitForm(loginForm) {
                this.params = {
                    loginName: this.loginForm.username,
                    password: this.loginForm.password
                }
                this.$refs[loginForm].validate((valid) => {
                    if (valid) {
                        this.logIn()
                    } else {
                        return false;
                    }
                })
            },
            logIn() {
                Notification.success('用户登录', '登录成功');
                this.$router.push('/home');
            },
            // 禁止输入空格
            noSpace() {
                this.loginForm.username = this.loginForm.username.replace(/(^\s+)|(\s+$)/g,'');
                this.loginForm.password = this.loginForm.password.replace(/(^\s+)|(\s+$)/g,'');
            }
        }
    }
</script>

<style lang="less">
  .login_wrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    .el-card {
        border: none;
    }
  }
  .login_wrapper .login-card {
    width: 568px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5) !important;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .el-card__header {
    width: 440px;
    margin: 0 auto;
    padding: 35px 0 18px 0;
    border-bottom: 1px solid #dfdfdf;
  }
  .login_wrapper .el-input__inner {
    width: 440px !important;
    height: 50px;
  }
  .login_wrapper .el-form-item:first-child .el-input__inner {
    margin-bottom: 4px;
  }

  .login {
      display: block;
      width: 440px;
      margin: 0px auto;
      margin-top: 30px;
      margin-bottom: 70px;
    }

    .login_wrapper .login .el-button--primary {
        width: 100%;
        height: 52px;
        margin-top: 16px;
        font-size: 16px;
      }
    .login-header {
        line-height: 35px;
        img {
            vertical-align: middle;
        }
        .logo-text {
            color: #288bdd;
            font-size: 18px;
            margin-left: 10px;
            position: relative;
            top: 3px;
        }
    }
</style>
