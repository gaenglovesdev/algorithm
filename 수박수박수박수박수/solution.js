/**
 * 길이가 n이고, 수박수박수박수....와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 
 * 예를들어 n이 4이면 수박수박을 리턴하고 3이라면 수박수를 리턴하면 됩니다.
 * 
 * 제한조건
 * - n은 길이 10,000이하인 자연수입니다.
 */

 function solution(n) {
    var answer = '';
    var pattern = '수박';
    
    if(n % 2 === 0){
        for(var i=0;i<n;i+=2){
            answer += pattern
        }
    }else{
        for(var i=0;i<n;i+=2){
            answer += pattern
            if(i === (n-1)){
                answer = answer.substr(0,n);
            }
        }
    }
    return answer;
}
console.log(solution(7))