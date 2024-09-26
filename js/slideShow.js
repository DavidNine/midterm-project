
// 取得所有的 div
const divs = document.getElementsByClassName('banner');
const prograss = document.getElementsByClassName('prograss-filled-bar');
const bannerContainer = document.getElementsByClassName('banner-container');
const displayTime = 5100; 

let currentIndex = 0;
let timer;



function changeToClickedDiv(divNumber) {
  clearInterval(timer);  // 清除當前的計時器
  
  bannerContainer[0].classList.remove("black-banner");
  for (let i = 0; i < divs.length; i++) {
    divs[i].classList.remove("show");
    divs[i].classList.remove("black-banner");
    prograss[i].classList.remove("prograss-activate");
  }

  if (divNumber == 1 || divNumber == 3) {
    divs[divNumber].classList.add("black-banner");
    bannerContainer[0].classList.add("black-banner");
  }
  prograss[divNumber].classList.add("prograss-activate");
  divs[divNumber].classList.add("show");

  resetTimer(divNumber);  // 重置 timer
}


function resetTimer(currentIndex) {
  timer = setInterval(() => {
    
    bannerContainer[0].classList.remove("black-banner");
    for (let i = 0; i < divs.length; i++) {
      divs[i].classList.remove("show");
      divs[i].classList.remove("black-banner");
      prograss[i].classList.remove("prograss-activate");
    }
        
    currentIndex = (currentIndex + 1) % divs.length;

    if (currentIndex == 1 || currentIndex == 3) {
      divs[currentIndex].classList.add("black-banner");
      bannerContainer[0].classList.add("black-banner");
    }
    prograss[currentIndex].classList.add("prograss-activate");
    divs[currentIndex].classList.add("show");
    // showCurrentDiv(currentIndex);
  }, displayTime);
}


divs[0].classList.add("show");
prograss[0].classList.add("prograss-activate");
divs[0].style.opacity = 1;
resetTimer(currentIndex);