chrome.runtime.onMessage.addListener(() => {
  chrome.cookies.getAll({domain: ".lanacion.com.ar"}, (cookies) => {
    cookies.forEach((cookie) => {
      chrome.cookies.remove({url: `https://${cookie.domain}${cookie.path}`, name: cookie.name});
    });
  });
});