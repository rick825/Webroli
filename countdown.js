

    var hr;
    var min;
    var sec;
    var flag = 0;

var interval;

	
function startTimer(){
	clearInterval(interval);
	document.getElementById("dhead").style.display= "none";
	document.getElementById("hdiv").style.display= "none";
	document.getElementById("mdiv").style.display= "none";
	document.getElementById("sdiv").style.display= "none";	
	document.getElementById("timedisplay").style.display = "flex";
	 hr = Number(document.getElementById("hour").value);
	 min = Number(document.getElementById("min").value);
	 sec = Number(document.getElementById("sec").value);

	if(hr != 0){
		min = min + hr * 60;
	}

	sec = sec + min * 60;
   
   interval = setInterval(tick, 1000);
   
}

function tick(){
	var timeDisplay = document.getElementById("tdisplay");
    
    
	var mins=Math.floor(sec/60);
	var hrs= Math.floor(mins/60);
	var second=sec-(mins*60);
	if(hrs !=0 ){
		mins =   mins - hrs*60 ;
	}
	

	if (second < 10) {
		second="0"+second;
	}

	if(mins < 10){
		mins ="0" + mins;
	}

	if(hrs < 10){
		hrs = "0" + hrs;
	}

	var timermsg = hrs.toString() + ":" + mins.toString() + ":" + second;
	timeDisplay.innerHTML= timermsg; 


    
	if(sec==0){
		clearInterval(interval);
		flag = document.getElementById("hour").value +  document.getElementById("min").value +  document.getElementById("sec").value;
	document.getElementById("dhead").style.display = "flex";
	if(flag == 0){
		document.getElementById("dhead").innerHTML="Please Enter the time you wanna set !";
	}else{
		document.getElementById("dhead").innerHTML="It's time";
		document.getElementById("tdisplay").innerHTML="00:00:00";
		prompt("Its Time");
	}
		console.log("sec is running");
	}



	sec--;

	console.log("hrs:"+hrs);
	console.log("min:"+mins);
	console.log("sec:"+second);
  
	
}

function resetTimer(){
	clearInterval(interval);
	document.getElementById("tdisplay").innerHTML="00:00:00";
   	document.getElementById("dhead").style.display = "none";
   	document.getElementById("hdiv").style.display = "block";
	document.getElementById("mdiv").style.display = "block";
	document.getElementById("sdiv").style.display = "block";	
	document.getElementById("timedisplay").style.display = "none";

}

