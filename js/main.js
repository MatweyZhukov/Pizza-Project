"use strict";

//Components
import Cart from "./modules/cart";
import Form from "./modules/form";
import Modal from "./modules/modal";
import Products from "./modules/products";
import Slider from "./modules/slider";
import Tabs from "./modules/tabs";

//EventListener
window.addEventListener("DOMContentLoaded", () => {
  //Functions/Modules
  Cart();
  Form();
  Modal();
  Products();
  Slider();
  Tabs();
});
