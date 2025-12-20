document.addEventListener("DOMContentLoaded", function () {
  if (!window.lunr || !window.jtd) return;

  // Override JTD search builder
  setTimeout(() => {
    jtd.search = function (docs) {
      return lunr(function () {
        // Enable Chinese tokenizer
        this.use(lunr.zh);

        this.ref("id");
        this.field("title");
        this.field("content");

        docs.forEach(doc => {
          // Segment Chinese text before indexing
          const segTitle = lunr.zh.tokenizer(doc.title).join(" ");
          const segContent = lunr.zh.tokenizer(doc.content).join(" ");

          this.add({
            id: doc.id,
            title: segTitle,
            content: segContent
          });
        });
      });
    }
  }, 50);
});
