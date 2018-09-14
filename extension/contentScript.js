(() => {

  const TIMEOUT = 3500;

  var scriptContent = `
    const TIMEOUT = 3000;
    console.log('Loading magic in ', TIMEOUT);
    setTimeout(() => {
      if (typeof _apw === 'undefined') {
        console.log('_apw not found, exiting');
      } else  {
        _apw = null;
        localStorage.clear();
        document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
        console.log('Magic done.');
      }
    }, TIMEOUT);`;

  var script = document.createElement('script');
    script.id = 'tmpScript';
    script.appendChild(document.createTextNode(scriptContent));
    (document.body || document.head || document.documentElement).appendChild(script);
  

  // Signal background script to delete cookies
  // This needs to happen AFTER the injected script runs
  // Otherwise the cookies will be regenerated
  setTimeout(() => {
    chrome.runtime.sendMessage({ 1:1 });
  }, TIMEOUT)
})();