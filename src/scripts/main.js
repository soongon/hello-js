

// window.alert('Hello');

/* 01. 기본 변수 선언
var a = 5;
a = 10;

var b = 'hello';

var result = a + b;

var d = null;

console.log(result);

document.write('<h2>안녕하세요</h2>');
*/

// 02. 연산자
/*

var acc = 3;

acc += 5; // 누적 연산자

acc++;

console.log(acc);
*/

// 04. 문자열 결합
// var a = '안녕하세요';
// var b = '자바스크립트';
// var c = true;

//console.log(a, b, c);

// 05. for 문
/*

for (var i = 0; i < 5; i++) {
    console.log(i, '번째 손님 응대중입니다.');
}

for (var i = 1; i <= 100; i++) {
    console.log(i);
}

for (var i = 1; i <= 9; i++) {
    for (var j =1; j <= 9; j++) {
        console.log(i + '*' + j + '=' + i*j);
    }
}
*/

// 06. while 문
/*

var i = 0;
while (i < 5) {
    console.log(i, '번째 손님 응대중');
    i++;
}
*/

// 07. if 문
/**
 * 숫자 타입, number .. 0(false) 나머지(true)
 * 문자 타입, string .. null, undefined, ''(false) 이고 나머지는 (true)
 */
/*

var a = [1,2,3,4,5];

if (a) {
    console.log('true case');
} else {
    console.log('false case');
}
*/

// 08. 논리연산자
/*

var a;
var b = a || 0;
console.log(b);
*/

// 09. 배열기본
/*

var arr = ['h', 'e', 'l', 'l', 'o'];

arr.push('world'); // ['h', 'e', 'l', 'l', 'o', 'world']

console.log(arr);

console.log(arr[2]); // l

for (var item in arr) {
    console.log(arr[item]);
}
*/

// 10. 함수
/*

function addTwoNumbers(a, b) {
    return a + b;
}

console.log(addTwoNumbers(2, 3));

var subTwoNumbers = function (a, b) {
    return a - b;
};

console.log(subTwoNumbers(5, 3));

var multiplyTwoNumbers = function (a, b) {
    console.log(a * b);
};

var ret = multiplyTwoNumbers(4, 6);
console.log(ret);


function plusThree(a) {
    var resultOutter = a + 3;

    function plusTwo() {
        return resultOutter + 2;
    }

    return plusTwo();
}

console.log(plusThree(3));
*/

// 10-1. 콜백함수(함수형 프로그래밍 기본)
/*

var adder = function (a, b) {
    return a + b;
};

var subber = function (a, b) {
    return a - b;
};

function getCalcNumber(a, b, func) {
    return func(a, b);
}

function sum(datas) {
    var acc = 0;
    for (var item in datas) {
        acc += datas[item];
    }
    return acc;
}

function average(datas) {
    return sum(datas) / datas.length;
}

function calcNumbers(datas, func) {
    return func(datas);
}
*/

// console.log(getCalcNumber(10, 20, adder));
// console.log(getCalcNumber(20, 50, subber));
/*

var arr = [2,3,4,7];
console.log(calcNumbers(arr, sum));
console.log(calcNumbers(arr, average));

function makeSquare(val) {
    return function () {
        return val * val;
    }
}

var square = makeSquare(345)();

console.log(square);
*/

// 11. 변수의 스코프(scope of variables)
/*

function scopeTest(a) {
    var b = 5;

    if (1) {
        var c = 3;
        console.log(c);
    }

    console.log(c);
}

scopeTest();

window.alert('hello');

var clickConfirm = window.confirm('hello');

if (clickConfirm) {
    console.log('확인을 클릭하셨어요');
} else {
    console.log('취소를 클릭하셨어요');
}
*/

//12. 자바스크립트 객체

var obj = {};


var num = 5;
var str = 'hello';
var bool = true; // false
var arr = [];
var obj = {};

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof arr);
console.log(typeof obj);


var art1 = {
    articleId: 1,
    title: 'hello',
    author: 'kim',
    content: '테스트에요..'
};

var art2 = {
    articleId: 2,
    title: '제목',
    author: 'lee',
    content: '테스트입니다.',
    add: function(a,b) {
        return a + b;
    },
    sub: function (a, b) {
        return a -b;
    }
};

console.log(art2.add(3,5));


var artList =
    [
        {
            articleId: 1,
            title: 'hello',
            author: 'kim',
            content: '테스트에요..'
        },
        {
            articleId: 2,
            title: '제목',
            author: 'lee',
            content: '테스트입니다.'
        }
    ];







