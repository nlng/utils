(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.average = exports.sum = exports.min = exports.max = exports.formArray = exports.remove = exports.intersect = exports.union = exports.unique = exports.sort = exports.map = exports.each = void 0;

var _arguments = arguments,
    _this2 = void 0;

/**
* @param  {arr} 数组
* @param  {fn} 回调函数
* @return {undefined}
*/
var each = function each(arr, fn) {
  fn = fn || Function;
  var a = [];
  var args = Array.prototype.slice.call(_arguments, 1);

  for (var i = 0; i < arr.length; i++) {
    var res = fn.apply(arr, [arr[i], i].concat(args));
    if (res != null) a.push(res);
  }
};
/**
* @param  {arr} 数组
* @param  {fn} 回调函数
* @param  {thisObj} this指向
* @return {Array} 
*/


exports.each = each;

var map = function map(arr, fn, thisObj) {
  var scope = thisObj || window;
  var a = [];

  for (var i = 0, j = arr.length; i < j; ++i) {
    var res = fn.call(scope, arr[i], i, _this2);
    if (res != null) a.push(res);
  }

  return a;
};
/**
* @param  {arr} 数组
* @param  {type} 1：从小到大   2：从大到小   3：随机
* @return {Array}
*/


exports.map = map;

var sort = function sort(arr) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return arr.sort(function (a, b) {
    switch (type) {
      case 1:
        return a - b;

      case 2:
        return b - a;

      case 3:
        return Math.random() - 0.5;

      default:
        return arr;
    }
  });
};
/*去重*/


exports.sort = sort;

var unique = function unique(arr) {
  if (Array.hasOwnProperty('from')) {
    return Array.from(new Set(arr));
  } else {
    var n = {},
        r = [];

    for (var i = 0; i < arr.length; i++) {
      if (!n[arr[i]]) {
        n[arr[i]] = true;
        r.push(arr[i]);
      }
    }

    return r;
  }
};
/*求两个集合的并集*/


exports.unique = unique;

var union = function union(a, b) {
  var newArr = a.concat(b);
  return _this2.unique(newArr);
};
/*求两个集合的交集*/


exports.union = union;

var intersect = function intersect(a, b) {
  var _this = _this2;
  a = _this2.unique(a);
  return _this2.map(a, function (o) {
    return _this.contains(b, o) ? o : null;
  });
};
/*删除其中一个元素*/


exports.intersect = intersect;

var remove = function remove(arr, ele) {
  var index = arr.indexOf(ele);

  if (index > -1) {
    arr.splice(index, 1);
  }

  return arr;
};
/*将类数组转换为数组的方法*/


exports.remove = remove;

var formArray = function formArray(ary) {
  var arr = [];

  if (Array.isArray(ary)) {
    arr = ary;
  } else {
    arr = Array.prototype.slice.call(ary);
  }

  ;
  return arr;
};
/*最大值*/


exports.formArray = formArray;

var max = function max(arr) {
  return Math.max.apply(null, arr);
};
/*最小值*/


exports.max = max;

var min = function min(arr) {
  return Math.min.apply(null, arr);
};
/*求和*/


exports.min = min;

var sum = function sum(arr) {
  return arr.reduce(function (pre, cur) {
    return pre + cur;
  });
};
/*平均值*/


exports.sum = sum;

var average = function average(arr) {
  return _this2.sum(arr) / arr.length;
};

exports.average = average;
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatTime = void 0;
var _arguments = arguments;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var formatTime = function formatTime(time, cFormat) {
  if (_arguments.length === 0) return null;

  if ((time + '').length === 10) {
    time = +time * 1000;
  }

  var format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}',
      date;

  if (_typeof(time) === 'object') {
    date = time;
  } else {
    date = new Date(time);
  }

  var formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  var time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, function (result, key) {
    var value = formatObj[key];
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1];

    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }

    return value || 0;
  });
  return time_str;
};

exports.formatTime = formatTime;
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeToChinese = exports.numberToChinese = exports.random = void 0;
var _arguments = arguments;

var random = function random(min, max) {
  if (_arguments.length === 2) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  } else {
    return null;
  }
};

exports.random = random;

