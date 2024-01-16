import "./style.css";
import viteLogo from "/vite.svg";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <pre id="log"></pre>
  </div>
`;

export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
    window.parent.postMessage("chatwoot-dashboard-app:fetch-info", "*");
    logEverywhere("SET COUNTER");
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}

// Log to the console and to the #log element
// @ts-ignore
window.logEverywhere = (...args) => {
  console.log(...args);
  const log = document.querySelector("#log");
  const currentTimestamp = new Date().toLocaleTimeString();
  log.innerHTML += `<div><span class="muted">${currentTimestamp}</span> ${args.join(
    " "
  )}</div>`;
  log.scrollTop = log.scrollHeight;
};

const setDataFromMessage = (event) => {
  logEverywhere(event.data);
};

setupCounter(document.querySelector("#counter"));

window.addEventListener("message", setDataFromMessage);
