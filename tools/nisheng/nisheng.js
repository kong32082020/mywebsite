
			//呀、呢、吗、啊、哦、噢、哼、哎、了、啊
			//1、2、3、4、5、6、7、8、9、10
			//! ？，。: ;
			//A,B,C,D,E,F
			
			function fencode(){
				var debug = 0;
				var text = document.getElementById( 'from' ).value;
				var basedtxt = "";
				for (var i=0;i < text.length;i++)
				{
					var tmp = text.substr(i,1);
					console.log(i,tmp,0);
					tmp = escape(tmp);
					console.log(i,tmp,1);
					tmp = tmp.slice(2);
					console.log(i,tmp,2);
					basedtxt = basedtxt + tmp;
					console.log(i,basedtxt,3);
					var newbase = "";
					for (var j=0;j < basedtxt.length;j++)
					{
						var tmp2 = basedtxt.substr(j,1);
						switch(tmp2){
							case "1":
								newbase = newbase + "呀";
								break;
							case "2":
								newbase = newbase + "呢";
								break;
							case "3":
								newbase = newbase + "吗";
								break;
							case "4":
								newbase = newbase + "啊";
								break;
							case "5":
								newbase = newbase + "哦";
								break;
							case "6":
								newbase = newbase + "噢";
								break;
							case "7":
								newbase = newbase + "哼";
								break;
							case "8":
								newbase = newbase + "哎";
								break;
							case "9":
								newbase = newbase + "了";
								break;
							case "0":
								newbase = newbase + "唉";
								break;
							case "A":
								newbase = newbase + "，";
								break;
							case "B":
								newbase = newbase + "。";
								break;
							case "C":
								newbase = newbase + "：";
								break;
							case "D":
								newbase = newbase + "！";
								break;
							case "E":
								newbase = newbase + "？";
								break;
							case "F":
								newbase = newbase + "；";
								break;
							default:
								newbase = newbase + tmp2
								
						}
						
					}
				}
				document.getElementById("to").value = newbase;
			}
			function fdecode(){
				var text = document.getElementById( 'to' ).value;
				var newbase = "";
				for (var j=0;j < text.length;j++)
					{
						var tmp2 = text.substr(j,1);
						console.log(j,tmp2);
						switch(tmp2){
							case "呀":
								newbase = newbase + "1";
								break;
							case "呢":
								newbase = newbase + "2";
								break;
							case "吗":
								newbase = newbase + "3";
								break;
							case "啊":
								newbase = newbase + "4";
								break;
							case "哦":
								newbase = newbase + "5";
								break;
							case "噢":
								newbase = newbase + "6";
								break;
							case "哼":
								newbase = newbase + "7";
								break;
							case "哎":
								newbase = newbase + "8";
								break;
							case "了":
								newbase = newbase + "9";
								break;
							case "唉":
								newbase = newbase + "0";
								break;
							case "，":
								newbase = newbase + "a";
								break;
							case "。":
								newbase = newbase + "b";
								break;
							case "：":
								newbase = newbase + "c";
								break;
							case "！":
								newbase = newbase + "d";
								break;
							case "？":
								newbase = newbase + "e";
								break;
							case "；":
								newbase = newbase + "f";
								break;
							default:
								newbase = newbase + tmp2
						}
						
					}
				console.log(newbase);
				var finalt = "";
				for(var i=0;i<newbase.length;i=i+4)
				{
					var newtxt = newbase.substr(i,4)
					console.log(j,newtxt);
					newtxt = "%u" + newtxt;
					finalt = finalt + newtxt;
				}
				console.log(finalt);
				finalt = unescape(finalt);
				console.log(finalt);
				document.getElementById("from").value = finalt;
			}