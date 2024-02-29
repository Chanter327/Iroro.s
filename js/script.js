const hmb = document.getElementById("hmb");
const mobileMenu = document.getElementById("mobile-menu");
const closebtn = document.getElementById("close");
hmb.addEventListener("click", () => {
  mobileMenu.classList.add("displayed");
  closebtn.classList.add("active");
});
closebtn.addEventListener("click", () => {
  mobileMenu.classList.remove("displayed");
  closebtn.classList.remove("active");
});
const mobileMenuContent = mobileMenu.getElementsByTagName("a");
for (let i = 0; i < mobileMenuContent.length; i++) {
  mobileMenuContent[i].addEventListener("click", () => {
    hmb.classList.remove("active");
    mobileMenu.classList.remove("displayed");
  });
}

const tabControl = document.getElementById("tab-control");
const tabs = tabControl.getElementsByClassName("tab");
const tabBody = document.getElementById("tab-body");
const tabContents = tabBody.getElementsByClassName("tab-content");

tabs[0].classList.add("active");
tabContents[0].classList.add("active");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", () => {
    tabs[i].classList.add("active");
    tabContents[i].classList.add("active");
    for (let n = 0; n < tabs.length; n++) {
      if (n !== i) {
        tabs[n].classList.remove("active");
        tabContents[n].classList.remove("active");
      }
    }
  });
}

const cdPick = document.getElementById("cd-pick");
const csPick = document.getElementById("cs-pick");
const pickUpSlider = document.getElementById("pick-up-slider");
const pickUpDisplay = document.getElementById("pick-up-display");

const cdLogo = document.getElementById("cd-logo");
const csLogo = document.getElementById("cs-logo");
const logoSlider = document.getElementById("logo-slider");
const logoDisplay = document.getElementById("logo-display");

const cdIllust = document.getElementById("cd-illust");
const csIllust = document.getElementById("cs-illust");
const illustSlider = document.getElementById("illust-slider");
const illustDisplay = document.getElementById("illust-display");

const toggleChanged = (elem1, elem2, elem3, elem4) => {
  elem1.classList.toggle("changed");
  elem2.classList.toggle("changed");
  elem3.classList.toggle("changed");
  elem4.classList.toggle("changed");
};

cdPick.addEventListener("click", () => {
  toggleChanged(cdPick, csPick, pickUpSlider, pickUpDisplay);
});

csPick.addEventListener("click", () => {
  toggleChanged(cdPick, csPick, pickUpSlider, pickUpDisplay);
});

cdLogo.addEventListener("click", () => {
  toggleChanged(cdLogo, csLogo, logoSlider, logoDisplay);
});

csLogo.addEventListener("click", () => {
  toggleChanged(cdLogo, csLogo, logoSlider, logoDisplay);
});

cdIllust.addEventListener("click", () => {
  toggleChanged(cdIllust, csIllust, illustSlider, illustDisplay);
});

csIllust.addEventListener("click", () => {
  toggleChanged(cdIllust, csIllust, illustSlider, illustDisplay);
});

const contactBtn = document.getElementById("contact-btn");
const contactFrom = document.getElementById("contact-form");
contactBtn.addEventListener("click", () => {
  contactBtn.classList.toggle("active");
  contactFrom.classList.toggle("active");
});

const content_artist = document.getElementById("artist");
const artist = document.querySelector(".icon-frame-1");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const content_artistY = artist.getBoundingClientRect().top;
  const content_artist_abs_y = content_artistY + scrollTop;

  if (scrollTop > 100) {
    hmb.classList.add("black");
  } else {
    hmb.classList.remove("black");
  }

  if (content_artist_abs_y - scrollTop <= 350) {
    content_artist.classList.add("active");
    artist.classList.add("active");
  }
});
