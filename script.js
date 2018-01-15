var buttons = document.getElementsByClassName("button");
var result1 = [];
var finalResult1;
var second = 0;
var modifier;
var result2 = [];
var finalResult2;

var myFunction = function() {
    var attribute = this.getAttribute("data-myValue");

    if (attribute == "-" || attribute == "+" || attribute == "*" || attribute == "/" || attribute == "="){
        if (attribute == "="){
            finalResult1 = result1.join('');
            var a = parseFloat(finalResult1);
            finalResult2 = result2.join('');
            var b = parseFloat(finalResult2);

            var c = finalResult1 + modifier + finalResult2;
            document.getElementById("result").innerHTML = eval(c);
        } else {
            this.style.opacity = .5;
            modifier = attribute;
            second = 1;
        }
    } else {
        console.log("normal case");
        if (second == 0){
            result1.push(attribute);
            document.getElementById("result").innerHTML = result1.join('');
        } else if (second == 1){
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].style.opacity = 1;
            }
            result2.push(attribute);
            document.getElementById("result").innerHTML = result2.join('');
        }

    }

};

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', myFunction, false);
}