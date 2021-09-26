function hideandshow(){
    
    var id1= document.getElementById("js-function");
    if(id1.style.display=="none"){
        id1.style.display="";
        var id2=document.getElementById("chnge");
        id2.innerHTML="View Less";
    }
    else{
        id1.style.display="none";
        var id2=document.getElementById("chnge");
        id2.innerHTML="View More";

    }
}