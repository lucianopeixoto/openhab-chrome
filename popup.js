document.addEventListener('DOMContentLoaded',
  function applysettings() {
    document.getElementById('MyFrameContainer').innerHTML = '<iframe style="border:none;" src="' + chrome.storage.sync.get(["active_server"]] + chrome.storage.sync.get(["path_id"]) + '" width=100% height=100%></iframe>';
    document.getElementById('bod').style.width = chrome.storage.sync.get(["width_id"]);
    document.getElementById('bod').style.height = chrome.storage.sync.get(["height_id"]);
    if (null == chrome.storage.sync.get(["local_server"])) {
      document.getElementById('setup').innerHTML = '<p style="padding:20px;background:#ccc;">Don\'t forget to <a href="options.html">Setup</a> the extension!</p>';
    }
  }
)
