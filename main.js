var audio = document.getElementById("audioPlayer"),
  loader = document.getElementById("preloader");
function settingtoggle() {
  document
    .getElementById("setting-container")
    .classList.toggle("settingactivate"),
    document
      .getElementById("visualmodetogglebuttoncontainer")
      .classList.toggle("visualmodeshow"),
    document
      .getElementById("soundtogglebuttoncontainer")
      .classList.toggle("soundmodeshow");
}
function playpause() {
  !1 == document.getElementById("switchforsound").checked
    ? audio.pause()
    : audio.play();
}
function visualmode() {
  document.body.classList.toggle("light-mode"),
    document.querySelectorAll(".needtobeinvert").forEach(function (e) {
      e.classList.toggle("invertapplied");
    });
}
window.addEventListener("load", function () {
  (loader.style.display = "none"),
    document.querySelector(".hey").classList.add("popup");
});
let emptyArea = document.getElementById("emptyarea"),
  mobileTogglemenu = document.getElementById("mobiletogglemenu");
function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling"),
    document
      .getElementById("mobiletogglemenu")
      .classList.toggle("show-toggle-menu"),
    document
      .getElementById("burger-bar1")
      .classList.toggle("hamburger-animation1"),
    document
      .getElementById("burger-bar2")
      .classList.toggle("hamburger-animation2"),
    document
      .getElementById("burger-bar3")
      .classList.toggle("hamburger-animation3");
}
class ModernSlider {
  constructor() {
    this.slides = [
      {
        title: "Books Store",
        image: "src/webp/bookstore.png",
        github: "https://github.com/niteshverma01/Books-store",
        live: "https://github.com/niteshverma01/Books-store",
      },
      {
        title: "WanderLust",
        image: "src/webp/wanderlust.png",
        github: "https://github.com/niteshverma01/My-wanderlust",
        live: "https://my-wanderlust-h694.onrender.com/listings",
      },
      {
        title: "Tazza App",
        image: "src/webp/tazza.png",
        github: "https://github.com/niteshverma01/tazza",
        live: "https://niteshverma01.github.io/tazza/",
      },
      {
        title: "My Clinic",
        image: "src/webp/clinic.png",
        github: "https://github.com/niteshverma01/clinic-project",
        live: "https://niteshverma01.github.io/clinic-project/",
      },
      {
        title: "Personal Portfolio",
        image: "src/webp/portfolio.png",
        github: "https://github.com/niteshverma01/Myportfolio",
        live: "https://niteshverma01.github.io/Myportfolio/",
      },
      {
        title: "Netflix",
        image: "src/webp/netflix.png",
        github: "https://github.com/niteshverma01/Netflix-clone",
        live: "https://niteshverma01.github.io/Netflix-clone/",
      },
      {
        title: "Lazarev",
        image: "src/webp/lazarev.png",
        github: "https://github.com/niteshverma01/Lazarev.",
        live: "https://niteshverma01.github.io/Lazarev./",
      },
      {
        title: "Weather App",
        image: "src/webp/weather.png",
        github: "https://github.com/niteshverma01/weather-App",
        live: "https://weather-app-mauve-gamma-98.vercel.app/",
      },
    ];

    this.currentIndex = 0;
    this.isAnimating = false;
    this.autoplayInterval = null;
    this.init();
  }

  init() {
    this.slider = document.querySelector(".slider");
    this.progressBar = document.querySelector(".progress-bar");
    this.createSlides();
    this.createProgressDots();
    this.setupEventListeners();
    this.updateSlides();
    this.startAutoplay();
    this. setupScrollListener();
    // this.setupScrollListener();
  }

  createSlides() {
    this.slides.forEach((slide, index) => {
      const slideEl = document.createElement("div");
      slideEl.className = `slide ${index === 0 ? "active" : "hidden"}`;
      slideEl.innerHTML = `
              <div class="slide-content" style="background-image: url(${slide.image})">
                  <div class="slide-overlay">
                      <h2 class="slide-title">${slide.title}</h2>
                      <div class="slide-buttons">
                          <a href="${slide.github}" class="slide-btn">
                              <i class="fab fa-github"></i>
                              View Source
                          </a>
                          <a href="${slide.live}" class="slide-btn">
                              <i class="fas fa-external-link-alt"></i>
                              Live Demo
                          </a>
                      </div>
                  </div>
              </div>
          `;
      this.slider.appendChild(slideEl);
    });
  }

  createProgressDots() {
    this.slides.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.className = `progress-dot ${index === 0 ? "active" : ""}`;
      dot.addEventListener("click", () => this.goToSlide(index));
      this.progressBar.appendChild(dot);
    });
  }

  setupEventListeners() {
    document
      .querySelector(".prev-btn")
      .addEventListener("click", () => this.prevSlide());
    document
      .querySelector(".next-btn")
      .addEventListener("click", () => this.nextSlide());

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.prevSlide();
      if (e.key === "ArrowRight") this.nextSlide();
    });

    let touchStartX = 0;
    this.slider.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
      this.stopAutoplay();
    });

    this.slider.addEventListener("touchend", (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchEndX - touchStartX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) this.prevSlide();
        else this.nextSlide();
      }

      this.startAutoplay();
    });

    this.slider.addEventListener("mouseenter", () => this.stopAutoplay());
    this.slider.addEventListener("mouseleave", () => this.startAutoplay());
  }












 setupScrollListener() {
    let lastScrollTime = 0;
    const scrollThreshold = 500;

    this.slider.addEventListener('wheel', (e) => {
        const currentTime = new Date().getTime();

        if (currentTime - lastScrollTime > scrollThreshold) {
            if (e.deltaY > 0) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
            lastScrollTime = currentTime;
        }

        e.preventDefault();
    }, { passive: false });
}

