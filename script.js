//1.ADD A SUBMIT EVENT LISTENER ON THE FORM
    //STOP THE PAGE FROM REFRESHING WEHN THE FOR IS SUBMITTED
    



//.. let's start..
//1.QUERY THE ELEMENT I WANT TO MODIFY (FORM):
const formElement = document.querySelector('form'); 
console.log(formElement);

//2.ADD EVENT LISTENER - WE PASS A 'SUBMIT' (call it submit because we are waiting for a submit to run my function) AND A CALL BACK FUNCTION as a ARGUMENT
formElement.addEventListener('submit', function(e){
   //stop the page fron refreshing
   e.preventDefault();
   //log out the event object which is generated when the form is bubmitted
   console.log(e);
   
   //SOLO PARA TESTEAR!
    // alert('fom submitted!');

    //query the DOM for the input element and checked whether is empty
    const inputElement = document.getElementById('toDoItem');
    console.log(inputElement);

    // ONLY IF THE USER HAS ENTERED AN ACTUAL TASK (AKA input is not empty):
    //value is a property que esta en mi inputElement y me dice que hay en el input (console)
    if (inputElement.value !== '') {
        console.log('CONGRATS');

        //GRAB THE USER'S TO DO ITEM FROM THE FORM INPUT
        console.log(inputElement.value);

        //CREATE AN LI:
        const liElement = document.createElement('li');
        console.log(liElement);
        
        //DISPLAY TO DO ON THE PAGE WITHIN AN LI ELEMENT
        //INCLUDE A CHECKBOX ICON WITHIN THE LI
        liElement.innerHTML = `<i class="fa-regular fa-square"></i>`;

        //ADD LO QUE EL USER TYPES IN THE INPUT: si uso textContent it will overright el checkbox element we just added
        //so... create an element that represents the text we have to add (our to do)
        const toDoContent = document.createTextNode(inputElement.value);
        console.log(toDoContent);

        //and then append that text element to the li:
        liElement.appendChild(toDoContent);


        //ADD THE LI ELEMENT TO THE UL:
        //DOM do you have a ul?? (usar querySelector) - then add the liElement as a child to the ul
        document.querySelector('ul').appendChild(liElement);

        //CLEAR THE INPUT
        inputElement.value = '';


    } else {
        alert('Please do not leave input empty');
    }


})


//THIS EVENT LISTENER IS CALL OUTSIDE THE ONE ON TOP
//WE HAVE TO QUERY THE DOM FOR THE ELEMENT AGAIN BECAUSE WE ARE OUT OF THE SCOPE AND DON'T HAVE ACCESS TO IT 
//***!!!!!THIS WONT WORK BECAUSE WE CAN ONLY ADD EVENT LISTENER TO ELEMENTS THAT ALREADY EXIST IN THE DOM AT THE TIME OF THE CODE EXECUTION!!!!!***
// const listElements = document.querySelector('li');

// listElements.addEventListener('click', function() {
//     console.log('To do has been checked');
    
// });

//SO... WE CAN USE 'EVENT PROPAGATION' AND TARGET THE PARENT (UL) OF MY LI THAT DOESN'T EXIST YET, AND ADD AN EVENT LISTENER TO IT
//WE QUERY THE DOM FOR THE UL
const ul = document.querySelector('ul');

//PASS THE e AS AN ARGUMENT OF THE FUNCTION
ul.addEventListener('click', function(e){
    //THE THIS KEYWORD REPRESENT THE OBJECT WHICH OWNS THE CODE WHICH IS CURRENTLY RUNNING - DON'T USE ARROW FUNCTION WHEN USING THE THIS WEYWORD
    // console.log(this);

    console.log(e);

    //AS LONG AS WE CLICKED ON THE ICON, THEN TOGGLE BETWEEN CHECKED/UNCHECKED (AKA DONE V/S NOT DONE):
    //'i' REPRESENTS THE ICON THAT WAS CHECKED
    if (e.target.localName === 'i') {
        console.log('checked box was clicked'); //THIS WILL SHOW IN THE CONSOLE WHEN THE CHECKBOX WAS CHECKED

        //toggle between checked / unchecked - go inside the e (event) in the console, go to target, them classList (here we will see the classes of my icon. And then we can use the toggle method to change classes whenever the user check or uncheck) 
        e.target.classList.toggle('fa-square-check');
        e.target.classList.toggle('fa-square');
        
    } 
})






//BONUS!!!
//ADD A RESET BUTTON WHICH CLEARS ALL OF THE TO DO'S
//ADD A REMOVE TASK BUTTON TO EACH TASK
//ADD A CONGRATULATION ALERT WHEN ALL OF THE EXISTING TO DO'S ARE CHECKED OFF