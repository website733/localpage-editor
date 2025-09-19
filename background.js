chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: clearCookies
    });
});

function clearCookies() {
    chrome.cookies.getAll({}, function(cookies) {
        for (let cookie of cookies) {
            let url = "http" + (cookie.secure ? "s" : "") + "://" + cookie.domain + cookie.path;
            chrome.cookies.remove({ url: url, name: cookie.name });
        }
    });
    alert("Tous les cookies ont été supprimés pour ce site !");
}
