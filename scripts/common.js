
//Generate Header
var headerCon = document.getElementById("headerContainer");
function GenerateHeader() {
    headerCon.innerHTML = ` <div class="header">
    <div style="margin-left:1%;">
        <a href="index.html"> <img style="height: 60px ;width:60px;  " src="assests/images/logo.png" alt="logo" ></a>
    </div>
    <div style="margin-right:2%; align-self:center;">
        <button type="button" onclick="logot()" onsubmit="return false" class="btn btn-light btn-sm " data-toggle="modal" data-target="#loginModal" id="login-button">LOGIN</button>
        
    </div>             
</div>


<!-- Modal -->
<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="loginModalLabel">Login</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
                <form>
                    <div class="form-group" >
                        <label for="loginInputUsername">Username</label>
                        <input type="text" value="" class="form-control" id="loginInputUsername" aria-describedby="usernameHelp" placeholder="Enter Username" autocomplete="on">
                        <label for="loginInputPassword">Password</label>
                        <input type="password" value="" class="form-control" id="loginInputPassword" aria-describedby="passwordHelp" placeholder="Enter Password" autocomplete="off">
                    </div>
                    <button onsubmit="return false" type="button" id="login1" onclick="loginM()" class="btn btn-primary">Login</button>
                    <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
                </form>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>

`
}
GenerateHeader();

//Footer Generation
var footerCon = document.getElementById("footerContainer");
function GenerateFooter() {
    footerCon.innerHTML = `<div class="footer">
    <div style="margin-left: 2%;">

        
        <button  class="btn btn-primary btn-sm" data-toggle="modal" data-target="#contactModal"  >Contact Us</button>
        
    </div>

    <div style="font-size:x-small; margin-top: 1%;">
        <p>&copy; 2020 ROOM SEARCH PVT. LTD></p>
    </div>
    


    <div style="margin-right: 2%;">
        
    
        <a href="https://www.facebook.com/" target="_blank"><img class="logo" src="assests/images/facebook.png" ></a>
    
    
        <a href="https://www.instagram.com/" target="_blank"><img class="logo" src="assests/images/instagram.png" ></a>
    
    
        <a href="https://twitter.com/" target="_blank"><img class="logo" src="assests/images/twitter.png" ></a>
                
    


    </div>                
</div>        

<!-- Modal -->

<div class="modal fade" id="contactModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Get In Touch</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
 
        <div class="modal-body">
            <p>Thank You for reaching out!!!</p>
                <p>Please enter your email we will get back to you</p>
 
                <form action = "index.html" m ethod="get">
                    <input type="email"  required placeholder="Enter your email">
 
 
                </form>
          </div>
 
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
`
}

GenerateFooter();


//Login Check
function store() {
    var Username = document.getElementById("loginInputUsername").value;
    var password = document.getElementById("loginInputPassword").value;
    localStorage.setItem(Username, password);
  }
  function loginM() {
    var data = document.getElementById("login-button");

    if (data.innerHTML == "LOGIN"){
      
      store();
      var Username = document.getElementById("loginInputUsername").value;
      var password = document.getElementById("loginInputPassword").value;
      if (Username == "admin" && password == "admin") {
        window.alert("Successfully loggedin");
        console.log(document.getElementById("login-button").innerHTML);
        document.getElementById("login-button").innerHTML = "LOGOUT";
        document.getElementById("login-button").setAttribute("data-toggle", "none");
        document.getElementById("loginModal").setAttribute("display","none");
       document.getElementById("m1").removeAttribute("disabled")
        
      }
      

    }


    
  }

  function logot(){
    
      
    var data = document.getElementById("login-button");
    if (data.innerHTML == "LOGOUT") {
        console.log(document.getElementById("login-button").innerHTML);
      data.innerHTML = "LOGIN";
      data.setAttribute("data-toggle", "modal");
      document.getElementById("loginModal").setAttribute("data-dismiss","modal");
      localStorage.clear();
      document.getElementById("m1").disabled="true";
    }
  }
  