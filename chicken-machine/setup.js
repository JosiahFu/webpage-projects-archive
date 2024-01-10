var x;
var y;
var bars = {"space":0,"entrance":1,"exit":1,"dropper":3,"mixer":4,"oven":2,"remover":4,"scanner":3,"xray":4};
var blocks;
var changed = false;
var altXrays = [
	"xrays/monkey.jpg",
	"xrays/fish.jpg",
	"xrays/human.jpg",
	"xrays/dog.jpg",
	"xrays/horse.jpg"
];

function bar(num) {
	var c;
	var output = "";
	for(c=0;c<num;c++) {
		output += "<div class=\"bar-"+(c+1).toString()+"\"></div>";
	}
	return(output);
}


setTimeout(function(){
	blocks = document.getElementById("container").children;
	
	for(x of blocks){
		x.classList.add("machine");
		
		x.innerHTML = "<div class=\"machine-inner\"></div>";
		
		y = x.children[0];
		
		y.innerHTML += bar(bars[x.classList[0]]);
		
		if(x.classList[0] != "blank"){y.innerHTML += "<div class=\"belt\"><div class=\"wheel\"></div><div class=\"wheel\"></div><div class=\"wheel\"></div><div class=\"wheel\"></div><div class=\"wheel\"></div></div>";}
		
		if(x.classList[0] == "remover"){changed = true;}
		
		if(changed){y.innerHTML += "<div class=\"bowl changed\"></div>";} else{y.innerHTML += "<div class=\"bowl\"></div>";}
	}
	
	document.getElementById("container").style.width = (blocks.length*450-450).toString()+"px";
	
}, 0);



setTimeout(function() {
	y = document.getElementsByClassName("xray")[0].children[0];
	y.children[2].classList.add("lit");
	
	setInterval(function(){
		if(Math.floor(Math.random()*10) == 0) {
			y.children[0].style.backgroundImage = "url("+altXrays[Math.floor(Math.random()*altXrays.length)]+")";
			y.children[2].classList.remove("lit");
			y.children[3].classList.add("lit");
		} else {
			y.children[0].style.backgroundImage = "url(xrays/chicken.jpg)";
			y.children[2].classList.add("lit");
			y.children[3].classList.remove("lit");
		}
	}, 4500);
}, 50);