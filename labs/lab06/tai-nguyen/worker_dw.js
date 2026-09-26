let c = 0;
onmessage = function(e) {
	c++;
	postMessage(c);
};
