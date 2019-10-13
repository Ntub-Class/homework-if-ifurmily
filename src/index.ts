// 請介紹兩個字串方法跟數字方法

// String.prototype.trim()
// 方法從字符串的兩端刪除空格​​。
// 在這種情況下，空白是所有空白字符（空格，製表符，不間斷空格等）和所有行終止符（LF，CR等）。
let str1: string = '   小花   ';
console.log(str1.trim());

// String.prototype.toLowerCase（）將文字中所有英文字母大寫強制轉換成小寫
let str2: string = 'Gui Api';
console.log(str2.toLocaleLowerCase());


// Number.isInteger()方法確定傳遞的值是否為整數。
let nbr1: number = 99.1;
let nbr2: number = 99;

if (Number.isInteger(nbr1)) {
    console.log('是整數');
} else {
    console.log('不是整數');
}

// Number.toString()將數字轉換成文字行態
let nbr3: number = 98.1;
console.log(typeof(nbr3.toString()));

// 錢錢大於一個值，叫乾爹
let money = 40000;
let limit = 500000; // 限制值

if (money > limit) {
    console.log('乾爹');
} else {
    console.log('愛加油');
}