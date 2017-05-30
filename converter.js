var links = document.querySelectorAll('link[rel="import"]');
var nodeText = '';
links.forEach(function(link){
	var content = link.import;
    var el = content.getElementsByTagName('body')[0].innerHTML;
    nodeText += el;
});
document.getElementsByTagName('xmp')[0].innerHTML = nodeText;