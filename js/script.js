document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.header__nav');
  const activeBlock = document.querySelector('.left-column');
  const mainSection = document.querySelector('.main__section--services');
  const rightColumn = document.querySelector('.right-column');
  const originalTitle = document.getElementById('active-title');
  const originalText = document.getElementById('active-text');

  if (!burger || !menu) {
    console.error('Burger menu elements not found!');
    return;
  }

  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');

    if (burger.classList.contains('active')) {
      burger.innerHTML = '&#10006;';
    } else {
      burger.innerHTML = '&#9776;';
    }
  });

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !burger.contains(e.target)) {
      menu.classList.remove('active');
      burger.classList.remove('active');
      burger.innerHTML = '&#9776;';
    }
  });

  if (!activeBlock || !mainSection || !rightColumn || !originalTitle || !originalText) {
    console.error('Елемент не знайдено! Перевір HTML структуру.');
    return;
  }

  if (window.innerWidth <= 768) return;

  const floatingBlock = document.createElement('div');
  floatingBlock.className = 'floating-block';
  floatingBlock.style.width = '40%';
  floatingBlock.style.color = 'white';
  floatingBlock.style.visibility = 'hidden';
  floatingBlock.style.position = 'fixed';
  document.body.appendChild(floatingBlock);

  function handleScroll() {
    const rect = mainSection.getBoundingClientRect();
    const sectionHeight = mainSection.offsetHeight;
    const offsetTop = window.innerHeight / 2;

    if (rect.top <= offsetTop && rect.bottom - rect.height / 2 > 0) {
      floatingBlock.innerHTML = `<h2>${originalTitle.textContent}</h2><div>${originalText.textContent}</div>`;
      floatingBlock.style.top = offsetTop + 'px';
      floatingBlock.style.left = activeBlock.getBoundingClientRect().left + 'px';
      floatingBlock.style.visibility = 'visible';

      originalTitle.style.visibility = 'hidden';
      originalText.style.visibility = 'hidden';
      activeBlock.style.justifyContent = 'flex-end';
    } else {
      floatingBlock.style.visibility = 'hidden';
      originalTitle.style.visibility = 'visible';
      originalText.style.visibility = 'visible';
    }

    if (rect.top > offsetTop) {
      activeBlock.style.justifyContent = 'flex-start';
    }
  }

  window.addEventListener('scroll', handleScroll);
});


// document.addEventListener("DOMContentLoaded", function () {
//     const data = [
//         {title:"1.Lörem ipsum dorade boktig till geosylig postmodern.", text:"1.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1:"1.Lörem ipsum sosm niliga syntris."},
//         {title:"2.Lörem ipsum dorade boktig till geosylig postmodern.", text:"2.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1:"2.Lörem ipsum sosm niliga syntris."},
//         {title:"3.Lörem ipsum dorade boktig till geosylig postmodern.", text:"3.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1:"3.Lörem ipsum sosm niliga syntris."},
//         {title:"4.Lörem ipsum dorade boktig till geosylig postmodern.", text:"4.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1:"4.Lörem ipsum sosm niliga syntris."},
//         {title:"5.Lörem ipsum dorade boktig till geosylig postmodern.", text:"5.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1:"5.Lörem ipsum sosm niliga syntris."},
//         {title:"6.Lörem ipsum dorade boktig till geosylig postmodern.", text:"6.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1:"6.Lörem ipsum sosm niliga syntris."},
//         {title:"7.Lörem ipsum dorade boktig till geosylig postmodern.", text:"7.Lörem ipsum häsat promotiv sedan depatologi tenes.", text1:"7.Lörem ipsum sosm niliga syntris."}
//     ];

//     const wrapper = document.querySelector(".cards-wrapper");
//     const title = document.getElementById("active-title");
//     const text = document.getElementById("active-text");

//     let index = 0;

//     function renderCards() {
//         wrapper.innerHTML = "";

//         for (let i = 0; i < data.length; i++) {
//             const cardIndex = (index + i) % data.length;
//             const card = document.createElement("div");
//             card.classList.add("card");
//             card.textContent = data[cardIndex].title;
//             card.dataset.index = cardIndex;
//             wrapper.appendChild(card);
//         }
//         updateText(index);
//     }

//     function updateText(i) {
//         title.textContent = data[i].text;
//         text.textContent = data[i].text1;
//     }

//     wrapper.addEventListener("click", function (e) {
//         const card = e.target.closest(".card");
//         if (card) {
//             const i = card.dataset.index;
//             updateText(i);
//         }
//     });

//     function updateCards() {
//         wrapper.style.transition = "transform 0.5s ease-out";
//         wrapper.style.transform = "translateY(-50px)";

//         setTimeout(() => {
//             index = (index + 1) % data.length;
//             renderCards();
//             wrapper.style.transition = "none";
//             wrapper.style.transform = "translateY(0)";
//         }, 500);
//     }

//     renderCards();
//     setInterval(updateCards, 5000);
// });