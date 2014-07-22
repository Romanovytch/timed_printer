var	fs;
var	buffer;
var	timed_print;
var	timed_reading;
var	buffer;
var	tmp;
var	offset_print;
var	offset_read;
var	time_print;
var	time_read;
var	bytes;
var	total_buffer;
var	i;

fs		=	require('fs');

time_read	=	2000;
time_print	=	1000;
bytes_read	=	20;
bytes_print	=	5;
offset_print	=	0;
offset_read	=	0;
buffer		=	new Buffer(20);
i		=	0;
total_buffer	=	"";

if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' text.txt');
  process.exit(1);
}

timed_reading = function() {

    if (i == 0)
    {
	setInterval(timed_print, time_print);
	i = 1;
    }
    fs.open(process.argv[2], 'r', function (err, handle) {
	
	var b = new Buffer(bytes_read);
	
	fs.read(handle, b, 0, bytes_read, offset_read, function (err, bytesRead) {
            console.log("Bytes read : " + b);
            fs.close(handle);
	    offset_read = offset_read + bytes_read;
	    total_buffer = total_buffer + b;
	});
    });
};

timed_print = function(){
    tmp = total_buffer.slice(offset_print, offset_print + bytes_print);
    console.log("Bytes written : " + tmp);
    offset_print = offset_print + bytes_print;
};


setInterval(timed_reading, time_read);
