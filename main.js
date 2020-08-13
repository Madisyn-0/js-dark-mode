function changeMode() {
    const screen = document.querySelectorAll(".screen");
    const button = document.querySelectorAll(".mode-button");
    const header = document.querySelectorAll(".header");
    const content = document.querySelectorAll(".content");
    const sidebar1 = document.querySelectorAll(".sidebar-1");
    const sidebar2 = document.querySelectorAll(".sidebar-2");
    const mainContent = document.querySelectorAll(".main-content");
    const mainPage = document.querySelectorAll(".main-page");
    const card = document.querySelectorAll(".card");
    const secondaryPage = document.querySelectorAll(".secondary-page");
    
if(document.getElementById("content").getAttribute("class") === "content light"){
    makeDark(screen);
    makeDark(button);
    makeDark(header);
    makeDark(content);
    makeDark(sidebar1);
    makeDark(sidebar2);
    makeDark(mainContent);
    makeDark(mainPage);
    makeDark(card);
    makeDark(secondaryPage);
    } else {
    makeLight(screen);
    makeLight(button);
    makeLight(header);
    makeLight(content);
    makeLight(sidebar1);
    makeLight(sidebar2);
    makeLight(mainContent); 
    makeLight(mainPage); 
    makeLight(card);
    makeLight(secondaryPage);
    }
}

function makeDark(element){
    element.forEach(function(el) {
        el.classList.remove("light");
        el.classList.add("dark");
    });
}

function makeLight(element){
    element.forEach(function(el) {
        el.classList.remove("dark");
        el.classList.add("light");
    });
}