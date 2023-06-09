const Navigation = () => {
  //EventListener
  window.addEventListener("scroll", () => {
    //Navigator element and scrollTop
    const navigation = document.querySelector(".navigation"),
      scrollTop = document.body.scrollTop;
    console.log(scrollTop);

    //Function to show navigation
    function showNavigation() {
      navigation.style.right = 50;
    }

    //Function to hide navigation
    function hideNavigation() {
      navigation.style.right = -80;
    }

    //Condition for navigation
    scrollTop >= 2024.800048828125 ? hideNavigation() : showNavigation();
  });
};

export default Navigation;
