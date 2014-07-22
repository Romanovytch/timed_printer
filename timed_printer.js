var	fs;
var	buffer;
var	timed_print;
var	buffer;
var	tmp;
var	offset;

offset  = 0;
fs	= require('fs');

if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' text.txt');
  process.exit(1);
}

timed_print = function(){
    tmp = buffer.slice(offset, offset + 10);
    process.stdout.write(tmp);
    offset = offset + 10;
};

fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if (err) throw err;
    buffer = data;
    setInterval(timed_print, 1000);
});
