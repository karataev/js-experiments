
var inputs = process.argv.slice(2);

var result = inputs
  .map( x => x.charAt(0))
  .reduce( (prev, char) => prev + char, '');

console.log(result);
