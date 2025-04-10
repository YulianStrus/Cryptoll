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
    {
      title: "1.Lörem ipsum dorade boktig till geosylig postmodern.",
      text: "1.Lörem ipsum häsat promotiv sedan depatologi tenes.",
      text1: "1.Lörem ipsum sosm niliga syntris.",
    },
    {
      title: "2.Lörem ipsum dorade boktig till geosylig postmodern.",
      text: "2.Lörem ipsum häsat promotiv sedan depatologi tenes.",
      text1: "2.Lörem ipsum sosm niliga syntris.",
    },
    {
      title: "3.Lörem ipsum dorade boktig till geosylig postmodern.",
      text: "3.Lörem ipsum häsat promotiv sedan depatologi tenes.",
      text1: "3.Lörem ipsum sosm niliga syntris.",
    },
    {
      title: "4.Lörem ipsum dorade boktig till geosylig postmodern.",
      text: "4.Lörem ipsum häsat promotiv sedan depatologi tenes.",
      text1: "4.Lörem ipsum sosm niliga syntris.",
    },
    {
      title: "5.Lörem ipsum dorade boktig till geosylig postmodern.",
      text: "5.Lörem ipsum häsat promotiv sedan depatologi tenes.",
      text1: "5.Lörem ipsum sosm niliga syntris.",
    },
    {
      title: "6.Lörem ipsum dorade boktig till geosylig postmodern.",
      text: "6.Lörem ipsum häsat promotiv sedan depatologi tenes.",
      text1: "6.Lörem ipsum sosm niliga syntris.",
    },
    {
      title: "7.Lörem ipsum dorade boktig till geosylig postmodern.",
      text: "7.Lörem ipsum häsat promotiv sedan depatologi tenes.",
      text1: "7.Lörem ipsum sosm niliga syntris.",
    },
  ];

  let currentIndex = 0;
  let autoScrollInterval = null;
  let hasScrolledToEnd = false;

  function startAutoScroll() {
    if (autoScrollInterval || hasScrolledToEnd) return;

    autoScrollInterval = setInterval(() => {
      const scrollStep = 1;
      const atBottom =
        cardsWrapper.scrollTop + cardsWrapper.clientHeight >=
        cardsWrapper.scrollHeight;

      if (!atBottom) {
        cardsWrapper.scrollBy(0, scrollStep);
      } else {
        clearInterval(autoScrollInterval);
        autoScrollInterval = null;
        hasScrolledToEnd = true;
      }
    }, 2000);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAutoScroll();
        }
      });
    },
    { threshold: 0.6 }
  );

  if (section) {
    observer.observe(section);
  }

  function updateLeftColumn(index) {
    title.innerText = data[index].text;
    text.innerText = data[index].text1;
  }

  function handleScroll() {
    const scrollTop = cardsWrapper.scrollTop;
    const wrapperHeight = cardsWrapper.clientHeight;
    const totalHeight = cardsWrapper.scrollHeight;

    let visibleIndex = Math.floor(
      (scrollTop / (totalHeight - wrapperHeight)) * (data.length - 1)
    );
    visibleIndex = Math.max(0, Math.min(visibleIndex, data.length - 1));

    if (visibleIndex !== currentIndex) {
      currentIndex = visibleIndex;
      updateLeftColumn(currentIndex);
    }
  }

  cardsWrapper.addEventListener("scroll", handleScroll); // Додаємо слухач події скролу
  updateLeftColumn(0);
});

