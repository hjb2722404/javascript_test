/**
 * Created by jianbohe on 16/5/22.
 */
/*
* 对象写法:所有模块成员放到同一个对象里
* 缺点:暴露里私有成员
* */

var module1 = new Object({
    _count : 0,

    m1 : function(){
        console.log("m1");
    },

    m2 : function(){
        console.log("m2");
    }
});

module1.m1();
module1.m2();
console.log(module1._count);
module1._count = 5;
console.log(module1._count);
