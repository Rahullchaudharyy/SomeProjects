
// Select all buttons with the ID "Btn"
let buttons = document.querySelectorAll("#Btn");
let display = document.querySelector("#Result");
let clear  = document.querySelector('#Cut')
let del = document.querySelector('#delete');
let equalbtn= document.querySelector('#Equal')

// Loop through each button and add a click event listener
buttons.forEach(function(btn) {
    btn.addEventListener('click', function () {
        // Access the data-number attribute of the clicked button
        let data = btn.getAttribute('data-number');

        if(data=='C'){
            display.textContent = '';
        }else if(data == 'DE'){
        display.textContent =   display.textContent.slice(0,-1)
        }else if(data == '='){
            if (display.textContent === '') {
                alert("Please enter a number");
            }else if (!/\+|\-|\*|\/|\%/.test(display.textContent)) {
                alert("Please enter an expression");
            } 
            else {
                display.textContent = eval(display.textContent);
            }
        }
        else{
            display.textContent += `${data}`
        }
        console.log(data);
    });
});




