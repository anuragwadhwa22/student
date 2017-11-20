let i=0;

function add_new()
{
	i=1;
}
function validate()
{
	if(i==1)
	{
		add_row();
		
	}
}
function RESET()
{
	document.getElementById("form1").reset();
	
}
function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 let fname=document.getElementById("fname_row"+no);
 let lname=document.getElementById("lname_row"+no);
 let roll=document.getElementById("roll_row"+no);
 let stream=document.getElementById("stream_row"+no);
 let passout=document.getElementById("pass_row"+no);

 let fname_data=fname.innerHTML;
 let lname_data=lname.innerHTML;
 let roll_data=roll.innerHTML;
 let stream_data=stream.innerHTML;
 let passout_data=passout.innerHTML;
	
 fname.innerHTML="<input type='text' id='fname_text"+no+"' value='"+fname_data+"'>";
 lname.innerHTML="<input type='text' id='lname_text"+no+"' value='"+lname_data+"'>";
 roll.innerHTML="<input type='text' id='roll_text"+no+"' value='"+roll_data+"'>";
 stream.innerHTML="<input type='text' id='stream_text"+no+"' value='"+stream_data+"'>";
 passout.innerHTML="<input type='text' id='passout_text"+no+"' value='"+passout_data+"'>";
}

function save_row(no)
{
 let fname_val=document.getElementById("fname_text"+no).value;
 let lname_val=document.getElementById("lname_text"+no).value;
 let roll_val=document.getElementById("roll_text"+no).value;
 let stream_val=document.getElementById("stream_text"+no).value;
 let passout_val=document.getElementById("passout_text"+no).value;

     let pttrn1=/^[a-zA-Z\s]+$/;
    let pttrn3=/^[0-9]{10}$/;
    let pttrn2=/^[0-9]{4}$/;


 if(fname_val == "")
	{
	fname();
	return false;
	}
	
else if(lname_val == "")
	{
		lname();
		return false;
	
	}
else if(roll_val == "")
	{
		roll();
		return false;
	}	
else if(stream_val == "")
	{
	stream();
	return false;

	}
else if(passout_val == "")
	{
	pass();
	return false;	
	}
else if(!pttrn1.test(fname_val))
	{
			fname_pt();
	return false;

	}
else if(!pttrn1.test(lname_val))
	{
			lname_pt();
		return false;
	
	}	
else if(!pttrn3.test(roll_val))
	{
				roll_pt();
		return false;

	}	
else if(!pttrn1.test(stream_val))
	{
	stream_pt();
	return false;

	}
else if(!pttrn2.test(passout_val))
	{
	pass_pt();
	return false;	
	}
else{

 document.getElementById("fname_row"+no).innerHTML=fname_val;
 document.getElementById("lname_row"+no).innerHTML=lname_val;
 document.getElementById("roll_row"+no).innerHTML=roll_val;
 document.getElementById("stream_row"+no).innerHTML=stream_val;
 document.getElementById("pass_row"+no).innerHTML=passout_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
	let new_fname=document.getElementById("firstname").value;
 let new_lname=document.getElementById("lastname").value;
 let new_roll=document.getElementById("tel").value;
 let new_stream=document.getElementById("stream").value;
 let new_pass=document.getElementById("tell").value;
 
    let pttrn1=/^[a-zA-Z\s]+$/;
    let pttrn3=/^[0-9]{10}$/;
    let pttrn2=/^[0-9]{4}$/;

if(new_fname == "")
	{
	fname();
	return false;
	}
	
else if(new_lname == "")
	{
		lname();
		return false;
	
	}
else if(new_roll == "")
	{
		roll();
		return false;
	}	
else if(new_stream == "")
	{
	stream();
	return false;

	}
else if(new_pass == "")
	{
	pass();
	return false;	
	}
else if(!pttrn1.test(new_fname))
	{
			fname_pt();
	return false;

	}
else if(!pttrn1.test(new_lname))
	{
			lname_pt();
		return false;
	
	}	
else if(!pttrn3.test(new_roll))
	{
				roll_pt();
		return false;

	}	
else if(!pttrn1.test(new_stream))
	{
	stream_pt();
	return false;

	}
else if(!pttrn2.test(new_pass))
	{
	pass_pt();
	return false;	
	}
else{
	
 let table=document.getElementById("data_table");
 let table_len=(table.rows.length);
 let row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='fname_row"+table_len+"'>"+new_fname+"</td><td id='lname_row"+table_len+"'>"+new_lname+"</td><td id='roll_row"+table_len+"'>"+new_roll+"</td><td id='stream_row"+table_len+"'>"+new_stream+"</td><td id='pass_row"+table_len+"'>"+new_pass+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='btn btn-success' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='btn btn-success' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='btn btn-success' onclick='delete_row("+table_len+")'></td></tr>";
RESET();
window.alert("New Student Data added to table Successfully!!");


 document.getElementById("new_fname").value="";
 document.getElementById("new_lname").value="";
 document.getElementById("new_roll").value="";
  document.getElementById("new_stream").value="";
   document.getElementById("new_pass").value="";



}
}

let fname = ()=> { 
   window.alert("FIRST NAME CANNOT BE NULL");
} 

let lname = ()=> { 
window.alert("LAST NAME CANNOT BE NULL");
} 

let roll = ()=> { 
  window.alert("ROLLNO CANNOT BE NULL");
} 

let stream = ()=> { 
   window.alert("STREAM CANNOT BE NULL");
} 

let pass = ()=> { 
 	window.alert("PASSOUT YEAR CANNOT BE NULL");
}   
let fname_pt = ()=> { 
  	window.alert("ENTER FIRST NAME IN CORRECT FORMAT eg. amit");
} 

let lname_pt = ()=> { 

	window.alert("ENTER LAST NAME IN CORRECT FORMAT");

} 

let roll_pt = ()=> { 
 	window.alert("ENTER ROLL NO IN CORRECT FORMAT eg. 1510991112");
} 

let stream_pt = ()=> { 
	window.alert("ENTER STREAM IN CORRECT FORMAT");
} 

let pass_pt = ()=> { 
	window.alert("ENTER PASSOUT YEAR IN CORRECT FORMAT eg. 2019");
}