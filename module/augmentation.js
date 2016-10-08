/**
 * Created by jianbohe on 16/5/22.
 */
/*
* 放大模式:一个模块必须分成几个部分或者一个模块需要继承另一个模块
* 缺点:在实际加载时如果顺序不对,有可能加载一个不存在的对象
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

var module1 = (function(mod){

    mod.m3 = function () {
        console.log("m3");
    };

    return mod;
})(module1);

module1.m1();
module1.m2();
module1.m3();