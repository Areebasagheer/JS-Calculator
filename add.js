var Result = document.getElementById('result');

function insertValue(value){
    Result.value += value;
}

function clearValue(){
    Result.value = '';
}

function deleteResult(){
    Result.value = Result.value.slice(0,-1);
}

function equal(){
    Result.value = eval(Result.value);
}






