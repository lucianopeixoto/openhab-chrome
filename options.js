function save_options() {
	localStorage["localurl"] = $("#localurl").val();
	localStorage["remoteurl"] = $("#remoteurl").val();
	localStorage["width"] = $("#width").val();
	localStorage["height"] = $("#height").val();

	// New storage api:
	//
	//chrome.storage.sync.set({localurl: $("#localurl").val()}, function() {
	//	console.log('Value of localurl was set to ' + $("#localurl").val());
	//});

	$("#status").html("Options Saved.");
	setTimeout(function() {
		$("#status").html("");
	}, 2000);
}

function restore_options() {
	var localurl = localStorage["localurl"];
	var remoteurl = localStorage["remoteurl"];
	var width = localStorage["width"];
	var height = localStorage["height"];

	// New storage api:
	//
	//var localurl = chrome.storage.sync.get(['localurl'], function(result) {
	//	console.log('Value currently is ' + result.key);
	//});
	
	if(localurl){
		$("#localurl").val(localurl);
	}
	if(remoteurl){
		$("#remoteurl").val(remoteurl);
	}
	if(width){
		$("#width").val(width);
	}
	if(height){
		$("#height").val(height);
	}
}

$(document).ready(function(){
	restore_options();
	
	$("#save").click(function(){
		save_options();
	});
});
