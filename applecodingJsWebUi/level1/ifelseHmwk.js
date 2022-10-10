// q1. 철수는 3의 배수에서 박수를 치는 게임을 하고 있다.
function q1(input) {
  if (input % 3 === 0) console.log("박수");
  else {
    console.log("통과");
  }
}
q1(6);
q1(12);
q1(11);

// q2. 3의 배수에서는 박수 9의 배수에서는 박수 두번
function q2(input) {
  if (input % 3 === 0 && input % 9) console.log("박수 박수");
  else if (input % 3 === 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}
q2(6);
q2(9);
q2(11);

//q3. 시험 접수 입력 시 합격인지 불합격인지
//1과목 2과목 100점 만점, 과목의 합이 120점 이상이면 합격, 한 과목이 40점 미만이면 과락 불합
function q2(input1, input2) {
  if (input1 < 40 || input2 < 40) {
    console.log("불합이요");
  } else if (input1 + input2 >= 120) {
    console.log("합격이요");
  } else {
    console.log("불합이요");
  }
}
