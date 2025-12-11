const body = document.querySelector("body")
const menu= document.querySelector(".header__mb-nav");
const openIcon=document.querySelector(".header__open-burger-icon");
const closeIcon=document.querySelector(".header__close-burger-icon");
const burgerBtn=document.querySelector(".header__burger-button");
let titles = document.querySelectorAll(".faq__bottom-mini-boxes");
let texts = document.querySelectorAll(".faq__bottom-mini-boxes-texts");
let icons = document.querySelectorAll(".faq__icons");

burgerBtn.addEventListener("click", () =>{
    menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    openIcon.style.display="none";
    closeIcon.style.display="block";
    body.style.overflow = "hidden"; 
  } else {
    openIcon.style.display="block";
    closeIcon.style.display="none";
    body.style.overflow = "auto"; 

  }  
}
);
titles.forEach((title, index ) => {
  const text = texts[index];
  const icon = icons[index];
  title.addEventListener("click",() => {
    if (text.style.display === "none") {
      title.style.transition = "500ms ease all"
      text.style.display = "block"
      icon.style.transform = "rotate(180deg)"
} else {
           text.style.display = "none"
      icon.style.transform = "rotate(0deg)" 
    }
  })
});
