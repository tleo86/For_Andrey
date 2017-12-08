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
 
 function addrows(){
	if(!CheckEmptyInput()){
	          var newRow = table.insertRow(table.length),
					cell0 = newRow.insertCell(0),
					cell1 = newRow.insertCell(1),
					cell2 = newRow.insertCell(2),
					cell3 = newRow.insertCell(3),
					cell4 = newRow.insertCell(4),
					nfs = document.getElementById('name').value;
					qfs = document.getElementById('quentity').value;
					cfs = document.getElementById('comment').value;
					cell0.innerHTML = cnt;
					cell1.innerHTML = nfs;
					cell2.innerHTML = qfs;
					cell3.innerHTML = cfs;
					cell4.innerHTML = datecrt;
					selectedRowToInput();
					cls.onclick();
				}
		}
function selectedRowToInput(){
	for(var i = 0; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                      rIndex = this.rowIndex;
                      document.getElementById("name").value = this.cells[0].innerHTML;
                      document.getElementById("quentity").value = this.cells[1].innerHTML;
                      document.getElementById("comment").value = this.cells[2].innerHTML;
                      
                    };
                }
            }
           selectedRowToInput();
           
function removeSelectedRow()
{
                table.deleteRow(rIndex);
                document.getElementById('name').value = "";
                document.getElementById('quentity').value = "";
                document.getElementById('comment').value = "";
}
 
