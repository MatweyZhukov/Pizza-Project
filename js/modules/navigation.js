const Navigation = () => {
  const navigation = document.querySelector(".navigation");

  setTimeout(() => {
    navigation.style.cssText = `
	 	right: 50;
	 `;
  }, 3000);
};

export default Navigation;
