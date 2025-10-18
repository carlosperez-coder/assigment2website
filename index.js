function strReverse(s){
    var strs = s.split("");
    var revStr = strs.reverse().join("");
    console.log("This is your string in reverse: "+ revStr);
}

function isPalindrome(num){
    var numToStr = num.toString();
    var revStrNum = numToStr.split("").reverse().join("");
    if(numToStr === revStrNum){
        console.log("The series of numbers ["+ num +"] is a palindrome :) .");
    }else{
        console.log("The series of numbers ["+ num +"] is NOT a palindrome :( .");
    }
}

function totalTip(subtotal, tipPerc){
    // var tipPerc = document.getElementById().replace("%", " "); // What if user put "%" symbol.
    var tipNum = parseFloat(tipPerc) / 100;
    var total = parseFloat(subtotal) + (parseFloat(subtotal) * tipNum);
    console.log("The total amount to be paid including tip will be $"+ total);
}