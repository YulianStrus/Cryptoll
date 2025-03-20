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
  
  
document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".main__section--services");
  const wrapper = document.querySelector(".cards-wrapper");
  const title = document.getElementById("active-title");
  const text = document.getElementById("active-text");
    const data = [
        {title:"1.Lörem ipsum dorade boktig till geosylig postmodern.", text:"1.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1:"1.Lörem ipsum sosm niliga syntris."},
        {title:"2.Lörem ipsum dorade boktig till geosylig postmodern.", text:"2.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1:"2.Lörem ipsum sosm niliga syntris."},
        {title:"3.Lörem ipsum dorade boktig till geosylig postmodern.", text:"3.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1:"3.Lörem ipsum sosm niliga syntris."},
        {title:"4.Lörem ipsum dorade boktig till geosylig postmodern.", text:"4.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1:"4.Lörem ipsum sosm niliga syntris."},
        {title:"5.Lörem ipsum dorade boktig till geosylig postmodern.", text:"5.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1:"5.Lörem ipsum sosm niliga syntris."},
        {title:"6.Lörem ipsum dorade boktig till geosylig postmodern.", text:"6.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1:"6.Lörem ipsum sosm niliga syntris."},
        {title:"7.Lörem ipsum dorade boktig till geosylig postmodern.", text:"7.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1:"7.Lörem ipsum sosm niliga syntris."}
    ];

    let index = 0;
    let isScrollingCards = false;
    let startScrollPos = 0;
    
    function renderCards() {
        wrapper.innerHTML = "";
        for (let i = 0; i < 3; i++) {
            const cardIndex = (index + i) % data.length;
            if (cardIndex < data.length) {
                const card = document.createElement("div");
                card.classList.add("card");
                card.textContent = data[cardIndex].title;
                card.dataset.index = cardIndex;
                wrapper.appendChild(card);
            }
        }
        updateText(index);
    }

    function updateText(i) {
        title.textContent = data[i].text;
        text.textContent = data[i].text1;
    }
    
    function handleScroll(event) {
        if (!isScrollingCards) {
            if (window.scrollY >= section.offsetTop - 50) {
                isScrollingCards = true;
                startScrollPos = window.scrollY;
            } else {
                return;
            }
        }

        event.preventDefault();
        let delta = event.deltaY;
        if (delta > 0) {
            index = (index + 1) % data.length;
        } else {
            index = (index - 1 + data.length) % data.length;
        }
        renderCards();

        if (index === data.length - 3) {
            isScrollingCards = false;
            window.removeEventListener("wheel", handleScroll);
        }
    }
    
    window.addEventListener("wheel", handleScroll, { passive: false });
    renderCards();
});
