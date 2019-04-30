/**
 * 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
 * 
 * 제한사항
 * s는 길이가 1 이상, 100이하인 스트링입니다.
 */


function solution(s) {
    var strLength = s.length;
    var isEven = strLength % 2 === 0 ? true : false
    var answer = '';
    if(isEven){
        answer = s[(strLength/2)-1]+s[(strLength/2)]
    }else{
        answer = s[Math.round((strLength-1)/2)]
    }
    return answer;
}

solution('qwer')