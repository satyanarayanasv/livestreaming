var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname)));
app.get('/', function (req, res) {
//   var name = req.param('fname');
/*
   	var response = '<html><body>';
   	response +='<div id="videoframe"></div>';
   
   	response += '<SCRIPT type="text/javascript">';
   	response += 'function rtspPlayer() ';

	response +=	'{ var player=document.getElementById("videoframe");';
	response += 'player.innerHTML=\'<A HREF="rtmp://server-ip:1935/jgm-liverecord/livestream">';
	response += '<IMG SRC="apple.png" ';
	response += 'ALT="Start Mobile Video" ';
	response += 'BORDER="0" ';
	response += 'HEIGHT="480" ';
	response += 'WIDTH="640">';
	response +='</A>\';';
	response += '}';
	response += 'rtspPlayer();';
	response += '</SCRIPT>';
	response += '</body></html>';
	console.log('response '+ response);
//   console.log(name);
	res.send(response);
	*/
	res.sendFile(path.join(__dirname + '/player.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
