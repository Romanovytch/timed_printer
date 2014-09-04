var	streamReadable;
var	fs;

fs	=	require('fs');

stream	=	fs.createReadStream(process.argv[2]);


stream.on('data', function(chunk) {
    console.log('read %d bytes of data', chunk.length);
});

stream.pipe(process.stdout);
