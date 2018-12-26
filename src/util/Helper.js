/**
 * author: liaojianming
 * date: 2018-12-26
 * description: Helper.js 工具类js
 */

export default {
    // 布尔值转换成是否
    booleanToStr: function(boolean) {
        return boolean ? '是' : '否';
    },
    // 数组转换成对象
    arrayToObject: function(array) {
        if (!Array.isArray(array)) {
            return [];
        }
        var obj = {};
        for (var i=0; i<array.length; i++) {
            for (var key in array[i]) {
                obj[key] = array[i][key];
            }
        }
        return obj;
    },
    // 对象转换成数组
    objectToArray: function(obj) {
        if (!obj && !typeof(obj) === 'object') {
            return {};
        }
        var array = [];
        for (var key in obj) {
            var targetObj = {};
            targetObj[key] = obj[key];
            array.push(targetObj);
        }
        return array;
    },
    // &相连接的字符串转换成对象object
    queryToObject: function(query) {
        if (!query) {
            return {};
        }
        var array = query.split('&');
        var obj = {};
        for (var i=0; i<array.length; i++) {
            var tmpArr = array[i].split('=');
            obj[tmpArr[0]] = tmpArr[1];
        }
        return obj;
    },
    // 对象转换成&相接的字符串
    objectToQuery: function(obj) {
        if (!obj) {
            return '';
        }
        var str = '';
        for (var key in obj) {
            var value = obj[key] !== undefined ? obj[key] : '';
            str += '&' + key + '=' + encodeURIComponent(value);
        }
        return str ? str.substring(1) : '';
    },
    // 获取地址栏参数
    getUrlParam: function(key) {
        var uri = window.location.search;
        var re = new RegExp("" + key + "=([^&?]*)", "ig");
        return uri.match(re) ? (uri.match(re)[0].substr(key.length + 1)) : null;
    },
    // 小于10的数前面加0
    addZero: function(num) {
        if (!num || typeof(num) !== 'number') {
            return;
        }
        return num > 9 ? num : '0' + num;
    },
    // 时间戳格式化
    formatDate: function(time, formatType) {
        /*
            time：传进来的时间戳，formatType：需要格式化成的日期格式：
            常见格式：yyyy-MM-dd hh:mm:ss，yyyy-MM-dd，yyyy-MM，yyyy/MM，yyyy/MM/dd
        */
        if (!time || typeof(time) !== 'number') {
            return '---';
        }
        var date = new Date(Number(time));
        var obj = {
            "M+" : date.getMonth() + 1,                   //月份
            "d+" : date.getDate(),                        //日
            "h+" : date.getHours(),                       //小时
            "m+" : date.getMinutes(),                     //分
            "s+" : date.getSeconds(),                     //秒
            // "q+" : Math.floor((date.getMonth() + 3) / 3), //季度
            "S"  : date.getMilliseconds()                 //毫秒
        };
        if (/(y+)/.test(formatType)) {
            formatType = formatType.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var key in obj) {
            if (new RegExp("(" + key + ")").test(formatType)) {
                formatType = formatType.replace(RegExp.$1, (RegExp.$1.length === 1) ? (obj[key]) : (("00"+ obj[key]).substr(("" + obj[key]).length)));
            }
        }
        return formatType;
    },
    // 手机号加密处理
    formatPhone: function(phone) {
        if (!phone || typeof(phone) !== 'string') {
            return '';
        }
        return phone.replace(/(.{3}).*(.{4})/g, '$1****$2');
    },
    // 金额格式化 (12222222.3123, 4) => 12,222,222.3123
    formatMoney: function(source, n) {
        /*
         * source：要格式化的数字
         * n：保留几位小数
        */
        n = n > 0 && n <= 20 ? n : 2;
        source = parseFloat((source + "").replace(/[^\d\\.-]/g, "")).toFixed(n) + "";
        var left = source.split(".")[0].split("").reverse(),
            right = source.split(".")[1],
            result = "";
        for (var i=0; i<left.length; i++) {
            result += left[i] + ((i + 1) % 3 === 0 && (i + 1) !== left.length ? "," : "");
        }
        return result.split("").reverse().join("") + "." + right;
    },
    // 深拷贝
    deepCopy: function(obj) {
        if (!obj) {
            return null;
        }
        var cloneObj = Array.isArray(obj) ? [] : {};
        if (obj && typeof(obj) === 'object') {
            for (var key in obj) {
                if (obj[key] && typeof(obj[key]) === 'object') {
                    cloneObj[key] = this.deepCopy(obj[key]);
                } else {
                    cloneObj[key] = obj[key];
                }
            }
        }
        return cloneObj;
    },
    // 校验object里的属性值是否全部为空
    checkObjValueIsEmpty: function(obj) {
        if (!obj || typeof(obj) !== 'object') {
            return false;
        }
        var isEmpty = false;
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (obj[key] === null || obj[key] === '') {
                    isEmpty = true;
                } else {
                    isEmpty = false;
                    break;
                }
            }
        }
        return isEmpty;
    },
    // 校验手机号是否合法
    checkMobilePhone: function(phone) {
        if (!phone) {
            return false;
        }
        var reg = /^[1][3-9][0-9]{9}$/;
        return reg.test(phone);
    },
    // 校验邮箱是否合法
    checkEmail: function(email) {
        if (!email || typeof(email) !== 'string') {
            return false;
        }
        var mailReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        return mailReg.test(email);
    },
    // 取数组的最大值
    getMaxValueFromArray: function(array) {
        if (!Array.isArray(array)) {
            return null;
        }
        return Math.max.apply({}, array);
    },
    // 取数组的最小值
    getMinValueFromArray: function(array) {
        if (!Array.isArray(array)) {
            return null;
        }
        return Math.min.apply({}, array);
    }
 }