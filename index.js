

var originEncodeUri = encodeURI;
var originEncodeUriComponent = encodeURIComponent;

console.log(this == global);

function percentialize(x) {
	return '%' + x.charCodeAt(0).toString(16).toUpperCase();
}

encodeURI = (function(){
	return function encodeURI(s) {
		return originEncodeUri.apply(this, arguments).replace(/[]/g, percentialize);
	}
})();

encodeURIComponent = (function(){
	return function encodeURIComponent(s) {
		return originEncodeUriComponent.apply(this, arguments).replace(/[!'()*]/g, percentialize);
	}
})();

