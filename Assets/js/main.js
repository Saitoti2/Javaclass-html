//get the button elements
const javaclass=document.getElementById("colorButton");

//add event listener for the button click
javaclass.addEventListener('click', function(){

    //change the color of the button
        javaclass.style.backgroundcolor=javaclass.style.backgroundColor==='blue' ? '#4CAF50':'blue'
    });

