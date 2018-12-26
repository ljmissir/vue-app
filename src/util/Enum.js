/*
 * author: liaojianming
 * date: 2018-12-26
 * description: 枚举
*/

export default {
	toArray: function(enumObj) {
		var array = [];
		for (var key in enumObj.num) {
			array.push({
				label: enumObj.getValue(enumObj.num[key]),
				value: enumObj.num[key]
			});
		}
		return array;
	},
    orderStatus: {
    	num: {
    		unSubmit:0,
			inReview:4,
			waitForDelivery:8,
			inHand:12,
			delivered:16,
			confirmReceipt:20,
			partRestitution:22,
			completeRestitution:24,
			cancel:28,
			end:32,
			reject:40,
			close:48
    	},
    	getValue: function(num) {
    		switch(num) {
				case this.num.unSubmit:
					return "待提交";
				case this.num.inReview:
					return "审核中";
				case this.num.waitForDelivery:
					return "待发货";
				case this.num.inHand:
					return "处理中";
				case this.num.delivered:
					return "已发货";
				case this.num.confirmReceipt:
					return "租赁中";
				case this.num.partRestitution:
					return "部分归还";
				case this.num.completeRestitution:
					return "已归还";
				case this.num.cancel:
					return "已取消";
				case this.num.end:
					return "已结束";
				case this.num.reject:
					return "已拒绝";
				case this.num.close:
					return "已关闭";
				default:
					return '';
			}
    	}
    }
}