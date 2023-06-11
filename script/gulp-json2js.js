var gutil = require('gulp-util');
var through = require('through2');
var pp = require('preprocess');

module.exports = function (options) {
  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.isStream()) {
      this.emit('error', new gutil.PluginError('gulp-json2js', 'Streaming not supported'));
      return cb();
    }

    let content = pp.preprocess(file.contents.toString(), options || {});
    content = `export default ${content}`;
    file.contents = Buffer.from(content);

    this.push(file);
    cb();
  });
};
