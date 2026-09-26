let c = 0;
onconnect = function(e) {
	let port = e.ports[0];
	port.onmessage = function(e) {
		c++;
		port.postMessage(c);
	};
}
