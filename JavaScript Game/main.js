var b = document.getElementById("board");
var m=document.getElementById("match");
$('#start').animate({
	'margin-left': '45%'
},2000)
$('#start').on('click', function(){
	$('#start').animate({
		'margin-left': '100%'
	},1000)
	game();
})

var tSeconds;
var mMatch=0;
var time, minute, seconds, hour;
var xyz=1000;

var tile = [
	{ img: "images/tile 1.jpg", id: 1 },
	{ img: "images/tile 2.jpg", id: 2 },
	{ img: "images/tile 3.jpg", id: 3 },
	{ img: "images/tile 4.jpg", id: 4 },
	{ img: "images/tile 5.jpg", id: 5 },
	{ img: "images/tile 6.jpg", id: 6 },
	{ img: "images/tile 7.jpg", id: 7 },
	{ img: "images/tile 8.jpg", id: 8 }
]

var tileDup = [];
var memory = [];
var memoryIds= [];
for (var i = 0; i < tile.length; i++) {
	tileDup.push(tile[i]);
	tileDup.push(tile[i]);
	
}

    function shuffle(tileDup){
	var j, x, i;
	for (var i=0; i<tileDup.length; i++){
	j=Math.floor(Math.random()*i);
	x=tileDup[i];
	tileDup[i]=tileDup[j];
	tileDup[j]=x;
	}
    }

shuffle(tileDup);
var t=document.getElementsByClassName("tile");
function game(){
	minute = 0;
	seconds = 0;
	tSeconds=0;
	for (var i = 0; i < tileDup.length; i++) {
		var content = "<div class='tile' id='" + i + "' data-id='" + tileDup[i].id + "'><img src='" + tileDup[i].img + "'><img src='images/cover1.jpg' class='cover'></div>";
		b.insertAdjacentHTML('beforeend', content);
	}
	enableClick();
	time = setInterval(timeStart, 1000);
	function timeStart(){
		tSeconds++;
		hour = Math.floor(tSeconds/3600);
		minute = Math.floor((tSeconds-hour*3600)/60);
		seconds = tSeconds-(hour*3600+minute*60);
		if (seconds<10) {
		seconds= "0" + seconds;
		}
		document.getElementById("time").innerHTML = minute+ ":" + seconds;
	}
	$('.tile').each(function(){
	xyz-=60;
	$(this).hide().fadeIn(xyz)
	
},1000)
}

var a =document.getElementById("flip");
var flip=0;
var tile= document.getElementsByClassName("card");
function enableClick(){
	for (var i=0; i<t.length; i++){
		t[i].addEventListener('click', tileClick);
	}
}
function tileClick(){
	this.lastChild.classList.add("hide");
	memory
	flip++;
	a.innerHTML=flip;

	match(this);

}

function match(t) {
	var c = {
		id: t.getAttribute("id"),
		dId: t.getAttribute("data-id")
	}
	memory.push(c)
	if(memory.length == 2){
		if(memory[0].dId == memory[1].dId){
			// alert("match");
			memory.length = 0;
			mMatch++;
			m.innerHTML=mMatch;
		if (mMatch==8){
		  setTimeout(function() {
		  	$('#start').animate({
		  		'margin-left': '45%'
		  	},1500)
			b.innerHTML = "";
			flip=0;
			mMatch=0;
			m.innerHTML = "";
			a.innerHTML = "";
			clearInterval(time);
			document.getElementById("time").innerHTML="";
			
			},1500)
	}
		} else {
			// alert("no match");
			setTimeout(function() {
				var f = document.getElementById(memory[0].id);
				var s = document.getElementById(memory[1].id);
				f.lastChild.classList.remove("hide");
				s.lastChild.classList.remove("hide");
				memory.length = 0;
				}, 700)
		}
	}
	console.log(memory);
}

