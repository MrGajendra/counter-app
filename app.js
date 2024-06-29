let count = 0;

document.getElementById("pluseBtn").onclick = function(){
    count+= 1
    document.getElementById("countLable").innerHTML = count;

}

document.getElementById("minusBtn").onclick = function(){
    if(count > 0){
        count-= 1
    document.getElementById("countLable").innerHTML = count;
    }
    else{
        count = 0;
        document.getElementById("countLable").innerHTML = count;
    };

}

document.getElementById("resetBtn").onclick = function(){
    count= 0
    document.getElementById("countLable").innerHTML = count;

}