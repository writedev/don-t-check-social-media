
const blockedSites = [
  "*://*.tiktok.com/*",
  "*://*.twitter.com/*",
  "*://*.x.com/*",
  "*://*.instagram.com/*",
];

const redirectUrl = browser.runtime.getURL("blocked.html");

browser.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { redirectUrl: redirectUrl };
  },
  { urls: blockedSites },
  ["blocking"]
);
