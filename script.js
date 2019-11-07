let characterAboutMe=document.querySelector(".characterAboutMe");
let characterImage=document.querySelector(".characterImage");
characterImage.onmouseover = mouseOver;
characterAboutMe.onmouseout = mouseOut;

function mouseOver(chracterAboutMeConstant) {

   characterAboutMe.innerHTML ="test";
}

function mouseOut() {
   characterAboutMe.innerHTML =this.characterAboutMe.innerHTML;
}
