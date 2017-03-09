//数组的结构赋值
// let [a, b, c] = [1,2,3];
// console.log(a);
// console.log(b);
// console.log(c);

//嵌套赋值
// let [foo, [[bar], baz]] = [1,[[2], 3]];
// console.log(foo);
// console.log(bar);
// console.log(baz);
//
// let [, , third] = ["foo", "bar" ,"baz"];
// console.log(third);

let [head,...tail] = [1,2,3,4]
console.log(head);
console.log(tail);
