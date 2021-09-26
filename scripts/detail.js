var toDate;
var fromDate

 function GetDays(){
    var adultNumber =document.getElementById("adult").value;
    var toDate= new Date(document.getElementById("todate").value);
    var fromDate = new Date(document.getElementById("date").value);
    return parseInt((toDate - fromDate) / (24 * 3600 * 1000))*adultNumber*1000;

 }
 function call(){
    var adultNumber =document.getElementById("adult").value;
    var toDate= new Date(document.getElementById("todate").value);
    var fromDate = new Date(document.getElementById("date").value);
    
    if(toDate>fromDate && adultNumber >0  ){
        document.getElementById("total").value="Rs."+ GetDays();
        

    }  else{
        document.getElementById("total").value="Rs.0";
        
    }
    }  