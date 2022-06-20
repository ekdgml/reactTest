// 템플릿 문자열 적용하기
var cart = { nae: '도서', price: 1500 };
var getTotal = function (cart) {
  return cart.price + '원';
};

var myCart = '장바구니에 ' + cart.name + '가 있습니다. 총 금액은 ' + getTotal(cart) + ' 입니다.';

var getTotal2 = function (cart) {
  return `${cart.price}원`;
};

var myCart2 = `장바구니에 ${cart.name}가 있습니다. 총 금액은 ${getTotal2(cart)} 입니다.`;