var numberToChinese = function numberToChinese(num) {
  var AA = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
  var BB = ["", "十", "百", "仟", "萬", "億", "点", ""];
  var a = ("" + num).replace(/(^0*)/g, "").split("."),
      k = 0,
      re = "";

  for (var i = a[0].length - 1; i >= 0; i--) {
    switch (k) {
      case 0:
        re = BB[7] + re;
        break;

      case 4:
        if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$").test(a[0])) re = BB[4] + re;
        break;

      case 8:
        re = BB[5] + re;
        BB[7] = BB[5];
        k = 0;
        break;
    }

    if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0) re = AA[0] + re;
    if (a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re;
    k++;
  }

  if (a.length > 1) // 加上小数部分(如果有小数部分)
    {
      re += BB[6];

      for (var i = 0; i < a[1].length; i++) {
        re += AA[a[1].charAt(i)];
      }
    }

  if (re == '一十') re = "十";
  if (re.match(/^一/) && re.length == 3) re = re.replace("一", "");
  return re;
};
/*将数字转换为大写金额*/


exports.numberToChinese = numberToChinese;

var changeToChinese = function changeToChinese(Num) {
  //判断如果传递进来的不是字符的话转换为字符
  if (typeof Num == "number") {
    Num = new String(Num);
  }

  ;
  Num = Num.replace(/,/g, ""); //替换tomoney()中的“,”

  Num = Num.replace(/ /g, ""); //替换tomoney()中的空格

  Num = Num.replace(/￥/g, ""); //替换掉可能出现的￥字符

  if (isNaN(Num)) {
    //验证输入的字符是否为数字
    //alert("请检查小写金额是否正确");
    return "";
  }

  ; //字符处理完毕后开始转换，采用前后两部分分别转换

  var part = String(Num).split(".");
  var newchar = ""; //小数点前进行转化

  for (var i = part[0].length - 1; i >= 0; i--) {
    if (part[0].length > 10) {
      return ""; //若数量超过拾亿单位，提示
    }

    var tmpnewchar = "";
    var perchar = part[0].charAt(i);

    switch (perchar) {
      case "0":
        tmpnewchar = "零" + tmpnewchar;
        break;

      case "1":
        tmpnewchar = "壹" + tmpnewchar;
        break;

      case "2":
        tmpnewchar = "贰" + tmpnewchar;
        break;

      case "3":
        tmpnewchar = "叁" + tmpnewchar;
        break;

      case "4":
        tmpnewchar = "肆" + tmpnewchar;
        break;

      case "5":
        tmpnewchar = "伍" + tmpnewchar;
        break;

      case "6":
        tmpnewchar = "陆" + tmpnewchar;
        break;

      case "7":
        tmpnewchar = "柒" + tmpnewchar;
        break;

      case "8":
        tmpnewchar = "捌" + tmpnewchar;
        break;

      case "9":
        tmpnewchar = "玖" + tmpnewchar;
        break;
    }

    switch (part[0].length - i - 1) {
      case 0:
        tmpnewchar = tmpnewchar + "元";
        break;

      case 1:
        if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
        break;

      case 2:
        if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
        break;

      case 3:
        if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
        break;

      case 4:
        tmpnewchar = tmpnewchar + "万";
        break;

      case 5:
        if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
        break;

      case 6:
        if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
        break;

      case 7:
        if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
        break;

      case 8:
        tmpnewchar = tmpnewchar + "亿";
        break;

      case 9:
        tmpnewchar = tmpnewchar + "拾";
        break;
    }

    var newchar = tmpnewchar + newchar;
  } //小数点之后进行转化


  if (Num.indexOf(".") != -1) {
    if (part[1].length > 2) {
      // alert("小数点之后只能保留两位,系统将自动截断");
      part[1] = part[1].substr(0, 2);
    }

    for (i = 0; i < part[1].length; i++) {
      tmpnewchar = "";
      perchar = part[1].charAt(i);

      switch (perchar) {
        case "0":
          tmpnewchar = "零" + tmpnewchar;
          break;

        case "1":
          tmpnewchar = "壹" + tmpnewchar;
          break;

        case "2":
          tmpnewchar = "贰" + tmpnewchar;
          break;

        case "3":
          tmpnewchar = "叁" + tmpnewchar;
          break;

        case "4":
          tmpnewchar = "肆" + tmpnewchar;
          break;

        case "5":
          tmpnewchar = "伍" + tmpnewchar;
          break;

        case "6":
          tmpnewchar = "陆" + tmpnewchar;
          break;

        case "7":
          tmpnewchar = "柒" + tmpnewchar;
          break;

        case "8":
          tmpnewchar = "捌" + tmpnewchar;
          break;

        case "9":
          tmpnewchar = "玖" + tmpnewchar;
          break;
      }

      if (i == 0) tmpnewchar = tmpnewchar + "角";
      if (i == 1) tmpnewchar = tmpnewchar + "分";
      newchar = newchar + tmpnewchar;
    }
  } //替换所有无用汉字


  while (newchar.search("零零") != -1) {
    newchar = newchar.replace("零零", "零");
  }

  newchar = newchar.replace("零亿", "亿");
  newchar = newchar.replace("亿万", "亿");
  newchar = newchar.replace("零万", "万");
  newchar = newchar.replace("零元", "元");
  newchar = newchar.replace("零角", "");
  newchar = newchar.replace("零分", "");

  if (newchar.charAt(newchar.length - 1) == "元") {
    newchar = newchar + "整";
  }

  return newchar;
};

