// Elements
const btnOpenCart = document.querySelector("[data-cart]"),
  windowCart = document.querySelector(".cart"),
  btnClose = document.querySelectorAll("[data-close]"),
  cartWrapper = document.querySelector(".cart_wrapper"),
  clear = document.querySelector(".clear");

//Function to open cart
function openCart() {
  windowCart.style.left = 30 + "px";
  windowCart.style.opacity = 1;
}

//Function to close cart
export function closeCart() {
  windowCart.style.left = -570 + "px";
  windowCart.style.opacity = 0;
}

const Cart = () => {
  //Changing status of cart
  function toggleCartStatus() {
    const cartWrapper = document.querySelector(".cart_wrapper"),
      titlePrice = document.querySelector("[data-cart-empty]"),
      blockPrice = document.querySelector("[data-cart-full]");

    if (cartWrapper.children.length > 0) {
      titlePrice.style.display = "none";
      blockPrice.style.display = "flex";
      clear.style.display = "block";
    } else {
      titlePrice.style.display = "block";
      blockPrice.style.display = "none";
      clear.style.display = "none";
      closeCart();
    }
  }

  //Calculating total price of cart
  function calcCartPrice() {
    const itemsCart = document.querySelectorAll(".product");

    let counterTotalPrice = document.querySelector(".current_price"),
      totalPrice = 0;

    itemsCart.forEach((item) => {
      const amountEl = item.querySelector("[data-counter]").innerText,
        priceEl = item.querySelector("[data-price]").innerText,
        currentPrice = +amountEl * +priceEl;

      totalPrice += currentPrice;
    });

    counterTotalPrice.innerText = Number(totalPrice).toFixed(2);
  }

  //Adding product to cart
  const addToCart = (e) => {
    if (e.target.hasAttribute("data-add")) {
      const card = e.target.closest(".tiles");

      const tileInfo = {
        id: card.dataset.id,
        imgSrc: card.querySelector(".tile_img").getAttribute("src"),
        title: card.querySelector(".tile_text").innerText,
        price: card.querySelector("[data-price]").innerText,
      };

      const { id, imgSrc, title, price } = tileInfo;

      const itemInCart = cartWrapper.querySelector(`[data-id='${id}']`);

      if (itemInCart) {
        const counterElement = itemInCart.querySelector("[data-counter]");
        counterElement.innerText < 10 ? counterElement.innerText++ : null;
      } else {
        let cardItemHtml = `
				<div data-id="${id}" class="product">
					<img class="product_img" src="${imgSrc}" alt="product" class="product_img">
					<div class="block-name_btns">
						<p class="product_name">${title}</p>
					<div class="block-btns_counter">
						<button data-action="minus" class="current_btns">-</button>
						<div data-counter class="product_counter">1</div>
						<button data-action="plus" class="current_btns">+</button>
					</div>
					</div>
						<div class="block-cart_price">
						<p class="price"><span data-price>${price}</span>$</p>
					</div>
				</div>
			`;

        cartWrapper.insertAdjacentHTML("beforeend", cardItemHtml);
        document.querySelectorAll(".product").forEach((item) => {
          const add = setTimeout(() => {
            item.style.opacity = 1;
            clearTimeout(add);
          });
        });
        openCart();
      }
      toggleCartStatus();
      calcCartPrice();
    }
  };

  //Removing product from cart
  const removeFromCart = (e) => {
    let counter;

    if (
      e.target.dataset.action === "plus" ||
      e.target.dataset.action === "minus"
    ) {
      const counterWrapper = e.target.closest(".block-btns_counter");
      counter = counterWrapper.querySelector("[data-counter]");
    }

    if (e.target.dataset.action === "plus" && counter.innerText < 10) {
      counter.innerText = ++counter.innerText;
      calcCartPrice();
    }

    if (e.target.dataset.action === "minus") {
      counter.innerText = --counter.innerText;

      if (e.target.closest(".product") && parseInt(counter.innerText) === 0) {
        e.target.closest(".product").style.opacity = 0;
        const remove = setTimeout(() => {
          e.target.closest(".product").remove();
          toggleCartStatus();
          clearTimeout(remove);
        }, 300);
      }
      calcCartPrice();
    }

    if (e.target === clear) {
      toggleCartStatus();
    }
  };

  //EventListeners
  btnClose.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      closeCart();
    });
  });

  btnOpenCart.addEventListener("click", (e) => {
    e.preventDefault();
    openCart();
  });

  clear.addEventListener("click", () => {
    document.querySelectorAll(".product").forEach((item) => item.remove());
  });

  window.addEventListener("click", (e) => {
    removeFromCart(e);
    addToCart(e);
  });
};

export default Cart;
