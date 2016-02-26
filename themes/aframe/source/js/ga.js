(function () {

function initGoogleAnalyticsEvents () {
  window.ga('send', 'event', 'supports.getVRDevices', 'getVRDevices' in navigator);
  window.ga('send', 'event', 'supports.getVRDisplays', 'getVRDisplays' in navigator);
}

initGoogleAnalyticsEvents();

})();
