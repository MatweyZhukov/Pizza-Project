'use strict';

import Cart from './modules/cart';
import Form from './modules/form';
import Modal from './modules/modal';
import Products from './modules/products';
import Slider from './modules/slider';
import Tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
	Cart();
	Form();
	Modal();
	Products();
	Slider();
	Tabs();
});