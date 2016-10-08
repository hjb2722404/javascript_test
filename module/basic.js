/**
 * Created by jianbohe on 16/5/22.
 */

/*
* module:实现特定功能的一组方法
* 基本形式:将一组实现特定功能的方法放在一起
* 缺点:污染了全局变量
* */
var m1 = function(){
  console.log("m1");
};

var m2 = function(){
    console.log("m2");
};

m1();
m2();