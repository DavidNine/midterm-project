const headerTypingText = "尋找合適的產品";
const subjectTypingText = "探索 Hercules 的所有產品";


const headerElement  = document.querySelector('.typing-text-head');
const subjectElement = document.querySelector('.typing-text-sub');

let headerIndex = 0;
let subjectIndex = 0;

function typeHeader() {
    if (headerIndex < headerTypingText.length) {
        headerElement.innerHTML += headerTypingText.charAt(headerIndex); // 直接抓取單個元素
        headerIndex++;
        setTimeout(typeHeader, 100);
    } else {
        typeSubText()
    }
}

function typeSubText() {
    if (subjectIndex < subjectTypingText.length) {
        subjectElement.innerHTML += subjectTypingText.charAt(subjectIndex); // 直接抓取單個元素
        subjectIndex++;
        setTimeout(typeSubText, 100);
    } else {
        removeTypingEffective()
    }
}

function removeTypingEffective() {
    subjectElement.classList.remove("typing-text");
    headerElement.classList.remove("typing-text")
}



typeHeader();