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
  const section = document.querySelector(".main__container");
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
    let maxIndex = data.length - 3;
  
    function renderCards() {
      wrapper.innerHTML = "";
      for (let i = 0; i < 3; i++) {
        const cardIndex = (index + i) % data.length;
        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = data[cardIndex].title;
        card.dataset.index = cardIndex;
        card.style.transform = `translateY(${i * 1}px)`;
        card.style.transition = "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
        wrapper.appendChild(card);
      }
      updateText(index);
    }
  
    function updateText(i) {
      title.textContent = data[i].text;
      text.textContent = data[i].text1;
    }
    
    function handleScroll(event) {
      if (!section.contains(event.target)) return;
      
      let delta = event.deltaY;
      let atEnd = index >= maxIndex && delta > 0;
      let atStart = index <= 0 && delta < 0;
      
      if (atEnd || atStart) {
        section.removeEventListener("wheel", handleScroll);
        return;
      }
      
      event.preventDefault();
      
      if (delta > 0 && index < maxIndex) {
        index++;
        wrapper.style.transform = "translateY(-120px)";
      } else if (delta < 0 && index > 0) {
        index--;
        wrapper.style.transform = "translateY(120px)";
      }
  
      setTimeout(() => {
        wrapper.style.transition = "none";
        wrapper.style.transform = "translateY(0)";
        renderCards();
      }, 500);
    }
    
    section.addEventListener("wheel", handleScroll, { passive: false });
    renderCards();
  });
