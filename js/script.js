document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".header__nav");

  if (!burger || !menu) {
    console.error("Burger menu elements not found!");
    return;
  }

  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    burger.classList.toggle("active");

    if (burger.classList.contains("active")) {
      burger.innerHTML = "&#10006;";
    } else {
      burger.innerHTML = "&#9776;";
    }
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !burger.contains(e.target)) {
      menu.classList.remove("active");
      burger.classList.remove("active");
      burger.innerHTML = "&#9776;";
    }
  });
});
  
  
document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".main__section");
  const title = document.querySelector("#active-title");
  const text = document.querySelector("#active-text");
  const cardsWrapper = document.querySelector(".cards-wrapper");
  const cards = document.querySelectorAll(".card");
  
  const data = [
    { title: "1.Lörem ipsum dorade boktig till geosylig postmodern.", text: "1.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1: "1.Lörem ipsum sosm niliga syntris." },
    { title: "2.Lörem ipsum dorade boktig till geosylig postmodern.", text: "2.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1: "2.Lörem ipsum sosm niliga syntris." },
    { title: "3.Lörem ipsum dorade boktig till geosylig postmodern.", text: "3.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1: "3.Lörem ipsum sosm niliga syntris." },
    { title: "4.Lörem ipsum dorade boktig till geosylig postmodern.", text: "4.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1: "4.Lörem ipsum sosm niliga syntris." },
    { title: "5.Lörem ipsum dorade boktig till geosylig postmodern.", text: "5.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1: "5.Lörem ipsum sosm niliga syntris." },
    { title: "6.Lörem ipsum dorade boktig till geosylig postmodern.", text: "6.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1: "6.Lörem ipsum sosm niliga syntris." },
    { title: "7.Lörem ipsum dorade boktig till geosylig postmodern.", text: "7.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1: "7.Lörem ipsum sosm niliga syntris." }
  ];

  let currentIndex = 0;

  function updateLeftColumn(index) {
    title.innerText = data[index].text;
    text.innerText = data[index].text1;
  }

  function handleScroll() {
    const sectionRect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const startSticky = windowHeight / 3;
    const endSticky = sectionRect.height - windowHeight / 3;
    
    if (sectionRect.top <= startSticky && sectionRect.bottom >= endSticky) {
      section.classList.add("sticky");
    } else {
      section.classList.remove("sticky");
    }
    
    let visibleIndex = Math.floor((windowHeight / 3 - sectionRect.top) / 100);
    visibleIndex = Math.max(0, Math.min(visibleIndex, data.length - 1));
    
    if (visibleIndex !== currentIndex) {
      currentIndex = visibleIndex;
      updateLeftColumn(currentIndex);
    }
  }

  window.addEventListener("scroll", handleScroll);
  updateLeftColumn(0);
});
