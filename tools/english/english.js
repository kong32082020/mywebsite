function asentence(){
	var sentence= "";
	sentence = firstword()+" ";
	var i=0;
	for(i=0;i<rNum(2,10);i++){
		sentence = sentence + aword() + " ";
	}
	sentence = sentence.substr(0,sentence.length-1) + ".";
	return sentence;
};
function apassage(){
	var passage="  "
	for(var i=0;i<=rNum(8,20);i++)
	{
		passage = passage + aparagraph() + String.fromCharCode(10) +"  ";
	}
	return passage;
};
function aparagraph(){
	var i=0;
	var paragraph = "";
	for(i=0;i<=rNum(10,30);i++)
	{
		paragraph = paragraph + asentence();
	}
	return paragraph;
};
function firstword(){
	var word = "";
	switch(rNum(1,3)){
		case 1:
word = UPfuyin()+yuanyin()+fuyin();
		case 2:
word = UPfyzu()+yuanyin()+fuyin();
		case 3:
word = UPyuanyin()+fuyin();
	return word;
	}
}
function aword(){
	var i=rNum(0,9);
	if(i<7){
		return asimpleword();
	}
	else
	{
		return amixword();
	}
};
function asimpleword(){
	/*
		辅元辅 yip
		辅辅元辅 trib (tr,dr)
		元辅 al
	*/
	var word = "";
	var tmp=rNum(1,3);
	switch(tmp){
		case 1:
word = fuyin()+yuanyin()+fuyin();
break;
		case 2:
word = fyzu()+yuanyin()+fuyin();
break;
		case 3:
word = yuanyin()+fuyin();
break;
	}
	return word;
}
function amixword(){
	var mixword="";
	for(var i=0;i<=rNum(2,3);i++)
	{
		mixword = mixword + asimpleword();
	}
	return mixword;
};
function fyzu(){
	var fyzus=["tr","dr","qu"]
	return fyzus[rNum(0,2)]
};
function UPfyzu(){
	var fyzus=["Tr","Dr","Qu"]
	return fyzus[rNum(0,2)]
};
function yuanyin(){
	var result="";
	var resultascii = 0;
	var yys = [97,101,105,111,117];
	resultascii = yys[rNum(0,4)];
	result = String.fromCharCode(resultascii);
	return result;
};
function UPyuanyin(){
	var result="";
	var resultascii = 0;
	var yys = [97,101,105,111,117];
	resultascii = yys[rNum(0,4)]-32;
	result = String.fromCharCode(resultascii);
	return result;
};
function fuyin(){
	var result="";
	var resultascii = 0;
	var fys = [98,99,100,102,103,104,106,107,108,109,110,112,114,115,116,118,119,120,121,122];
	resultascii = fys[rNum(0,19)];
	result = String.fromCharCode(resultascii);
	return result;
};
function UPfuyin(){
	var result="";
	var resultascii = 0;
	var fys = [98,99,100,102,103,104,106,107,108,109,110,112,114,115,116,118,119,120,121,122];
	resultascii = fys[rNum(0,20)]-32;
	result = String.fromCharCode(resultascii);
	return result;
};
function rNum(minNum,maxNum){ 
	switch(arguments.length){ 
		case 1: 
return parseInt(Math.random()*minNum+1,10); 
		break; 
		case 2: 
return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
		break; 
default: 
	return 0; 
break; 
	} 
} 