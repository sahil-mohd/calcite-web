var path = require('path');
var fs = require('fs');

module.exports = function (callback) {
  return fs.readdir('lib/img/icons/ui', function (er, files) {
    files = files.map(function (filename) {
      return path.basename(filename, '.svg');
    });
    callback(er, files);
  });
};
