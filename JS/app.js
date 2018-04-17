document.getElementById("click").addEventListener("click", function(){
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);

    var total = number1 + number2;
    document.getElementById("total").value = total

});
