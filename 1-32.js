/*
취업 준비생인 혜림이는 자기소개서를 쓰고 있습니다. 열심히 자기소개서를 작성하던 도중 혜림이는 자기가 지금까지 단어를 얼마나 적었는지 궁금하게 됩니다. 
혜림이를 위해 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램을 작성해 주세요.

입력 : 안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.
출력 : 5
*/

//My Answer 
function numberOfWord(){
  const sentence = prompt("문장을 입력해주세요").split(" "); 
  console.log(sentence.length)
}

numberOfWord();

//Answer 
const string = prompt('문자열을 입력하세요.').split(' ');

console.log(string.length);
