---
title: Suche
permalink: suche/
date: 2023-11-28
search: exclude
---

<input type="text" id="search-input" placeholder="suchen">
<ol id="search-results"></ol>

<script src="{{ '/assets/scripts/jekyll-search.js' }}" type="text/javascript"></script>
<script type="text/javascript">
	SimpleJekyllSearch.init({
		searchInput: document.getElementById('search-input'),
		resultsContainer: document.getElementById('search-results'),
		dataSource: '{{ "/search.json" }}',
		searchResultTemplate: '<li><a href="{url}" style="font-size: 110%;">{title}</a><br><span style="font-size: 80%;">{date}&nbsp;&minus;&nbsp;{path}</span></li>',
		noResultsText: 'keine Ergebnisse gefunden',
		fuzzy: true
	})
</script>
