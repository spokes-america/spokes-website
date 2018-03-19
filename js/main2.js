function toggle_visibility(id) {
  console.log("toggle")
    var e = document.getElementById(id);
    console.log(e.style.display)
   // console.log(e.class); 
   var f =  document.getElementsByClassName("team_d");
   for (i = 0; i < f.length; i++) { 
      f[i].style.display='none';
    }   
  
   if(e.style.display == 'block')
          e.style.display = 'none';
    else{
          e.style.display = 'block';}

}