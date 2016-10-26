---
title: Search
type: search
layout: page
---

<!-- Using existing `page` layout for re-use. Thus HTML is coded here. -->

<input id="searchInput" type="search" placeholder="Search about A-Frame..."></input>

<!-- Populated with JS. -->
<h2 id="searchHeader" style="display: none"></h2>
<ul id="searchResults"><ul>

<script id="searchResultTemplate" type="text/template">
  <li>
    <a href="RESULT_URL">RESULT_TITLE</a>
    <p>RESULT_DESC</p>
  </li>
</script>
