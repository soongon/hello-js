

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
/*

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
*/

// 13. jQuery - hello
jQuery(document).ready(function () {

    $('#myForm').on('click', 'input:button', function() {
        $.ajax('https://api.github.com/users/soongon', {
            success: function (response) {
                var login = response.login;
                var id = response.id;
                var loc = response.location;
                var cAt = response.created_at;

                $('#destinations')
                    .children(':first-child')
                    .children('h2')
                    .text(login);
                $('#destinations')
                    .children(':nth-child(2)')
                    .text(id);
                $('#destinations')
                    .children(':nth-child(3)')
                    .text(loc);
                $('#destinations')
                    .children(':nth-child(4)')
                    .text(cAt);
            }
        });
    });

    $('#destinations').on('mouseenter', 'li:nth-child(2)', function () {
        $(this).parent('#destinations').children('li:last-child').slideUp();
    });

    $('#destinations').on('mouseout', 'li:nth-child(2)', function () {
        $(this).parent('#destinations').children('li:last-child').fadeIn();
    });

    $('#myForm').on('keyup', 'input:text', function () {
        //1.텍스트박스에 쓴 숫자를 가지고온다.
        var howMany = isNaN(+$(this).val()) ? 0 : +$(this).val();
        //console.log(howMany);

        $('#destinations')
            .children('li:last-child')
            .children('span')
            .text(howMany * 562);
    });

    $('.vacation').on('click', 'button', function () {
        //버튼 위치에 가격이 나타나게 한다.
        var priceTag = $('<p>From $399.99</p>');
        $(this).after(priceTag);

        //버튼 사라지게 한다.
        $(this).remove();
    });

    // var priceTag = $('<p>From $399.99</p>');
    //
    // $('#destinations').children('li.vacation').prepend(priceTag);
    //
    // $('#destinations').children('li.promo').remove();

    // var theText = $('h1').text();
    // console.log(theText);
    // $('h1').text('너 어디가니?');

    // $('li').first().next().text('seoul');
    // $('#destinations').find('li').first().text('seoul');
    // $('.promo');

    // #bookBigCon > ul:nth-child(1) > li:nth-child(2) > div.goods_img.bookTp > span > a > img

    // $('#bookBigCon').children(ul).first().children('li').first().next()
    //     .children('div.goods_img.bookTp').children('span').children('a').children('img')

    // #eBookTabCon01 > div.newGoodsArea > ul > li:nth-child(1) > div.goods_info > p.goods_price
    // $('#eBookTabCon01').children('div.newGoodsArea').children('ul').children('li').first()
    //     .children('div.goods_info').children('p.goods_price')

    //#jinyScrollItem_0 > ul > li:nth-child(2) > dl > dd > a > strong

});











