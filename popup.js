document.getElementById('clearCookies').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: clearCookies
        });
    });
});

function clearCookies() {
    chrome.cookies.getAll({ url: window.location.href }, function(cookies) {
        for (let cookie of cookies) {
            let url = "http" + (cookie.secure ? "s" : "") + "://" + cookie.domain + cookie.path;
            chrome.cookies.remove({ url: url, name: cookie.name });
        }
    });
    alert("Cookies supprimés pour ce site !");
}
