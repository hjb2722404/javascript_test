// 作用域-实验1

// var a = [];

//使用var
// for (var i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// }

//使用let
// for (let i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// }

// a[6]();

// for (let i = 0; i <3; i++) {
//   let i = 'abc';
//   console.log(i);
// }

//变量提升

//var的情况

// console.log(foo);
// var foo = 2;

//let的情况
// console.log(bar);
// let bar = 2;


//暂时性死区

// var tmp = 123;
// if (true) {
//   tmp = 'abc';
  // let tmp;
// }

// if (true) {
//   tmp = 'abc';
//   console.log(tmp);
//
//   let tmp;
//   console.log(tmp);
//
//   tmp = 123;
//   console.log(tmp);
// }


// a = typeof undecleared_var;
//
// console.log(a);

// a = typeof x;
// let x;
//
// console.log(a);

// function bar(x = y, y = 2) {
//   return [x,y];
// }
//
// bar();

//重复性声明不被允许

// function func(arg) {
//   let arg;
// }

function func(arg) {
  {
    let arg;
  }
}
