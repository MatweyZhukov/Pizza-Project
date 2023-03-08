const Tabs = () => {
	const tabs = document.querySelectorAll('.text__options-tabs'),
		pictureTabs = document.querySelectorAll('.pictures_tabs'),
		tabsParent = document.querySelector('.tabs-parent');

	function hideTabs() {
		pictureTabs.forEach(item => item.style.display = 'none');
		tabs.forEach(item => item.classList.remove('text__options_tabs-active'));
	}

	function showTabs(i = 0) {
		pictureTabs[i].style.display = 'block';
		tabs[i].classList.add('text__options_tabs-active');
	}

	tabsParent.addEventListener('click', (e) => {

		const target = e.target;

		if (target && target.classList.contains('text__options-tabs')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabs();
					showTabs(i);
				}
			});
		}
	});

	hideTabs();
	showTabs();
};

export default Tabs;