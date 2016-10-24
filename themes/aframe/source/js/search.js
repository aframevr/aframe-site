(function () {
  var aframeVersion = document.documentElement.getAttribute('data-aframe-version');
  var input = document.querySelector('#searchInput');
  var query = getQueryParam('q') || window.location.hash;
  var resultsContainer = document.querySelector('#searchResults');
  var resultTemplate = document.querySelector('#searchResultTemplate');
  var searchHeader = document.querySelector('#searchHeader');

  // Get Lunr search index.
  new Promise(function (resolve) {
    var req = new XMLHttpRequest();
    req.addEventListener('load', function () {
      resolve(JSON.parse(this.responseText));
    });
    req.open('GET', '/lunr/' + aframeVersion + '.json');
    req.send();
  }).then(init);

  /**
   * Populate search results.
   */
  function init (data) {
    var index = lunr.Index.load(data.index);

    if (query) {
      input.setAttribute('value', query);
      search(query, index, data.store);
    }

    // Bind to search input.
    input.addEventListener('input', function () {
      search(this.value, index, data.store);
    });
  }

  /**
   * Populate search results.
   *
   * @param results {object} - Search results.
   * @param store {object} - Metadata about pages, keyed by ref.
   */
  function search (query, index, store) {
    var results = index.search(query);

    // Template search results header.
    if (query) {
      searchHeader.style.display = 'block';
      searchHeader.innerHTML = 'Search results for "' + query + '"&hellip;';
    } else {
      searchHeader.style.display = 'none';
    }

    // Update hash.
    window.location.hash = query;

    // Clear.
    resultsContainer.innerHTML = '';

    // Template search rsults.
    results.forEach(function (result) {
      var desc = store[result.ref].desc;
      var html = resultTemplate.innerHTML
        .replace(/RESULT_URL/, result.ref)
        .replace(/RESULT_TITLE/, store[result.ref].title)
        .replace(/RESULT_DESC/, desc ? desc + '&hellip;' : '')
      resultsContainer.innerHTML += html;
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
