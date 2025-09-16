const menuImg = document.querySelector(".menu-img");
const navUl = document.querySelector(".nav-ul");

menuImg.addEventListener ("click", () => {
   if (navUl.style.display == "block") {
    navUl.style.display = "none";
   }else{
    navUl.style.display = "block";
   }
});