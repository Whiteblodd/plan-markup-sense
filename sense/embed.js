// Mounts the SENSE plan-markup form into the page as an iframe.
// Put <div id="sense-markup-form"></div> where the form should appear; without it the form is appended to <body>.
(function () {
  var SRC = "https://whiteblodd.github.io/plan-markup-sense/";
  var mount = document.getElementById("sense-markup-form");
  if (!mount) {
    mount = document.createElement("div");
    mount.id = "sense-markup-form";
    document.body.appendChild(mount);
  }
  if (mount.querySelector("iframe")) return;
  var frame = document.createElement("iframe");
  frame.src = SRC;
  frame.title = "Разметка планировок SENSE";
  frame.loading = "lazy";
  mount.appendChild(frame);
})();
