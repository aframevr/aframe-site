/* global $ */

(function () {

var anchorHeadingsSelector = 'h2[id], h3[id], h4[id], h5[id], h6[id]';

var content = $('.content');
if (content) {
  content.addEventListener('click', function (e) {
    var el = e.target;
    if (el.matches && el.matches(anchorHeadingsSelector)) {
      window.location.hash = '#' + el.id;
    }
  });
}

})();
