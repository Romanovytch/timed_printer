var	stream, util, fs;
var	offset, bytes, offset_read, bytes_read
var	buffer;
fs	 = require('fs');
Writable = require('stream').Writable;
Readable = require('stream').Readable;
util	 = require('util');
util.inherits(Writing, Writable);
util.inherits(Reading, Readable);
offset		= 0;
offset_read	= 0;
bytes		= 5;
bytes_read	= 50;

function Writing(opt) {
    Writable.call(this, opt);
}

function Reading(opt) {
    Readable.call(this, opt);
}

Writing.prototype._write = function(chunk) {
    buffer = new Buffer(chunk.length);
    buffer = chunk;
    var tid = setTimeout(Repeat, 1000);
}

Reading.prototype._read = function() {
    var chunk = new Buffer(bytes_read);
    var fd  = fs.openSync(process.argv[2], 'r');
    fs.read(fd, chunk, 0, bytes_read, offset_read);
    fs.close(fd);
    offset_read = offset_read + bytes_read;
    console.log("Bytes read : " + chunk);
    this.push(chunk);
    this.push(null);
}    

function Repeat() {
    if (offset < buffer.length)
    {
	tmp = buffer.slice(offset, offset + bytes);
	console.log("Bytes written : " + tmp);
	offset = offset + bytes;
	tid = setTimeout(Repeat, 1000);
    }
}

readStream = new Reading();
writeStream = new Writing();
readStream.pipe(writeStream);