document.addEventListener("DOMContentLoaded", function () {
  const moduleHeaders = document.querySelectorAll(".module-header");
  const nestedHeaders = document.querySelectorAll(".nested-header");

  moduleHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    });
  });

  nestedHeaders.forEach((header) => {
    const content = header.nextElementSibling;
    const arrow = header.querySelector(".vector");

    let closeButton = content.querySelector(".close-button");
    if (!closeButton) {
      closeButton = document.createElement("button");
      closeButton.classList.add("close-button");
      closeButton.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.2 3.80682C12.1384 3.74501 12.0651 3.69598 11.9844 3.66253C11.9038 3.62907 11.8173 3.61185 11.73 3.61185C11.6427 3.61185 11.5563 3.62907 11.4756 3.66253C11.395 3.69598 11.3217 3.74501 11.26 3.80682L8.00003 7.06015L4.74003 3.80015C4.67831 3.73843 4.60503 3.68947 4.52439 3.65606C4.44375 3.62266 4.35731 3.60547 4.27003 3.60547C4.18274 3.60547 4.09631 3.62266 4.01566 3.65606C3.93502 3.68947 3.86175 3.73843 3.80003 3.80015C3.73831 3.86187 3.68935 3.93514 3.65594 4.01579C3.62254 4.09643 3.60535 4.18286 3.60535 4.27015C3.60535 4.35744 3.62254 4.44387 3.65594 4.52451C3.68935 4.60515 3.73831 4.67843 3.80003 4.74015L7.06003 8.00015L3.80003 11.2601C3.73831 11.3219 3.68935 11.3951 3.65594 11.4758C3.62254 11.5564 3.60535 11.6429 3.60535 11.7301C3.60535 11.8174 3.62254 11.9039 3.65594 11.9845C3.68935 12.0652 3.73831 12.1384 3.80003 12.2001C3.86175 12.2619 3.93502 12.3108 4.01566 12.3442C4.09631 12.3776 4.18274 12.3948 4.27003 12.3948C4.35731 12.3948 4.44375 12.3776 4.52439 12.3442C4.60503 12.3108 4.67831 12.2619 4.74003 12.2001L8.00003 8.94015L11.26 12.2001C11.3217 12.2619 11.395 12.3108 11.4757 12.3442C11.5563 12.3776 11.6427 12.3948 11.73 12.3948C11.8173 12.3948 11.9037 12.3776 11.9844 12.3442C12.065 12.3108 12.1383 12.2619 12.2 12.2001C12.2617 12.1384 12.3107 12.0652 12.3441 11.9845C12.3775 11.9039 12.3947 11.8174 12.3947 11.7301C12.3947 11.6429 12.3775 11.5564 12.3441 11.4758C12.3107 11.3951 12.2617 11.3219 12.2 11.2601L8.94003 8.00015L12.2 4.74015C12.4534 4.48682 12.4534 4.06015 12.2 3.80682Z" fill="white" />
        </svg>
      `;
      content.appendChild(closeButton);
      closeButton.addEventListener("click", function () {
        content.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
      });
    }

    header.addEventListener("click", function () {
      nestedHeaders.forEach((otherHeader) => {
        if (otherHeader !== header) {
          const otherContent = otherHeader.nextElementSibling;
          const otherArrow = otherHeader.querySelector(".vector");
          otherContent.style.display = "none";
          otherArrow.style.transform = "rotate(0deg)";
        }
      });

      if (content.style.display === "block") {
        content.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
      } else {
        content.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const data = [
    {
      title: "Lorem ipsum dolor sit amet",
      imageUrl: "./img/image1.webp",
      header: "Lorem ipsum dolor sit amet",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris commodo consequat.",
      content2:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.",
      footer: "Lorem ipsum",
    },
    {
      title: "Lorem ipsum dolor",
      imageUrl: "./img/image2.webp",
      header: "Lorem ipsum dolor sit amet",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris commodo consequat.",
      content2:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.",
      footer: "Lorem ipsum",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      imageUrl: "./img/image5.webp",
      header: "Lorem ipsum dolor sit amet",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris commodo consequat.",
      content2:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.",
      footer: "Lorem ipsum",
    },
    {
      title: "Lorem ipsum dolor",
      imageUrl: "./img/image3.webp",
      header: "Lorem ipsum dolor sit amet",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris commodo consequat.",
      content2:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.",
      footer: "Lorem ipsum",
    },
    {
      title: "Lorem ipsum ",
      imageUrl: "./img/image6.webp",
      header: "Lorem ipsum dolor sit amet",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris commodo consequat.",
      content2:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.",
      footer: "Lorem ipsum",
    },
    {
      title: "Lorem ipsum dolor sit",
      imageUrl: "./img/image4.webp",
      header: "Lorem ipsum dolor sit amet",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris commodo consequat.",
      content2:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.",
      footer: "Lorem ipsum",
    },
  ];

  const buttonsContainer = document.getElementById("accordion-buttons");
  const contentContainer = document.getElementById("accordion-content");

  function renderContent(index) {
    const item = data[index];
    contentContainer.innerHTML = `
      <h3>${item.header}</h3>
      <p>${item.content1}</p>
      <p>${item.content2}</p>
      <footer>${item.footer}</footer>
    `;
  }

  data.forEach((item, index) => {
    const btn = document.createElement("button");
    btn.className = "accordion-button";
    btn.innerHTML = `    
      <div class="image-frame">
        <div class="image-frame__wrapper">
          <img src="${item.imageUrl}" alt="${item.title}" class="image-frame__image">
        </div>
      </div>
      <span>${item.title}</span>
    `;
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".accordion-button")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderContent(index);
    });
    if (index === 0) {
      btn.classList.add("active");
      renderContent(0);
    }
    buttonsContainer.appendChild(btn);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".swiper-slide");
  if (slides.length > 0) {
    let activeSlide = slides[Math.floor(slides.length / 2)];
    activeSlide.classList.add("hovered");

    slides.forEach((slide) => {
      slide.addEventListener("mouseenter", () => {
        activeSlide.classList.remove("hovered");
        slide.classList.add("hovered");
      });

      slide.addEventListener("mouseleave", () => {
        slide.classList.remove("hovered");
        activeSlide.classList.add("hovered");
      });
    });
  }
});
