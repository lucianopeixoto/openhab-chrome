// This script will create the conext menu for the extension.
chrome.contextMenus.removeAll();

chrome.contextMenus.create({
  id: "radioLocal",
  type: "radio",
  title: "Local URL",
  contexts: ["browser_action"],
  onclick: function() {
    chrome.storage.sync.set({"active_server": chrome.storage.sync.get(["local_server"]);
  }
});

chrome.contextMenus.create({
  id: "radioRemote",
  type: "radio",
  title: "Remote URL",
  contexts: ["browser_action"],
  onclick: function() {
    chrome.storage.sync.set({"active_server": chrome.storage.sync.get(["remote_server"]);
  }
});

// Checks the Local URL radio on the context menu
chrome.contextMenus.update("radioRemote", {
  checked: false
});
chrome.contextMenus.update("radioLocal", {
  checked: true
});
chrome.storage.sync.set({"active_server": chrome.storage.sync.get(["local_server"]);
