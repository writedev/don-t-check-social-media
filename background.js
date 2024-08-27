const blockedSites = [
  "*://*.tiktok.com/*",
  "*://*.twitter.com/*",
  "*://*.x.com/*",
  "*://*.instagram.com/*",
];

const redirectUrl = chrome.runtime.getURL("blocked.html");

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { redirectUrl: redirectUrl };
  },
  { urls: blockedSites },
  ["blocking"]
);
