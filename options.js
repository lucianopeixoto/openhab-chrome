// Saves options to localStorage.
function save_options() {
  chrome.storage.sync.set({"local_server": $("#localserverid").val()});
  chrome.storage.sync.set({"remote_server": $("#remoteserverid").val()});
  chrome.storage.sync.set({"path_id": $("#pathid").val()});
  chrome.storage.sync.set({"width_id": $("#widthid").val()});
  chrome.storage.sync.set({"height_id": $("#heightid").val()});

  // Checks the Local URL radio on the context menu
  chrome.contextMenus.update("radioRemote", {
    checked: false
  });
  chrome.contextMenus.update("radioLocal", {
    checked: true
  });
  chrome.storage.sync.set({"active_server": chrome.storage.sync.get(["local_server"])});

	// Update status to let user know options were saved.
	$("#status").html("Options Saved.");
	setTimeout(function() {
		$("#status").html("");
	}, 2000);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var local_server_id = chrome.storage.sync.get(["local_server"]);
  var remote_server_id = chrome.storage.sync.get(["remote_server"]);
  var path_id = chrome.storage.sync.get(["path_id"]);
  var width_id = chrome.storage.sync.get(["width_id"]);
  var height_id = chrome.storage.sync.get(["height_id"]);

  if(local_server_id){
    $("#localserverid").val(local_server_id);
  }
  if (remote_server_id) {
    $("#remoteserverid").val(remote_server_id);
  }
  if(path_id){
    $("#pathid").val(path_id);
  }
  if(width_id){
    $("#widthid").val(width_id);
  }
  if(height_id){
    $("#heightid").val(height_id);
  }
}

$(document).ready(function(){
	restore_options();

	$("#saveButton").click(function(){
		save_options();
	});
});
