/**
 * Created by jianbohe on 16/5/22.
 */
/*
* 立即执行函数写法:将模块所有成员写在一个立即执行的函数中
*
* */

var module1 = (function(){

    var _count = 2;

    var m1 = function(){
      console.log("m1");
    };

    var m2 = function(){
      console.log(_count);
    };

    var getCount = function(){
        return _count;
    };
    //注意这里很关键
    return {
        m1 : m1,
        m2 : m2,
        getCount : getCount
    };
})();

module1.m1();
module1.m2();
console.log(module1._count);
module1._count = 4;
console.log(module1._count);
console.log(module1);
console.log(module1.getCount());