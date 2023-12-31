// Calculate Function
// Using the Simple Interest=p×r×t/100
let print_interest = document.getElementById('interest');
let print_roi = document.getElementById('roi');


// Calculate Function
const calculate = () =>{
 let principal = document.getElementById('principal').value;
 let rate = document.getElementById('rate').value;
 let term = document.getElementById('duration').value; 
 let empty_message = document.getElementById('empty');

   //if field input is empty
 if (principal == 0 && rate == 0 && term == 0){
   empty_message.innerHTML = ('please input numbers in the fields.');
 }
 else{
    // simple interest rate = p*r*t/100
    let interest_rate = (principal*rate*term)/100;
    console.log(interest_rate);

    let roi = parseFloat(principal) + interest_rate;
    
   print_interest.textContent = '₦'+ interest_rate.toFixed(2);
   print_roi.textContent = '₦' + roi.toFixed(2);

 }



}


// Reset Function
const reset = () =>{
    document.getElementById('form').reset();
    print_interest.textContent = '';
    print_roi.textContent = '';

}