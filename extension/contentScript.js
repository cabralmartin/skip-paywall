(() => {

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
  
})();