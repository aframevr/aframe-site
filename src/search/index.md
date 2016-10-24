---
title: Search
type: search
layout: page
---

<!-- Using existing `page` layout for re-use. Thus HTML is coded here. -->

<input id="searchInput" type="search" placeholder="Search about A-Frame..."></input>

<!-- Populated with JS. -->
<ul id="searchResults"><ul>

<script id="searchResultTemplate" type="text/template">
  <li>
    <a href="{{ resultUrl }}">{{ resultTitle }}</a>
  </li>
</script>