exports.changeToChinese = changeToChinese;
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTrue = exports.isFalse = exports.isUndefined = exports.isNull = exports.isFunction = exports.isBoolean = exports.isDate = exports.isArray = exports.isObj = exports.isNumber = exports.isString = void 0;

var _this = void 0;

//是否字符串
var isString = function isString(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'String';
}; //是否数字


exports.isString = isString;

var isNumber = function isNumber(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Number';
}; //是否对象


exports.isNumber = isNumber;

var isObj = function isObj(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}; //是否数组


exports.isObj = isObj;

var isArray = function isArray(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array';
}; //是否时间


exports.isArray = isArray;

var isDate = function isDate(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Date';
}; //是否boolean


exports.isDate = isDate;

var isBoolean = function isBoolean(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean';
}; //是否函数


exports.isBoolean = isBoolean;

var isFunction = function isFunction(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Function';
}; //是否为null


exports.isFunction = isFunction;

var isNull = function isNull(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Null';
}; //是否undefined


exports.isNull = isNull;

var isUndefined = function isUndefined(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined';
};

exports.isUndefined = isUndefined;

var isFalse = function isFalse(o) {
  if (o == '' || o == undefined || o == null || o == 'null' || o == 'undefined' || o == 0 || o == false || o == NaN) {
    return true;
  } else {
    return false;
  }
};

exports.isFalse = isFalse;

var isTrue = function isTrue(o) {
  return !_this.isFalse(o);
};

exports.isTrue = isTrue;
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UrlToObject = void 0;

/**
 * url 转 js 对象
* @param  {string} str 
* @return {Object} obj
*/
var UrlToObject = function UrlToObject(str) {
  var obj = {};
  var index = str.indexOf('?');

  if (index > -1) {
    var str = str.slice(index + 1);
    var arr = str.split('&');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        var res = item.split('=');
        obj[res[0]] = res[1];
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  return obj;
};

exports.UrlToObject = UrlToObject;
},{}],6:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Url = exports.Number = exports.Array = exports.Date = exports.Type = void 0;

var Type = _interopRequireWildcard(require("./Type"));

exports.Type = Type;

var Date = _interopRequireWildcard(require("./Date"));

exports.Date = Date;

var Array = _interopRequireWildcard(require("./Array"));

exports.Array = Array;

var Number = _interopRequireWildcard(require("./Number"));

exports.Number = Number;

var Url = _interopRequireWildcard(require("./Url"));

exports.Url = Url;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
},{"./Array":1,"./Date":2,"./Number":3,"./Type":4,"./Url":5}],7:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Utils = _interopRequireWildcard(require("./main"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(function (window) {
  if (typeof window !== "undefined") {
    window.Utils = Utils;
  } else {
    throw new Error('window is not defined');
  }
})(window);
},{"./main":6}]},{},[7]);