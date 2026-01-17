
let total = 0;

function addToCart(price) {
  total += price;
}

function showCart() {
  alert("Общая сумма: " + total + " ₸");
}

function buy() {
  if (total === 0) {
    alert("Корзина пустая");
  } else {
    alert("Сіз товарды успешно сатып алдыңыз");
    location.reload();
  }
}
