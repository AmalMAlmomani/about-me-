`use strict`;

var score = 0
var yName = prompt("What is your name ?");
console.log("What is your name ?", yName);
alert(`Welcome! ${yName}  `);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
function Q1(){
var ques1 = prompt("Do you think that I like animals ?");
switch (ques1.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("No your are wrong , I hate all kind af animels except hourses.");
        //console.log("Do you think that I like animals ?", ques1);
        break;
    case 'no':
    case 'n':
        alert("You are right!");
        score++;
        //console.log("Do you think that I like animals ?", ques1);
        break;
    default:
        alert("please, try again! answer with yes or no to see the answer.");
        //console.log("Do you think that I like animals ?", ques1);
        break;
}
}
Q1();
///////////////////////////////////////////////////////////////////////////////////////////////////////////

function Q2(){
var ques2 = prompt("Do you think that I like healthy food?");
switch (ques2.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("Pravo!");
        score++;
        //console.log("Do you think that I like healthy food?", ques2);
        break;
    case 'no':
    case 'n':
        alert("Uhh, I like it so much");
        //console.log("Do you think that I like healthy food?", ques2);
        break;
    default:
        alert("please, try again! answer with yes or no to see the answer.");
        //console.log("Do you think that I like healthy food?", ques2);
        break;
}
}



Q2();
///////////////////////////////////////////////////////////////////////////////////////////////////////////

function Q3(){
var ques3 = prompt("Do you think that I like coffee ?");

switch (ques3.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("Pravo!, I like it a lot");
        score++;
        //console.log("Do you think that I like coffee ?", ques3);
        break;
    case 'no':
    case 'n':
        alert("You are wrong! , I am a coffee addict");
        //console.log("Do you think that I like coffee ?", ques3);
        break;
    default:
        alert("please, try again! answer with yes or no to see the answer.");
        //console.log("Do you think that I like coffee ?", ques3);
        break;
}
}
Q3();
///////////////////////////////////////////////////////////////////////////////////////////////////////////

function Q4 (){
var ques4 = prompt("Do you think that I like draw ? ");

switch (ques4.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("Yes, you know me a lot");
        score++;
        //console.log("Do you think that I like draw ? ", ques4);
        break;
    case 'no':
    case 'n':
        alert("Sorry you are fail");
        //console.log("Do you think that I like draw ? ", ques4);
        break;
    default:
        alert("please, try again! answer with yes or no to see the answer.");
        //console.log("Do you think that I like draw ? ", ques4);
        break;
}
}
Q4();
///////////////////////////////////////////////////////////////////////////////////////////////////////////

function Q5(){
var ques5 = prompt("Do you think that I like cars?");
switch (ques5.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("No. I dont mind.");
        //console.log("Do you think that I like cars?", ques5);
        break;
    case 'no':
    case 'n':
        alert("good!");
        score++;
        //console.log("Do you think that I like cars?", ques5);
        break;
    default:
        alert("please, try again! answer with yes or no to see the answer.");
        //console.log("Do you think that I like cars?", ques5);
        break;
}
}
Q5();
///////////////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////

function Q6(){
for (var i = 0; i <= 4; i++) {
    var ques6 = prompt("Guess what number I choose ? ");
    if (i == 4) {
        alert("the correct answer is 55");
        //console.log("Guess what number I choose ? ", ques6);
        break;
    }
    if (ques6 == 55) {
        alert("you are right");
        console.log("Guess what number I choose ? ", ques6);
        score++;
        break;

    } else if (ques6 > 55) {
        alert("you are too high");
        //console.log("Guess what number I choose ? ", ques6);
    } else if (ques6 < 55) {
        alert("you are too low");
        //console.log("Guess what number I choose ? ", ques6);

    }

}
}
Q6();
/////////////////////////////////////////
/*
var places = ['Blue lagoon', 'Switzerland', 'Unaited state', 'lituania', 'Maldives', 'Greece'];
for (var p = 0; p <= 6; p++) {
    if (p == 6) {
        alert("you are out of attempts! , the right answer are Blue lagoon,Switzerland, Unaited state, lituania, Maldives and Greece");

        break;
    }
    //console.log(places[p]);
    var ques7 = prompt("Guess what my favorite place ?");
    if (ques7 === places[p]) {
        alert("you are right");
        //console.log("Guess what my favorite place ?", ques7);
        score++;
        break;

    }


}*/
//////////////////////////////////////////////////////////

<<<<<<< HEAD
var places = ['amman', 'ajlon', 'aqaba', 'jarash', 'madaba', 'kerak'];

//places.push('aaaa','ssss','dddd');
//alert("array length"+ places.length);

=======
function Q7(){

var places =['amman', 'ajlon', 'aqaba', 'jarash', 'madaba', 'kerak'];
>>>>>>> 37fa63f48426fe97b814df7f39c495eb3c896cb1
for (p = 0; p <= 6; p++) {
    if (p == 6) {
        alert("you are out of attempts! , the right answer are amman, ajlon, aqaba, jarash, madaba and kerak'");
        //console.log("Guess what my favorite place ?", ques7);
        break;
    }
    var ques7 = prompt("Guess what my favorite place ?");
    var le, l;
    for (l = 0, le = places.length; l < le; l++) {
        if (ques7 === places[l]) {
            alert("you are right");
            //console.log("Guess what my favorite place ?", ques7);
            score++;
            
            break;
        }
    }
    if (ques7 === places[l]) {
        break;

    }
}
}
Q7();



///////////////////////////////////////////////////////

alert(`Thank you  ${yName} , Your score is : ${score}`);









