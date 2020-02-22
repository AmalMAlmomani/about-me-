`use strict`;


var score = 0;
var yName = prompt("What is your name ?");
alert(`Welcome! ${yName}  `);


function Q1() {
    var ques1 = prompt("Do you think that I like animals ?");
    switch (ques1.toLowerCase()) {
        case 'yes':
        case 'y':
            alert("No your are wrong , I hate all kind af animels except hourses.");
            break;
        case 'no':
        case 'n':
            alert("You are right!");
            score++;
            break;
        default:
            alert("please, try again! answer with yes or no to see the answer.");
            break;
    }
}
Q1();


function Q2() {
    var ques2 = prompt("Do you think that I like healthy food?");
    switch (ques2.toLowerCase()) {
        case 'yes':
        case 'y':
            alert("Pravo!");
            score++;
            break;
        case 'no':
        case 'n':
            alert("Uhh, I like it so much");
            break;
        default:
            alert("please, try again! answer with yes or no to see the answer.");
            break;
    }
}
Q2();

function Q3() {
    var ques3 = prompt("Do you think that I like coffee ?");

    switch (ques3.toLowerCase()) {
        case 'yes':
        case 'y':
            alert("Pravo!, I like it a lot");
            score++;
            break;
        case 'no':
        case 'n':
            alert("You are wrong! , I am a coffee addict");
            break;
        default:
            alert("please, try again! answer with yes or no to see the answer.");
            break;
    }
}
Q3();




function Q4() {
    var ques4 = prompt("Do you think that I like draw ? ");

    switch (ques4.toLowerCase()) {
        case 'yes':
        case 'y':
            alert("Yes, you know me a lot");
            score++;
            break;
        case 'no':
        case 'n':
            alert("Sorry you are fail");
            break;
        default:
            alert("please, try again! answer with yes or no to see the answer.");
            break;
    }
}
Q4();



function Q5() {
    var ques5 = prompt("Do you think that I like cars?");
    switch (ques5.toLowerCase()) {
        case 'yes':
        case 'y':
            alert("No. I dont mind.");
            break;
        case 'no':
        case 'n':
            alert("good!");
            score++;
            break;
        default:
            alert("please, try again! answer with yes or no to see the answer.");
            break;
    }
}
Q5();





function Q6() {
    for (var i = 0; i <= 4; i++) {
        var ques6 = parseInt(prompt("Guess what number I choose ? "));
        if (i == 4) {
            alert("the correct answer is 55");
            break;
        }
        if (ques6 == 55) {
            alert("you are right");
            score++;
            break;

        } else if (ques6 > 55) {
            alert("you are too high");
        } else if (ques6 < 55) {
            alert("you are too low");

        }

    }
}
Q6();



var places = ['amman', 'ajlon', 'aqaba', 'jarash', 'madaba', 'kerak'];
function Q7(){
for (p = 0; p <= 6; p++) {
    if (p == 6) {
        alert("you are out of attempts! , the right answer are amman, ajlon, aqaba, jarash, madaba and kerak'");
        break;
    }
    var ques7 = prompt("Guess what my favorite place ?");
    var le, l;
    for (l = 0, le = places.length; l < le; l++) {
        if (ques7 === places[l]) {
            alert("you are right");
            score++;
            break;
        }
    }
    if (ques7 === places[l]){
        break;

    }
}
}
Q7();
alert(`Thank you  ${yName} , Your score is : ${score}`);

