import "./style.css";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <pre id="log"></pre>
  </div>
`;

// Log to the console and to the #log element
// @ts-ignore
window.logEverywhere = (...args) => {
  console.log(...args);
  const log = document.querySelector("#log");
  log.innerHTML += `<div>${args.join(" ")}</div>`;
  log.scrollTop = log.scrollHeight;
};

const setDataFromMessage = (event) => {
  logEverywhere(event);
};

setupCounter(document.querySelector("#counter"));

window.addEventListener("message", setDataFromMessage);
