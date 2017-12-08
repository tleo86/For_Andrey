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

var rIndex;
                table = document.getElementById("table");
var cnt = 1;               
var request;
				if (window.XMLHttpRequest) {
				 request = new XMLHttpRequest();
				}else {
				 request = new ActiveXObject( "Microsoft.XMLHTTP");
				}
				 request.open('GET','second.json');
				 request.onreadystatechange = function(){
				 if ((request.readyState===4) && (request.status===200)){
				 var items = JSON.parse(request.responseText);
				 var output = '<tr>';{
				 for(var key in items){
							 output += '<td>' + cnt + '</td>';
							 output += '<td>' + items[key].Name + '</td>';
							 output += '<td>' + items[key].Quentity + '</td>';
							 output += '<td>' + items[key].Comment + '</td>';
							 output += '<td>' + items[key].Date + '</td>'; 
							 cnt= cnt+1;
							 output += '</tr>';}
					document.getElementById('table').innerHTML+=output;
				       }
				 }
		}
 request.send();

    var nfs='';
	var qfs='';
	var cfs='';
function CheckEmptyInput(){
	var isEmpty = false;
	nfs = document.getElementById('name').value;
	qfs = document.getElementById('quentity').value;
	cfs = document.getElementById('comment').value;
 
 if(nfs === ""){
                    alert("Name Can't Be Empty");
                    isEmpty = true;
                }
                else if(qfs === ""){
                    alert("Quentity Can't Be Empty");
                    isEmpty = true;
                }
              return isEmpty;
 }