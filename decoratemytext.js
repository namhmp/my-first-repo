function biggerText(){
	var temp = document.getElementById("txaBox");
	var style = window.getComputedStyle(temp, null).getPropertyValue("font-size");
	var fontSize = parseFloat(style);
	setInterval(function(){
		fontSize = fontSize + 2;
		temp.style.fontSize = fontSize + "pt";
	},500);
	
};


window.onload = function() {
	document.getElementById('btnBigger').onclick = biggerText;
	
	document.getElementById('chkBling').onchange = function(){
		var objTxaBox = document.getElementById('txaBox');
		if (document.getElementById('chkBling').checked){
			objTxaBox.className = "fontbold";
			document.body.style.backgroundImage = "url('hundred-dollar-bill.jpg')";
		}
		else 
		{
			objTxaBox.className = "fontnormal";
			document.body.style.backgroundImage = "";
		}
		
		
	};
}
