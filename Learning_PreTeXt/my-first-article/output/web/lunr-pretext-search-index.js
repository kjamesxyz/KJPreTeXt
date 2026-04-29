var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase-2",
  "level": "1",
  "url": "shorttitlelowercase-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Author K. James        This is the abstract.   "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Section",
  "number": "1",
  "title": "My First Section",
  "body": " My First Section   Some words    My First Subsection  Let's try an example together.   What does this do?   Next, let's try some math    If are the sides of a right triangle, with being the hypoteneuse, then      A frog   A nice-looking frog with a longish description.    Bar:   "
},
{
  "id": "subsection-1-3",
  "level": "2",
  "url": "section-1.html#subsection-1-3",
  "type": "Example",
  "number": "1.1",
  "title": "",
  "body": " What does this do?  "
},
{
  "id": "thm-pythag",
  "level": "2",
  "url": "section-1.html#thm-pythag",
  "type": "Theorem",
  "number": "1.2",
  "title": "",
  "body": "  If are the sides of a right triangle, with being the hypoteneuse, then    "
},
{
  "id": "subsection-1-6",
  "level": "2",
  "url": "section-1.html#subsection-1-6",
  "type": "Figure",
  "number": "1.3",
  "title": "",
  "body": " A frog   A nice-looking frog with a longish description.   "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Section",
  "number": "2",
  "title": "My Additional Section",
  "body": " My Additional Section  foo   The graph made by TikZ   A 5-cycle     Let .  "
},
{
  "id": "figure-tikz-example-diagram",
  "level": "2",
  "url": "section-2.html#figure-tikz-example-diagram",
  "type": "Figure",
  "number": "2.1",
  "title": "",
  "body": " The graph made by TikZ   A 5-cycle    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
