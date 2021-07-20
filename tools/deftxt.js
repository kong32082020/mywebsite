var deftxt1 = document.getElementsByClassName("deafulttxt1")
var deftxt2 = document.getElementsByClassName("deafulttxt2")
function hide_def1(){
	deftxt1.item(0).hidden = true;
};
function show_def1(){
	if(document.getElementById("from").value==""){
		deftxt1.item(0).hidden = false;
	}
};
function hide_def2(){
	deftxt2.item(0).hidden = true;
};
function show_def2(){
	if(document.getElementById("to").value==""){
		deftxt2.item(0).hidden = false;
	}
};