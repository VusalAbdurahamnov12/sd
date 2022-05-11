
  var rIndex,
  table = document.getElementById("table");

// check the empty input
function checkEmptyInput()
{
  var isEmpty = false,
      fname = document.getElementById("fname").value,
      lname = document.getElementById("lname").value,
      age = document.getElementById("age").value;

  if(fname === ""){
      alert("First Name Cannot Be Empty");
      isEmpty = true;
  }
  else if(lname === ""){
      alert("Last Name Cannot Be Empty");
      isEmpty = true;
  }
  else if(age === ""){
      alert("Age Cannot Be Empty");
      isEmpty = true;
  }
  else if(age < 0 ){
    alert("Age Cannot Be Negative");
    isEmpty = true;
}
  
  return isEmpty;
}

function addHtmlTableRow()
{
  // get the table by id
  // create a new row and cells
  // get value from input text
  // set the values into row cell's
  if(!checkEmptyInput()){
  var newRow = table.insertRow(table.length),
      cell1 = newRow.insertCell(0),
      cell2 = newRow.insertCell(1),
      cell3 = newRow.insertCell(2),
      cell4 = newRow.insertCell(3),
      cell5 = newRow.insertCell(4),
      cell6 = newRow.insertCell(5),
      fname = document.getElementById("fname").value,
      lname = document.getElementById("lname").value,
      age = document.getElementById("age").value;
      var btn1 = document.createElement("BUTTON");     

  cell1.classList.add("count");
  cell2.innerHTML = fname;
  cell3.innerHTML = lname;
  cell4.innerHTML = age;
  cell5.innerHTML="Delete";
  cell6.innerHTML="EDIT";
  selectedRowToInput();
}
}

// display selected row data into input text
function selectedRowToInput()
{
  
  for(var i = 1; i < table.rows.length; i++)
  {
      table.rows[i].onclick = function()
      {
        // get the seected row index
        rIndex = this.rowIndex;
        document.getElementById("fname").value = this.cells[0].innerHTML;
        document.getElementById("lname").value = this.cells[1].innerHTML;
        document.getElementById("age").value = this.cells[2].innerHTML;
      };
  }
}
selectedRowToInput();

function editHtmlTbleSelectedRow()
{
  var fname = document.getElementById("fname").value,
      lname = document.getElementById("lname").value,
      age = document.getElementById("age").value;
 if(!checkEmptyInput()){
  table.rows[rIndex].cells[0].innerHTML = fname;
  table.rows[rIndex].cells[1].innerHTML = lname;
  table.rows[rIndex].cells[2].innerHTML = age;
}
}

function removeSelectedRow()
{
  table.deleteRow(rIndex);
  // clear input text
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("age").value = "";
}
//Search
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }