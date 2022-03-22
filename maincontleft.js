const fade=()=>{

   const darkbtn=document.querySelector('.dark');
   const lightbtn=document.querySelector('.light');

   const body=document.querySelector('body');

    darkbtn.addEventListener('click',()=>{
      body.classList.remove('lighton');
      body.classList.add('smooth');
      lightbtn.classList.remove('brightdl');
      darkbtn.classList.remove('fadedl');
      
    });

    lightbtn.addEventListener('click',()=>{
    body.classList.add('lighton');
    darkbtn.classList.add('fadedl');
    lightbtn.classList.add('brightdl');
    });

  }

  const appoption=()=>{
    const op1 = document.querySelector('.appop1');
    const op2 = document.querySelector('.appop2');
    const op3 = document.querySelector('.appop3');
    const op4 = document.querySelector('.appop4');
    const op5 = document.querySelector('.appop5');

    const app1 = document.querySelector('.appm1');
    const app2 = document.querySelector('.appm2');
    const app3 = document.querySelector('.appm3');
    const app4 = document.querySelector('.appm4');
    const app5 = document.querySelector('.appm5');

    op1.addEventListener('click',()=>{
      app1.classList.remove('apphide');
      app2.classList.add('apphide');

      app3.classList.add('apphide');
      app4.classList.add('apphide');
      app5.classList.add('apphide');
    });

    op2.addEventListener('click',()=>{
      app2.classList.remove('apphide');
      app2.classList.add('appshow'); 

      app1.classList.add('apphide');
      app3.classList.add('apphide');
      app4.classList.add('apphide');
      app5.classList.add('apphide');
    });

    op3.addEventListener('click',()=>{
      app3.classList.remove('apphide');
      app3.classList.add('appshow');

       app1.classList.add('apphide');
      app2.classList.add('apphide');
      app4.classList.add('apphide');
      app5.classList.add('apphide');
    });

    op4.addEventListener('click',()=>{
       app4.classList.remove('apphide');
      app4.classList.add('appshow');

       app1.classList.add('apphide');
      app2.classList.add('apphide');
      app3.classList.add('apphide');
      app5.classList.add('apphide');
    });


    op5.addEventListener('click',()=>{
       app5.classList.remove('apphide');
      app5.classList.add('appshow');

       app1.classList.add('apphide');
      app2.classList.add('apphide');
      app3.classList.add('apphide');
      app4.classList.add('apphide');
    });


  }

window.onload = function(){

  // for countdown
  document.getElementById("tdisplay").innerHTML="00:00:00";
     document.getElementById("timedisplay").style.display = "none";
     hr = 0;
     min = 0;
     sec = 0;
     // end for countdown

		var day = document.getElementById("dy");
         var hour = document.getElementById("hr");
         var minute = document.getElementById("mn");
		var amp = document.getElementById("ap");
        var date = document.getElementById("dt");
        var month = document.getElementById("mnth");
           


    var hrs = setInterval(thour,1000);
    var mins = setInterval(tmin,1000);
    var ampm = setInterval(tapm,1000); 
    // var dts  = setInterval(tdts,1000);
 
 // for hrs
 function thour(){
 var d =  new Date();
 var zero = "";
 var tohr = "";
 var hr = d.getHours();

 if(hr>12){
 	zero += hr-12;
  if(zero<10) tohr += "0" + zero;
  else tohr += zero;
 }else{
 	if(hr<10) tohr += "0" + hr;
 	else tohr+= hr;
  console.log(hr);
 }

 hour.innerHTML = tohr;

}

// for min
function tmin(){
	var d = new Date();
	var zero =  "";
	var tomin = "";

	var min = d.getMinutes();
		if(min<10) tomin += '0' + min;
				else tomin += min;
				minute.innerHTML= tomin;
}

 // am/pm
			function tapm(){
				var d= new Date();
				var toap="";
				var ap=d.getHours();
				if(ap < 12) toap += "AM";
				else toap += "PM";

				amp.innerHTML = toap;
		
  	
			}
         
       
	// for day
		(function(){
				var days =  ['Sunday','Monday','Tueday','Wednesday','Thursday','Friday','Saturday'];

				Date.prototype.getDayName = function(){
					return days[this.getDay()];};
			})();

			var d= new Date();
				var dy=d.getDayName();
			  day.innerHTML=dy;



 //for date
 (function(){
  var d = new Date();
var dat = d.getDate();
date.innerHTML = dat;
 })();
 
//for month
   (function(){


		var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var d = new Date();
var mth= monthNames[d.getMonth()];

month.innerHTML = mth;
  })();



   }


  