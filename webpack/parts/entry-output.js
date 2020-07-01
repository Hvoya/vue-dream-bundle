const path = require('path');

/**
  Returns head of the graph and where to place results
  @memberOf module:Parts
  @return {{ entry: string, output }}
 */
function getEntryOutput() {
  return {
    entry: path.resolve(__dirname, '../../src', 'index.js'),
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, '../../build'),
    },
  };
}

module.exports = getEntryOutput;
