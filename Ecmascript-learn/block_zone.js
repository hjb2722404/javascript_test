//为什么需要块级作用域

//1.内层变量可能会覆盖外层变量

// var tmp = new Date();
//
// function f() {
//   console.log(tmp);
//   if (false) {
//     var tmp = "hello world";
//   }
// }
//
// f();

//2.用来计数的循环变量泄露为全局变量

// var s = "hello";
// for (var i = 0; i < s.length; i++) {
//   console.log(s[i]);
// }
//
// console.log(i);

//ES6块级作用域

// function f1() {
//   let n = 5;
//   if (true) {
//     let n = 10;
//   }
//   console.log(n);
// }
// f1();

//块级作用域嵌套

// {
//   {
//     {
//       {let insane = "hello world"}
//
//       console.log(insane);
//     }
//   }
// }

// {{{{
//   let insane = "Hello world";
//   {let insane = "Hello World"}
// }}}}

//块级作用域中的函数声明

function f() {
  console.log('I am outside');
}

(function () {
  if (false) {
    function f() {
      console.log('I am inside');
    }
    f();
  }
}());
