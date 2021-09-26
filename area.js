const sideA = document.querySelector('#side-A');
const sideB = document.querySelector('#side-B');
const btnCheck = document.querySelector('#btn-check');
const errorDiv = document.querySelector('.error-handler');
const outputDiv = document.querySelector('.output');

btnCheck.addEventListener('click',submit);

function submit(){
    clearOutput();
    removeError();
    var a = (sideA.value);
    var b = sideB.value;
    var area = 0.5*a*b;
    validate(a,b,area);
    
}

function validate(a,b,area){
    if(!a || !b){
        showError("Please enter both sides");
    } else if(a<1||b<1){
        showError("Please enter value greater than zero");
    }   else{
        showOutput("Hypotenuse for given length of side is " + area);
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