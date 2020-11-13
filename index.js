

var originEncodeUri = encodeURI;
var originEncodeUriComponent = encodeURIComponent;

function percentalize(x) {
	return '%' + x.charCodeAt(0).toString(16).toUpperCase();
}

encodeURI = (function(){
	return function encodeURI(s) {
		return originEncodeUri.apply(this, arguments).replace(/[]/g, percentalize);
	}
})();

encodeURIComponent = (function(){
	return function encodeURIComponent(s) {
		return originEncodeUriComponent.apply(this, arguments).replace(/[!'()*]/g, percentalize);
	}
})();

