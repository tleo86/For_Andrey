var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var cls = document.getElementsByClassName("close")[0];
     btn.onclick = function()
     {
	  modal.style.display = "block";
     }

        cls.onclick = function(){
	    modal.style.display = "none";
}

var datecrt = new Date();
var dd = datecrt.getDate();

var mm = datecrt.getMonth()+1; 
var yyyy = datecrt.getFullYear();
      if(dd<10) {
             dd='0'+dd;
      } 

       if(mm<10) {
    mm='0'+mm;
      } 
datecrt = yyyy+'/'+mm+'/'+dd;