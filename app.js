const togglenav=()=>{
 const navbar = document.querySelector('.navbar');
 const sidenavtoggle = document.querySelector('.sidenav'); 

 navbar.addEventListener('click',()=>{
   sidenavtoggle.classList.toggle('sidenavtoggle');
 });
}

togglenav();