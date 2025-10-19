var s = document.getElementById('inpForStr');
function strReverse(s){
    var strs = s.split("");
    var revStr = strs.reverse().join("");
    document.getElementById('out').innerHTML = "Your string in reverse will be: " + revStr;
}

var num = document.getElementById('inpForPalin');
function isPalindrome(num){
    var numToStr = num.toString();
    var revStrNum = numToStr.split("").reverse().join("");
    if(numToStr === revStrNum){
        document.getElementById('palinOut').innerHTML = "The series of numbers ["+ num +"] is a palindrome :) ." ;
    }else{
        document.getElementById('palinOut').innerHTML = "The series of numbers ["+ num +"] is NOT a palindrome :( .";
    }
}

var subtotal = document.getElementById('inpForSubT');
var tipPerc = document.getElementById('inpForPer');
function totalTip(subtotal, tipPerc){
    var tipNum = parseFloat(tipPerc) / 100;
    var total = parseFloat(subtotal) + (parseFloat(subtotal) * tipNum);
    document.getElementById('totalOut').innerHTML = "The total amount to be paid including tip will be $" + total.toFixed(2);
}