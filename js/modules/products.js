//Importing function for getting resources
import { getResource } from "../services/services";

const Products = () => {
  //Creating a class "Product" for getting products
  class Product {
    constructor(src, alt, name, price, id, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.name = name;
      this.price = price;
      this.id = id;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
    }

    render() {
      const element = document.createElement("div");

      element.innerHTML = `
			<div data-id="${this.id}" class="tiles">
				<img class="tile_img" src="${this.src}" alt="${this.alt}">
				<p class="tile_text">${this.name}</p>
				<p class="price"><span data-price>${this.price}</span>$</p>
				<button data-add class="tile_add">Add to cart</button>
			</div>
		`;

      this.parent.append(element);
    }
  }

  //Getting resources form the server
  getResource("http://localhost:3000/products").then((data) => {
    data.forEach(({ img, altimg, name, price, id }) => {
      new Product(img, altimg, name, price, id, ".block_tiles").render();
    });
  });
};

export default Products;
