const goods = [
  { title: "Shirt", price: 100 },
  { title: "Socks", price: 120 },
  { title: "Jacket", price: 150 },
  { title: "Shoes", price: 180 },
  { title: "Blues", price: 280 },
  { title: "T-shirt", price: 39.99 },
  { title: "Cardigan", price: 200 },
  { title: "Kimono", price: 111 },
  { title: "Cardigan", price: 200 },
  { title: "Suit", price: 340 }
];

const renderGoodsItem = (title, price) => {
  return `<div class="goods-item"><div class="goods-item-in">
      <img class="goods-item-img" src="NoImage.png"/>
      <div class="goods-item-name">${title}</div>
      <div class="goods-item-desc">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div class="goods-item-price">${price}<div class="goods-item-price-end">‎руб./шт.</div></div>
      <div class="goods-item-addbtn-container"><button>Добавить</button></div>
      </div></div>`;
};

const renderGoodsList = list => {
  let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
  /*
    document.querySelector(".goods-list").innerHTML = goodsList;
    При таком варианте в браузере отображаются запятые после каждого "goods-item".
    Это происходит из-за того, что goodsList это массив, который по умолчанию преобразуется в строку с разделением элементов запятой.
    Исправить это можно, преобразовав массив с строку без разделения элементов запятыми с помощью функции join
  */
  document.querySelector(".goods-list").innerHTML = goodsList.join("");
};

renderGoodsList(goods);
