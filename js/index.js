
var a= document.getElementById("closer")
function closer(element) {

    
    element.style.bottom="-10px"
    element.style.right="-10px"
    var hamburgerMenu=document.getElementById("hidden")
    hamburgerMenu.style.display="none"
    // hamburgerMenu.style.height="0px"
    // hamburgerMenu.style.width="0px"


    
}

function hamburger(element){

    var hidden= document.getElementById("hidden")
    hidden.style.display='block'
    a.style.bottom="30px"
    a.style.right="89px"
    element.style.display="block"
    // element.style.height="300px"
    // element.style.width="300px"
   


}