
// 要處理的字串
let word = 'abcde';

// console.log('我總共要跑幾圈:', word.length);

// 要計算的條件字串
let key = 'a';

// 用來記錄出現次數的變數
let ans = 0;

// word.length 計算處理字串的字數

// word.charAt(i) 取出word中字串第i個位置的文字

for (let i = 0; i < word.length; i++) {
    
    // 檢查第i個位置的文字是不是等於key 如果有就紀錄出現幾次
    if (word.charAt(i) === key) {
        ans++;
    }
}

console.log('總共出現幾次:', ans);