document.getElementById("toggleEdit").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"]
  });
});

document.getElementById("injectCss").addEventListener("click", async () => {
  let cssCode = document.getElementById("cssInput").value;
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    css: cssCode
  });
});
