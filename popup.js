document.addEventListener('DOMContentLoaded', function (){
	if (localStorage["localurl"] == null) {
		document.getElementById('setup').innerHTML = '<p style="padding:20px;background:#ccc;">Please <a href="options.html">configure</a> the extension!</p>';
	} else {
		document.getElementById('MyFrameContainer').innerHTML=
			'<iframe style="border:none;" src="' + localStorage["localurl"] + '" width=100% height=100%></iframe>';
		document.getElementById('bod').style.width=localStorage["width"];
		document.getElementById('bod').style.height=localStorage["height"];
	}
})