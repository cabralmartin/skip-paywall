(() => {

  const TIMEOUT = 3100;

  var scriptContent = `
    const TIMEOUT = 3000;
    setTimeout(() => {
      if (typeof _apw === 'undefined') {
        // TODO: This should execute a retry policy
        console.error('_apw not found, exiting');
      } else  {
        _apw = null;
        localStorage.clear();
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
    chrome.runtime.sendMessage({});
  }, TIMEOUT)
})();