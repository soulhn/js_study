//q1
let 나이 = 20;
const 지역 = "구미";

//q2
console.log("kim");
console.log(0);

//q3
var 예금액 = 60000;
var 미래예금액 = 0;

function 계산(금액) {
  if (금액 >= 50000) {
    금액 = 금액 * 1.2 * 1.2;
  } else {
    금액 = 금액 * 1.15 * 1.15;
  }
}

//q4
var first = 360;
function coffee(input) {
  let first = (input / 3) * 2;
  let second = (first / 3) * 2;
  console.log(input + first + second);
}

//q5 이성계가 태어난 연도 맞추기 3회 안에
let count = 0;

document.querySelector("#send-answer").addEventListener("click", function () {
  count += 1;
  let input = document.querySelector("#answer").value;
  if (input == "1335") {
    alert("성공");
  } else if (count >= 3 && input != "1335") {
    alert("멍청아");
  }
});
