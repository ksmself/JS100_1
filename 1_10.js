/*
크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다. 그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다. 온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다. 
하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다. 
은비를 위해 프로그램을 작성해 주세요.
입력
5
출력
    *
   ***
  *****
 *******
*********
*/ 

//My Answer('\n'을 활용하지 않아 제대로 출력되지 않음) 
function tree(k){
  var ch = ""; 
  for(var i = 1; i <= k; i++, ch = ""){
    for(var b = k - i; b > 0; b--){
      ch.concat(" "); 
    }
    for(var s = 2 * i - 1; s > 0; s--){
      ch.concat("*"); 
    }
    console.log(ch); 
  }
}

//Answer
const n = prompt('숫자를 입력하세요.');
let tree = '';

for(let i=1; i<=n; i++){
  let star = '';
  for(let j=1; j<=n-i; j++){
    star += ' ';
  }
  for(let k=1; k<=2*i-1; k++){
    star += '*';
  }
  tree += star + '\n';
}

console.log(tree);
