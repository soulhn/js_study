for (let i = 0; i < 3; i++) {
  $(".tab-button")
    .eq(i)
    .on("click", function () {
      $(".tab-button").removeClass("orange");
      $(".tab-button").eq(i).addClass("orange");
      $(".tab-content").removeClass("show");
      $(".tab-content").eq(i).addClass("show");
    });
}

var car = ["소나타", 50000, "white"];
var car2 = { name: "소나타", price: [50000, 30000, 40000] };

document.querySelector("#productName").innerHTML = car2.name;
document.querySelector("#productPrice").innerHTML = car2.price;
