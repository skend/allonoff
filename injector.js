$(document).ready(function() {
	var originalCheckbox = document.getElementsByClassName("toggle res-sr-style-toggle")[0];
	var parent = document.getElementsByClassName("titlebox rounded filtered-details")[0];
	var ran = false;

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		    var div = document.createElement('div');
		    div.innerHTML = this.responseText;
		    parent.insertBefore(div, originalCheckbox.nextSibling);
		    ran = true;
		}
	};
	xhttp.open("GET", chrome.extension.getURL("/checkbox.html"), true);
	xhttp.send();
});
