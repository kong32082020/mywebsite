var txtbox1 = document.getElementById("from");
var txtbox2 = document.getElementById("to");
function fencode(){
	var text = document.getElementById( 'from' ).value;
	var basedtxt = escape(text);
	var finalresult = "";
	for (var i=0;i < basedtxt.length;i++)
	{
		var tmp = basedtxt.substr(i,1);
		if(tmp=="%") {
finalresult = finalresult + "\\";
		} else {
finalresult = finalresult + tmp;
		}
	}
	document.getElementById("to").value = finalresult;
	hs_def2()
};
function fdecode(){
	var finalresult = "";
	var basedtxt = "";
	var text = document.getElementById( 'to' ).value;
	for (var i=0;i < text.length;i++)
	{
		var tmp = text.substr(i,1);
		if(tmp=="\\") {
basedtxt = basedtxt + "%";
		} else {
basedtxt = basedtxt + tmp;
		}
	}
	var finalresult = unescape(basedtxt);
	document.getElementById("from").value = finalresult;
	hs_def1()
};