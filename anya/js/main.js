
const btnMEnu = document.getElementById('js-menu-collapse')

function openMenu(){
  const CollapseMenudisplay = window.getComputedStyle(btnMEnu).display;
  var status = CollapseMenudisplay ;
    if(status=== "none"){
      document.getElementById('js-menu-collapse').style.display = "block";
      status = false;
    }else{
      document.getElementById('js-menu-collapse').style.display = "none";
      status = true;
    } 
}

