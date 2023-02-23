let id = 0;

// document.getElementById("menu-form").addEventListener("submit", function(event) 
// {
//     event.preventDefault(); // Don't attempt to post form to server.
  
//     let recipe = document.getElementById("task").value;
//     let day = document.getElementById("day").value;
//     let cell = document.querySelectorAll("#table td")[day];
//     let row = table.insertRow(-1);
  
//     cell.innerHTML += "<p>" + recipe + "</p>"; // Update the chosen day cell.
//     newCell.setAttribute('id', id++);  // gives each item a new id #
//     document.getElementById("task").value = ''; // Clear the input.

    
//   });

document.getElementById("submit").onclick=function()
{
    document.getElementById("table");
      
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var date = row.insertCell(0);
    var day = row.insertCell(1);
    var menu = row.insertCell(2);
    date.innerHTML = document.getElementById("date").value;
    day.innerHTML = document.getElementById("day").value;
    menu.innerHTML = document.getElementById("menu").value;
      
      return false;
}


//   function addRow() 
//   {
//     let table = document.getElementById("myTable");
   
//     // Create a row using the inserRow() method and
//     // specify the index where you want to add the row
//     let row = table.insertRow(-1); // We are adding at the end
 
//     // Create table cells
//     let c1 = row.insertCell(0);
//     let c2 = row.insertCell(1);
//     let c3 = row.insertCell(2);
 
//     // Add data to c1 and c2
//     c1.innerText = "Elon"
//     c2.innerText = 45
//     c3.innerText = "Houston"
// }


//document.getElementById('menu-form').addEventListener('click', () =>{
//     let removeCell = document.getElementById('remove').value;  //referemces back to the input element in HTML
//     let cellToRemove = document.getElementById(removeCell);  //reference back to the variable we just created
//     cellToRemove.parentNode.removeChild(cellToRemove); //use the child to find the parent then remove the child
//     document.getElementById('remove').value = '';   //resets the input box to be blank
// });




