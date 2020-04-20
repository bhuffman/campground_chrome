chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    let url = tabs[0].url
    chrome.tabs.create({
      url: "http://campground.link/LiveSearch/" + encodeURIComponent(url),
    })
  })
})
