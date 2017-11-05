var tableBombIt = 	[
					" ",
					"*",
					"1",
					" ",
					"/n",
					" ",
					" ",
					"*",
					"2",
					"/n",
					"1",
					"*",
					" ",
					" ",
					"/n",
					" ",
					"3",
					"*",
					" "
					];

var containerBombIt = document.getElementById("container-bomb-it");
var bombIt = document.getElementById("bomb-it");/*area de juego*/

var drawGameZone = function(array){
	for(i = 0; i< tableBombIt.length; i++){
		var cell = document.createElement("div");/*para que al pasar por cada espacio, cree el div*/
		var enter= document.createElement("br");/*salto de linea*/


		if(array[i] == "1" || array[i]== "2" || array[i]== "3"){
			cell.className = "number";
			cell.innerText = array[i];/*da informacion a la celda o div*/
			cell.onclick = showNumber;
		}else if(array[i] == " "){
			cell.className = "emptySpace";
			cell.onclick= changeColor; /*al dar click en celda vacia, esta cambiara de color*/
		}else if(array[i] == "*"){/*si el indice pasa por */
			cell.className = "bomb";/*;dar nombre de bomb*/
			cell.onclick = boom;
		}else if(array[i] == "/n"){
			bombIt.appendChild(enter);
			continue;
		}

		bombIt.appendChild(cell);
	
}
	/*addBtnRestart();*/
};

var showNumber = function(){
	this.className = "number numberShow";
};

var changeColor = function(){
	this.style.backgroundColor = "#000000";
};
var boom = function(){
	containerBombIt.removeChild(bombIt);
};
	/*containerBombIt.innerHTML = "<img src ="https://media.giphy.com/media/3osxYCsLd9qgsgqpwI/giphy.gif" alt="BOOM!">";
	//gif
	//addBtnRestart();
	

var addBtnRestart  = function(){
	var btnRestart = document.createElement("button");
	btnRestart.innerText = "Restart!!";
	containerBombIt.appendChild(btnRestart);
};*/

drawGameZone(tableBombIt);