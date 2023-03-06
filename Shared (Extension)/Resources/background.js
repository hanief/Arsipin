browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received background request: ", request);

    if (request.greeting === "hello")
        sendResponse({ farewell: "goodbye" });
});
