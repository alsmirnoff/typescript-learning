// let test1: number = 123;
// let test2: string = 'abc';
// console.log(test1 + test2);

// let arr1: string[] = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr1[0]);
// let arr2: Array<string> = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr2[0]);

// let user = {name: 'john', age: 30};
// let date = {year: 2025, month: 12, day: 15}
// console.log(user);
// console.log(date);

// let user = {name: 'john', age: 30};
// // user = {name: 'eric'};
// // user = {name: 'eric', age: 40, salary: 300};
// user = {name: 'eric', age: 40};
// console.log(user);

// let date = {year: 2025, month: 12, day: 31};
// date = {year: 2025, month: 12, date: 7};
// console.log(date);

// let user = {name: 'john', age: 30};
// user.age = '30';
// console.log(user);

// let product = {code: '123', name: 'apple', price: 12 };
// product.price = 123;
// console.log(product);

// for (let i: number = 0; i <= 10; i++) {
// 	console.log(i);
// }

// let res = 0;
// for (let i: number = 0; i < 100; i++) {
// 	res += i;
// }
// console.log(res);

// let arr: number[] = [1, 2, 3, 4, 5];
// for (let elem of arr) {
// 	console.log(elem);
// }

// let arr: number[] = [1, 2, 3, 4, 5];
// let res = 0;
// for (let elem of arr) {
// 	res += elem;
// }

// console.log(res);

// let obj = {a: 1, b: 2, c: 3};
// for (let key in obj) {
// 	console.log(key);
// }


let obj = {a: 1, b: 2, c: 3};
let res = 0;
for (let key in obj) {
	let elem = obj[key];
	res += elem;
}
console.log(res);