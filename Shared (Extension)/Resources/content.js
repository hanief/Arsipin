browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
    console.log("Received response: ", response);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received content request: ", request);
});

const archiveURL = "https://archive.is/newest/" + window.location.href

document.body.innerHTML = `<p>Arsipin extension is redirecting to <a href="${archiveURL}">${archiveURL}</a>" in 3 seconds...`

setTimeout(() => { location = archiveURL }, 3000)
