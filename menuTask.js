function menuTask() {
  const menu = document.querySelector(".navContent");
  const btn = document.querySelector(".navbar");
  let menuOpen = false;

  //function to open menu
  function openMenu() {
    gsap.to(menu, {
      x: 0,
      duration: 0.6,
      ease: "power3.out",
    });
    menuOpen = true;

    //start listening for outside clicks
    document.addEventListener("click", handleOutsideClicks);
  }

  //function to close menu
  function closeMenu() {
    gsap.to(menu, {
      x: "-120%",
      duration: 0.6,
      ease: "power3.out",
    });
    menuOpen = false;

    //stop listening for outside clicks
    document.removeEventListener("click", handleOutsideClicks);
  }

  // toggle with hamburger button
  btn.addEventListener("click", (e) => {
    //prevent immediate outside click firing
    e.stopPropagation();

    menuOpen ? closeMenu() : openMenu();
  });

  // handle outside clicks
  function handleOutsideClicks(e) {
    //if click is not inside menu or hamburger button
    if (!menu.contains(e.target) && e.target !== btn) {
      closeMenu();
    }
  }
}
menuTask();
