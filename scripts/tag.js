const util = require('hexo-util');
const escapeHTML = util.escapeHTML;
const highlight = util.highlight;

hexo.extend.tag.register('code', function (args, content) {
  var lang = args[0] ? args[0] : 'html'
  return '<div class="code ' + lang + '">' +
    '' + highlight(content, {
      lang: lang
    }) +
    '<div class="preview">' + content + '</div>' + 
  '</div>';
}, { ends: true });

var browserify = require("browserify");

hexo.extend.renderer.register('js', 'js', function (data, options, callback) {

  const stream = browserify(data.path)
    .transform("babelify", { presets: ["@babel/preset-env"] })
    .bundle()

  let chunks = []
  stream.on("data", function(chunk) {
    chunks.push(chunk);
  });

  stream.on("end", function() {
    const result = Buffer.concat(chunks).toString("utf8");

    callback(null, result);
  });
});
