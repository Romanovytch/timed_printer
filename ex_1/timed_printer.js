var	fs;
var	buffer;
var	timed_print;
var	buffer;
var	tmp;
var	offset;
var	time_print;
var	bytes;

fs		=	require('fs');

time_print	=	1000;
bytes		=	10;
offset		=	0;

if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' text.txt');
  process.exit(1);
}

timed_print = function(){
    tmp = buffer.slice(offset, offset + bytes);
    process.stdout.write(tmp);
    offset = offset + bytes;
};

fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if (err) throw err;
    buffer = data;
    setInterval(timed_print, time_print);
});
