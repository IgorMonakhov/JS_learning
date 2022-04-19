// ==UserScript==
// @name         yandexBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Igor Monakhov
// @match        https://yandex.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


let keywords = ["10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress", "Вывод произвольных типов записей и полей в WordPress"];
let num = keywords.length;
let randind = getRandom(0, num);
let keyword = keywords[randind];
let btnK = document.getElementsByClassName("button mini-suggest__button")[0];
let links = document.links;


if(btnK !== undefined) {
   // let qElementArr = document.getElementsByName("q");
  //let qElement = qElementArr[0];
  //qElement.value = keyword;
  console.log(btnK);
  document.getElementsByName("text")[0].value = keyword;
 setTimeout(clickBtn, 2000);
} else {
  for (let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf("napli.ru") !== -1) {
      let link = links[i]
      console.log("Нашел строку " + links[i]);
      link.click();
      break;
    }
  }
}

function getRandom(min, max) {
return Math.floor(Math.random() * (max - min) + min);
}
function clickBtn(){
  document.getElementsByClassName("button mini-suggest__button")[0].click();
}
