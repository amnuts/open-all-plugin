
function gatherTabUrls() {
    chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, function(tabs){
        input.value = ""
        tabs.forEach(tb => {
            input.value += tb.url + "\n";
        });
    });
}

function openUrlTabs() {
    let lines = input.value.split("\n");
    for (let i = 0; i < lines.length; i++) {
        chrome.tabs.create({ url: lines[i] });
    }
}

let input = document.getElementById('textarea');
document.getElementById('gather-all').addEventListener('click', gatherTabUrls);
document.getElementById('open-all').addEventListener('click', openUrlTabs);
