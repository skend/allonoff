$(document).ready(function() {
	var originalCheckbox = document.getElementsByClassName("toggle res-sr-style-toggle")[0];
	var parent = document.getElementsByClassName("titlebox rounded filtered-details")[0];

	var innerHTML = '<form action="" style="color:gray; font-size: smaller;cursor: default;user-select: none;"><input type="checkbox" id="allonoff-checkbox" name="allonoff" checked>/r/all filtering</form>'

	var newElement = document.createElement('newElement');
	newElement.innerHTML = innerHTML;
	newElement.addEventListener('click', function() {
		run();
	});
	parent.insertBefore(newElement, originalCheckbox.nextSibling);
});

function run() {
	if (!isChecked()) {
		var subredditList = document.getElementsByClassName("subreddits")[0];
		var subredditArray = [];
		var loopCount = subredditList.childNodes.length;
		for (i = 0; i < loopCount; i++) {
			var currentItem = subredditList.childNodes[0];
			var text = currentItem.innerText;
			text = text.slice(0, -1);
			console.log(text);
			subredditArray.push(text);
			var removeSubreddit = currentItem.getElementsByClassName('remove-sr')[0];
			removeSubreddit.click();
		}
		// write to storage
		chrome.storage.sync.set({'subreddits': subredditArray}, function() {
			console.log("Subreddits successfully saved.")
		});
	} else {
		var input = document.getElementsByClassName("sr-name")[0];
		var button = document.getElementsByClassName("add")[0];

		// Read it using the storage API
		chrome.storage.sync.get(['subreddits'], function(items) {
			for (i = 0; i < items.subreddits.length; i++) {
				input.value = items.subreddits[i];
		  		button.click();
			}
		});
	}
}

function isChecked() {
	return $('#allonoff-checkbox').is(":checked")
}