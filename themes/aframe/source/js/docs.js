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

  document.body.addEventListener('keyup', function (e) {
    if (document.activeElement !== document.body) { return; }
    var left = e.keyCode === 37;
    var right = e.keyCode === 39;
    if (left) {
      var linkLeft = $('.guide-link-left');
      if (linkLeft) {
        linkLeft.click();
      } else {
        try {
          $('.subnav-link.current').closest('.section-subnav').previousElementSibling.previousElementSibling.querySelector('.subnav-item:last-child .subnav-link').click();
        } catch (e) {
        }
      }
    } else if (right) {
      var linkRight = $('.guide-link-right');
      if (linkRight) {
        linkRight.click();
      } else {
        try {
          $('.subnav-link.current').closest('.section-subnav').nextElementSibling.nextElementSibling.querySelector('.subnav-link').click();
        } catch (e) {
        }
      }
    }
  });
}

})();
