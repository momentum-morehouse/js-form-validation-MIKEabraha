console.log('Add validation!');
function emptyFields() {
let customer = document.querySelector('name');
let cyear = document.querySelector('#car-year');
let cmake = document.querySelector('#car-make');
let cmodel = document.querySelector('#car-model');
let pdate = document.querySelector('#start-date');
let amtdays = document.querySelector('#days');
let cc = document.querySelector('#credit-card-field');
let cCvv = document.querySelector('#cvv');
let ccDate = document.querySelector('Expiration-date');



}

emptyfields();

function valida(name) {
//letinput = document.querySelector ('name');

if (ame.length === 0) {
    document.name.style.background = 'Red';
    } else {
        alert("message");
        return false;

        document.name.style.background = 'white';


    }

}


function redTest() {
 let customername = document.getElementById("name");
 if (customername.length === 0) {
   //this makes the box red by itself but isnt working inside the function
   customername.classList.add("input-valid");
  }  else  {
   //alert("Incomplete Form");
   customername.classList.add("input-invalid");
  }
 
 return ;  
 }

 redTest();