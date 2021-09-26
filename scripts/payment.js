function pay(){
    var data = document.getElementById("login-button");

    if (data.innerHTML == "LOGOUT"){

        
        alert("Hi your booking is sucessful");
    }else{

        document.getElementById("m1").setAttribute("disabled",true);
    }
  } 

  