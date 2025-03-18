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
    const data = [
        {title:"1.Lörem ipsum dorade boktig till geosylig postmodern.", text:"1.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1:"1.Lörem ipsum sosm niliga syntris."},
        {title:"2.Lörem ipsum dorade boktig till geosylig postmodern.", text:"2.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1:"2.Lörem ipsum sosm niliga syntris."},
        {title:"3.Lörem ipsum dorade boktig till geosylig postmodern.", text:"3.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1:"3.Lörem ipsum sosm niliga syntris."},
        {title:"4.Lörem ipsum dorade boktig till geosylig postmodern.", text:"4.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1:"4.Lörem ipsum sosm niliga syntris."},
        {title:"5.Lörem ipsum dorade boktig till geosylig postmodern.", text:"5.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1:"5.Lörem ipsum sosm niliga syntris."},
        {title:"6.Lörem ipsum dorade boktig till geosylig postmodern.", text:"6.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1:"6.Lörem ipsum sosm niliga syntris."},
        {title:"7.Lörem ipsum dorade boktig till geosylig postmodern.", text:"7.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1:"7.Lörem ipsum sosm niliga syntris."}
    ];

    const wrapper = document.querySelector(".cards-wrapper");
    const title = document.getElementById("active-title");
    const text = document.getElementById("active-text");

    let index = 0;

    function renderCards() {
        wrapper.innerHTML = "";

        for (let i = 0; i < data.length; i++) {
            const cardIndex = (index + i) % data.length;
            const card = document.createElement("div");
            card.classList.add("card");
            card.textContent = data[cardIndex].title;
            card.dataset.index = cardIndex;
            wrapper.appendChild(card);
        }
        updateText(index);
    }

    function updateText(i) {
        title.textContent = data[i].text;
        text.textContent = data[i].text1;
    }

    wrapper.addEventListener("click", function (e) {
        const card = e.target.closest(".card");
        if (card) {
            const i = card.dataset.index;
            updateText(i);
        }
    });

    function updateCards() {
        wrapper.style.transition = "transform 0.5s ease-out";
        wrapper.style.transform = "translateY(-50px)";

        setTimeout(() => {
            index = (index + 1) % data.length;
            renderCards();
            wrapper.style.transition = "none";
            wrapper.style.transform = "translateY(0)";
        }, 500);
    }

    renderCards();
    setInterval(updateCards, 5000);
});