const bar=document.querySelector("#bar");
const cross=document.querySelector("#cross");
const links =document.querySelector(".links");

bar.addEventListener("click",function(){
  bar.classList.add("hide");
  cross.classList.remove("hide");
  links.classList.add("colapse");
})

cross.addEventListener("click",function(){
  cross.classList.add("hide");
  bar.classList.remove("hide");
  links.classList.remove("colapse");
})
