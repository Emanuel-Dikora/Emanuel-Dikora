
let ua = navigator.userAgent

if (ua.indexOf("MSIE") > -1) {
  browser = "Internet Explorer";
  window.location.assign("ie.html");

}
window.location.href = window.width >= 300px ? 'startseite' : 'toosmall.html';