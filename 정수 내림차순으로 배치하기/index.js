function solution(n) {
  var answer = 0;
  answer =  +n.toString().split("").sort().reverse().join("")
  return answer;
}