var	stream, util, fs;
var	offset, bytes;
var	buffer;
fs	 = require('fs');
Writable = require('stream').Writable;
Readable = require('stream').Readable;
util	 = require('util');
stream	= fs.createReadStream('text.txt');
util.inherits(Writing, Writable);

offset	= 0;
bytes	= 5;

function Writing(opt) {
    Writable.call(this, opt);
}

Writing.prototype._write = function(chunk) {
    console.log("Bytes read : " + chunk);
    buffer = new Buffer(chunk.length);
    buffer = chunk;
    var tid = setTimeout(Repeat, 1000);
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

writeStream = new Writing();
stream.pipe(writeStream);
