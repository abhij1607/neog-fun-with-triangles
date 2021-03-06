const angleInputOne = document.querySelector('#angle-one');
const angleInputTwo = document.querySelector('#angle-two');
const angleInputThree = document.querySelector('#angle-three');
const btnCheck = document.querySelector('#btn-check');
const errorDiv = document.querySelector('.error-handler');
const outputDiv = document.querySelector('.output');

btnCheck.addEventListener('click',submit);

// dobInput.addEventListener('keyup', a);
function submit(){
    clearOutput();
    removeError();
    var angleOne = angleInputOne.value;
    var angleTwo = angleInputTwo.value;
    var angleThree = angleInputThree.value;
    validateInput(angleOne,angleTwo,angleThree);

}

function validateInput(angleOne,angleTwo,angleThree){
    if (Number(angleOne) < 1 || Number(angleTwo) < 1 || Number(angleThree) < 1){
        showError("Please Enter Value more than 0 in all section")
    } else if(Number(angleOne)+Number(angleTwo)+Number(angleThree)===180){
        showOutput("Yayy, angles form a triangle");
    }else{
        showOutput("Oh, angles do not form a triangle");
    }
}

function showError(error) {
    errorDiv.innerHTML = error;
}

function removeError(){
    errorDiv.innerHTML="";
}

function showOutput(msg){
    outputDiv.innerHTML = msg;
}

function clearOutput(){
    outputDiv.innerHTML = "";
}

// var dateString = dobInput.replaceAll("-","");
// console.log(dateString);