// Add this line in the init() method:




  updateSlides() {
    const slides = [...this.slider.children];
    const totalSlides = slides.length;

    slides.forEach((slide, index) => {
      slide.className = "slide";
      if (index === this.currentIndex) {
        slide.classList.add("active");
      } else if (index === (this.currentIndex + 1) % totalSlides) {
        slide.classList.add("next");
      } else if (
        index ===
        (this.currentIndex - 1 + totalSlides) % totalSlides
      ) {
        slide.classList.add("prev");
      } else {
        slide.classList.add("hidden");
      }
    });

    const dots = [...this.progressBar.children];
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentIndex);
    });
  }

  goToSlide(index) {
    if (this.isAnimating || index === this.currentIndex) return;
    this.isAnimating = true;
    this.currentIndex = index;
    this.updateSlides();
    setTimeout(() => (this.isAnimating = false), 800);
  }

  nextSlide() {
    this.goToSlide((this.currentIndex + 1) % this.slides.length);
  }

  prevSlide() {
    this.goToSlide(
      (this.currentIndex - 1 + this.slides.length) % this.slides.length
    );
  }

  startAutoplay() {
    this.stopAutoplay();
    this.autoplayInterval = setInterval(() => this.nextSlide(), 1500);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ModernSlider();
});
function hidemenubyli() {
  document.body.classList.toggle("stopscrolling"),
    document
      .getElementById("mobiletogglemenu")
      .classList.remove("show-toggle-menu"),
    document
      .getElementById("burger-bar1")
      .classList.remove("hamburger-animation1"),
    document
      .getElementById("burger-bar2")
      .classList.remove("hamburger-animation2"),
    document
      .getElementById("burger-bar3")
      .classList.remove("hamburger-animation3");
}
const sections = document.querySelectorAll("section"),
  navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li"),
  mobilenavLi = document.querySelectorAll(
    ".mobiletogglemenu .mobile-navbar-tabs-ul li"
  );
window.addEventListener("scroll", () => {
  let e = "";
  sections.forEach((t) => {
    let o = t.offsetTop;
    t.clientHeight, pageYOffset >= o - 200 && (e = t.getAttribute("id"));
  }),
    mobilenavLi.forEach((t) => {
      t.classList.remove("activeThismobiletab"),
        t.classList.contains(e) && t.classList.add("activeThismobiletab");
    }),
    navLi.forEach((t) => {
      t.classList.remove("activeThistab"),
        t.classList.contains(e) && t.classList.add("activeThistab");
    });
}),
  console.log(
    "%c Designed and Developed by nitesh verma ",
    "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;"
  );

let mybutton = document.getElementById("backtotopbutton");
function scrollFunction() {
  document.body.scrollTop > 400 || document.documentElement.scrollTop > 400
    ? (mybutton.style.display = "block")
    : (mybutton.style.display = "none");
}
function scrolltoTopfunction() {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}
(window.onscroll = function () {
  scrollFunction();
}),
  document.addEventListener(
    "contextmenu",
    function (e) {
      "IMG" === e.target.nodeName && e.preventDefault();
    },
    !1
  );
let Pupils = document.getElementsByClassName("footer-pupil"),
  pupilsArr = Array.from(Pupils),
  pupilStartPoint = -10,
  pupilRangeX = 20,
  pupilRangeY = 15,
  mouseXStartPoint = 0,
  mouseXEndPoint = window.innerWidth,
  currentXPosition = 0,
  fracXValue = 0,
  mouseYEndPoint = window.innerHeight,
  currentYPosition = 0,
  fracYValue = 0,
  mouseXRange = mouseXEndPoint - mouseXStartPoint;
const mouseMove = (e) => {
    (fracXValue =
      (currentXPosition = e.clientX - mouseXStartPoint) / mouseXRange),
      (fracYValue = (currentYPosition = e.clientY) / mouseYEndPoint);
    let t = pupilStartPoint + fracXValue * pupilRangeX,
      o = pupilStartPoint + fracYValue * pupilRangeY;
    pupilsArr.forEach((e) => {
      e.style.transform = `translate(${t}px, ${o}px)`;
    });
  },
  windowResize = (e) => {
    (mouseXEndPoint = window.innerWidth),
      (mouseYEndPoint = window.innerHeight),
      (mouseXRange = mouseXEndPoint - mouseXStartPoint);
  };
window.addEventListener("mousemove", mouseMove),
  window.addEventListener("resize", windowResize);

const cursorInner = document.getElementById("cursor-inner");
const cursorOuter = document.getElementById("cursor-outer");
const links = document.querySelectorAll("a,label,button");

document.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorInner.style.left = `${posX}px`;
  cursorInner.style.top = `${posY}px`;

  // cursorOuter.style.left = `${posX}px`;
  // cursorOuter.style.top = `${posY}px`;

  cursorOuter.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" }
  );

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursorInner.classList.add("hover");
      cursorOuter.classList.add("hover");
    });
    link.addEventListener("mouseleave", () => {
      cursorInner.classList.remove("hover");
      cursorOuter.classList.remove("hover");
    });
  });
});

function openURL() {
  var url =
    "Myportfolio-main/Nitesh verma resume.pdf";

  window.open(url, "_blank");
}
