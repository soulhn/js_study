//q1 이름을 찾아주는 함수

let 출석부 = ["흥민", "영희", "철수", "재석"];

function findName(item) {
  출석부.forEach((a) => {
    if (a === item) console.log(item);
  });
}

findName("철수");

//구구단 출력
function gugudan() {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      console.log(i * j);
    }
  }
}

gugudan();

//q3 평균 비교 []에 현재 시험점수 , 다음 파라미터에 이전 평균 비교

function test(array1, result) {
  let sum = 0;
  array1.forEach((a) => (sum += a));
  sum / array1.length > result ? console.log("점수가 올랐네요") : console.log("점수가 내렸네요");
}

test([10, 20, 30], 30);
