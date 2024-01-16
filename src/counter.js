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
