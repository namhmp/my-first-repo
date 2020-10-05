function biggerText(){
	var temp = document.getElementById("txaBox");
	var style = window.getComputedStyle(temp, null).getPropertyValue("font-size");
	var fontSize = parseFloat(style);
	setInterval(function(){
		fontSize = fontSize + 2;
		temp.style.fontSize = fontSize + "pt";
	},500);
	
};
function pigLatin() {
    var text = document.getElementById('txaBox').value;
    var arr = text.split(" ");
    arr = Array.from(arr).map(x => {
        if(isVowel(x.charAt(0))) {
            return x + "ay";
        }
        else {
            return x.slice(1) + x.charAt(0) + "ay";
        }
    });
    document.getElementById('txaBox').value = Array.from(arr).join(" ");
}

function malkovitch() {
    var text = document.getElementById('txaBox').value;
    var arr = text.split(" ");
    arr = Array.from(arr).map(x => {
        if(x.length >= 5) {
            return "Malkovich";
        }
        else
            return x;
    });
    document.getElementById('txaBox').value = Array.from(arr).join(" ");
}
function isVowel(char) {
    let Vowels = ['A', 'E', 'I', 'O', 'U'];
    if (char.length > 1 || char.length === 0) {
        return false;
    }
    else {
        return Vowels.indexOf(char.toUpperCase()) >= 0;
    }
}

window.onload = function() {
	document.getElementById('btnBigger').onclick = biggerText;
	document.getElementById('btnPig').onclick = pigLatin;
	document.getElementById('btnMalko').onclick = malkovitch;
	
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
