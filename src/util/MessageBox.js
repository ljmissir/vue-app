/**
 * author: liaojianming
 * date: 2018-12-26
 * description: MessageBox弹框
 */
import {MessageBox} from 'element-ui';

export default {
    confirm: function(message, title, okText, cancelText, type, confirm, cancel) {
        MessageBox.confirm(message, title, {
            confirmButtonText: okText || '确定',
            cancelButtonText: cancelText || '取消',
            closeOnClickModal: false,
            type: type
        }).then(() => {
                confirm && confirm();
            }).catch(() => {
                cancel && cancel();
        });
    },
    alert: function(message, title, callBack) {
        MessageBox.alert(message, title
            ).then(() => {
            callBack && callBack();
        }).catch(() => {
            console.log('取消');
        })
    },
    prompt: function(message, title, okText, cancelText, confirm, cancel) {
        MessageBox.prompt(message, title, {
            confirmButtonText: okText || '确定',
            cancelButtonText: cancelText || '取消'
        }).then(() => {
            confirm && confirm();
        }).catch(() => {
            cancel && cancel();
        })
    }
}