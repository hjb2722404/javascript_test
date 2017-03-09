//const声明的变量不能改变；
// const PI = 3.14;
//
// console.log(PI);
//
// PI = 2;

//const声明的变量必须马上赋值
// const foo;

//const作用域
// if (true) {
//   const MAX = 5;
// }
//
// console.log(MAX);

//const暂时性死区
// if (true) {
//   console.log(MAX);
//   const MAX = 5;
// }

//const声明对象,不可更改指向
// const foo = {};
//
// foo.prop = 123;
// console.log(foo.prop);
//
// foo = {};

//4.顶层对象的属性

a = 1;
console.log(global.a);

let b = 1;
console.log(global.b);
