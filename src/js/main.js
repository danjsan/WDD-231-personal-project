import { getParkData } from "./parkService.mjs";

const parkData = getParkData();


const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;


function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}


const info = document.querySelector(".info > a");
info.href = parkData.url;

document.querySelector("head > title").textContent = parkData.fullName;

const imageHero = document.querySelector(".hero-banner > img");
imageHero.scr = parkData.images[0].url;

document.querySelector(".hero-banner_content").innerHTML = 
  parkInfoTemplate(parkData);





