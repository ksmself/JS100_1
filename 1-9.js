//다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

데이터
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = //빈칸을 채워주세요

console.log(result);


출력
2019/04/26 11:34:27

//My Answer 
year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second

//Answer - concat 메서드는 전달된 문자열을 메서드를 호출한 문자열에 붙여 새로운 문자열로 반환 
year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);