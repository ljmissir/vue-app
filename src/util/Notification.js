/**
 * author: liaojianming
 * date: 2018-12-26
 * description: Notification通知
 */
import {Notification} from 'element-ui';

export default {
    success: function(title, message) {
        Notification.success({
            title: title,
            message: message,
            type: 'success'
        });
    },
    warning: function(title, message) {
        Notification.warning({
            title: title,
            message: message,
            type: 'warning'
        });
    },
    info: function(title, message) {
        Notification.info({
            title: title,
            message: message,
            type: 'info'
        });
    },
    error: function(title, message) {
        Notification.error({
            title: title,
            message: message,
            type: 'error'
        });
    }
}