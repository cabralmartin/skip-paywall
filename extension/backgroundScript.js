chrome.runtime.onMessage.addListener(() => {
  const COOKIE_DETAILS = {name:"apw_acc_0", url:"https://www.lanacion.com.ar"};

  chrome.cookies.get(COOKIE_DETAILS, (cookie) => {
    if (!cookie) {
      console.log(`Cookie not found`);
    } else {
      console.log(`Retrieved cookie ${cookie.string} with value\n${cookie.value}`);
    }
  });
  // chrome.cookies.remove(COOKIE_DETAILS, () => {
  //   console.log("cookie successfully deleted!");
  // });
});