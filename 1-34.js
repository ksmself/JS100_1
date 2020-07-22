/*
민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 
민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
(키는 공백으로 구분하여 입력됩니다.)

입력 : 176 156 155 165 166 169
출력 : NO

입력 : 155 156 165 166 169 176
출력 : YES
*/

//My Answer 
function height(){
  const input = prompt("키를 입력해주세요").split(" "); 
  let count = 0;
  input.forEach((item, idx) => {
    if(idx < input.length - 1){
      if(item < input[idx + 1]){
        count++; 
      }
    }
  });
  if(count == input.length - 1){
    console.log("YES");
  }
  else{
    console.log("NO");
  }
}

height();

//Answer 
const unsorted = prompt('키를 입력하세요');
let sorted = "";

sorted = unsorted
  .split(" ")
  .sort(function(a, b) {
    return a - b;
  })
  .join(" ");

if (unsorted === sorted) {
  console.log("Yes");
} else {
  console.log("No");
}
