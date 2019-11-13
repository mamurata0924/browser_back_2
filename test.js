'use strinct';

var ua = window.navigator.userAgent.toLowerCase();
if (ua.indexOf('firefox') !== 1) {
  console.log('firefox');
  window.onunload = function() {};
} else if (ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1 && ua.indexOf('edge') === -1) {
  console.log('safari');
  window.onpageshow = function(evt) {
    if (evt.persisted) {
      location.reload();
    }
  };
} else {
  console.log(ua);
}
