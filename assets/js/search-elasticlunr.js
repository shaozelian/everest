/* This file MUST load BEFORE just-the-docs.js */

/* Completely replace JTD's initSearch BEFORE it is registered */
window.initSearch = function () {
  var request = new XMLHttpRequest();
  request.open('GET', '{{ "/assets/js/search-data.json" | relative_url }}', true);

  request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      var docs = JSON.parse(this.responseText);

      /* Build elasticlunr index */
      var index = elasticlunr(function () {
        this.setRef("id");
        this.addField("title");
        this.addField("content");

        /* Enable Chinese tokenizer + fuzzy search */
        if (elasticlunr.cn) {
          this.use(elasticlunr.cn);
        }
      });

      docs.forEach(doc => index.addDoc(doc));

      /* Replace JTD's search index */
      window.jtd.searchIndex = index;
    }
  };

  request.send();
};