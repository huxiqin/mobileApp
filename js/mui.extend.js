var wo;

Date.prototype.pattern = function(fmt) {
	var o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时
		"H+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds() //毫秒
	};
	var week = {
		"0": "/u65e5",
		"1": "/u4e00",
		"2": "/u4e8c",
		"3": "/u4e09",
		"4": "/u56db",
		"5": "/u4e94",
		"6": "/u516d"
	};
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	if (/(E+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[this.getDay() + ""]);
	}
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		}
	}
	return fmt;
}
Date.prototype.addDay = function(day) {
	var n = this.getTime() + day * 24 * 60 * 60 * 1000;
	return new Date(n);
}
Date.prototype.getTimeStamp = function() {
	return parseInt(this.getTime() / 1000);
}
Date.prototype.timeStamp = function(sdate) {
	return new Date(parseInt(sdate) * 1000);
}
Date.prototype.getAge = function(bornYear) {
		var d = new Date();
		var y = d.getFullYear();
		var b = bornYear.substring(0, 4);
		return y - parseInt(b) + 1;
	}
	// 传入yyyy-MM-dd HH:mm:ss格式的日期
Date.prototype.setDateTime = function(dateTime) {
	var v = dateTime.split(/[- :]/g);
	var d = new Date();
	var yyyy = v[0] ? v[0] : 0,
		MM = v[1] ? v[1] : 0,
		dd = v[2] ? v[2] : 0,
		HH = v[3] ? v[3] : 0,
		mm = v[4] ? v[4] : 0,
		ss = v[5] ? v[5] : 0;
	d.setFullYear(yyyy, MM - 1, dd);
	d.setHours(HH, mm, ss);
	return d;
}