/**
 * うるう年かどうかを判定する関数
 * @param year - 判定する年
 * @returns うるう年の場合はtrue、そうでない場合はfalse
 */
function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// テスト
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2004)); // true
console.log(isLeapYear(2001)); // false