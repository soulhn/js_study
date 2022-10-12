//q1 함수에 분과 초를 차례로 파라미터로 입력하면 ms단위로 바꿔서 뱉어주는 함수.
function solution1(min, sec) {
  let minTosec = 60 * min;
  return (minTosec + sec) * 1000;
}

//q2 가격을 파라미터로 입력시 10% 할인, 첫 구매 여부 true 일시 1.5 달러 추가 할인, 가격으로 10.3 같은 값 처리
function solution2(price, firstPurchase) {
  let result = parseFloat(price * 0.9).toFixed(1);
  if (firstPurchase) result = result - 1.5;
  return result;
}
