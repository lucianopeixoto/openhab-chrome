function save_options() {
	localStorage["localurl"] = $("#localurl").val();
	localStorage["remoteurl"] = $("#remoteurl").val();
	localStorage["width"] = $("#width").val();
	localStorage["height"] = $("#height").val();

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
