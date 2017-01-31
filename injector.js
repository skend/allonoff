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
	afterCheckboxCreation();
});

function afterCheckboxCreation() {
	var input = document.getElementsByClassName("sr-name")[0];
	var button = document.getElementsByClassName("add")[0];

	var subredditList = document.getElementsByClassName("subreddits")[0];
	console.log(subredditList.childNodes[0].innerText);
}