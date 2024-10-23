const shareBtn = document.querySelector(".card__button");
const btn = document.querySelector(".card__button-icon");
const shareCont = document.querySelector(".card__share-cont");

console.log(shareCont);

btn.addEventListener("click", () => {
  shareCont.classList.toggle("open");

  if (shareCont.classList.contains("open")) {
    shareBtn.classList.add("open");
    shareCont.style.animation = "appear 1s";
    shareCont.style.display = "flex";

    for (link of shareCont.children) {
      link.style.animation = "textAppear 1s";
    }
  } else {
    for (link of shareCont.children) {
      link.style.animation = "textDisappear 1s";
    }

    shareBtn.classList.remove("open");

    shareCont.style.animation = "disappear 1s";

    setTimeout(() => {
      shareCont.style.display = "none";
    }, 500);
  }
});

document.addEventListener("click", (e) => {
  if (!shareCont.contains(e.target) && e.target !== btn && e.target !== btn.firstElementChild) {
    shareCont.classList.remove("open");

    for (link of shareCont.children) {
      link.style.animation = "textDisappear 1s";
    }

    shareBtn.classList.remove("open");

    shareCont.style.animation = "disappear 1s";

    setTimeout(() => {
      shareCont.style.display = "none";
    }, 500);
  }
});

const shareBtnMobile = document.querySelector(".card__button-mobile");
const btnMobile = document.querySelector(".card__button-icon-mobile");
const shareContMobile = document.querySelector(".card__share-cont-mobile");
const shareTextMobile = document.querySelector(".card__share-text-mobile");
const linkMobile = document.querySelectorAll(".card__link-mobile");

btnMobile.addEventListener("click", () => {
  shareContMobile.classList.toggle("open");
  btnMobile.classList.toggle("open");
  shareTextMobile.classList.toggle("open");

  for (link of linkMobile) {
    link.classList.toggle("open");
  }
});

document.addEventListener("click", (e) => {
  if (!shareContMobile.contains(e.target) && e.target !== btnMobile && e.target !== btnMobile.firstElementChild) {
    shareContMobile.classList.remove("open");
    btnMobile.classList.remove("open");
    shareTextMobile.classList.remove("open");

    for (link of linkMobile) {
      link.classList.remove("open");
    }
  }
});
