(function () {
  var input = document.querySelector('#searchInput');
  var query = getQueryParam('q');
  var resultsContainer = document.querySelector('#searchResults');

  // Get Lunr search index.
  new Promise(function (resolve) {
    var req = new XMLHttpRequest();
    req.addEventListener('load', function () {
      var index = lunr.Index.load(JSON.parse(this.responseText).index);
      resolve(index);
    });
    req.open('GET', '/lunr/all.json');
    req.send();
  }).then(init);

  /**
   * Populate search results.
   */
  function init (index) {
    if (query) {
      input.setAttribute('value', query);
      populate(query)
    }

    // Bind to search input.
    input.addEventListener('input', function () {
      populate(index.search(this.value));
    });
  }

  /**
   * Populate search results.
   */
  function populate (results) {
    results.forEach(function (result) {
      console.log(result);
    });
  }

  function getQueryParam (variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (decodeURIComponent(pair[0]) == variable) {
        return decodeURIComponent(pair[1]);
      }
    }
  }
})();
